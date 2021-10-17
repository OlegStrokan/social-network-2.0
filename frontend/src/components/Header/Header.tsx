import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {authActions, AuthStateType} from "../../redux/auth/reducer";
import {useDispatch} from "react-redux";
import {WeatherStateType} from "../../redux/weather/reducer";
import {makeStyles} from "@mui/styles";
import {AppBar, Button, IconButton, Theme, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '50px',
        backgroundColor: '#E9E9E9',
        borderRadius: '5px',
        height: '45px',
        color: '#000',
        padding: '0 20px',
    },
    img: {
        marginTop: '8px',
    },
    button: {
        border: '1px solid #E9E9E9',
        padding: '9px 20px',
    },
    loginLink: {
        color: '#fff',
        textDecoration: 'none',
    }
}));

type HeaderProps = {
    weatherData: WeatherStateType;
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
    authData: AuthStateType;
}

export const Header: React.FC<HeaderProps> = ({weatherData, openMenu, setOpenMenu, authData}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const description = useLocation().pathname;

    const onSubmit = () => {
        dispatch(authActions.fetchedLogout())
    }

    const weatherIconUrl = "http://openweathermap.org/img/w/" + weatherData.weatherData?.weather[0].icon + ".png";


    return (
        <AppBar position="static">
            <Toolbar className={classes.root}>
                <div className={classes.item}>
                <IconButton onClick={() => setOpenMenu(!openMenu)} edge="start"
                            color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    {description.slice(1)}
                </Typography>
                </div>
                <div className={classes.item}>
                    {
                        weatherData.weatherData &&
                        <div className={classes.weatherInfo}>
                            <Typography variant="subtitle2"><b>In Prague:</b>{weatherData.weatherData.main.temp} degree</Typography>
                            <img src={weatherIconUrl} className={classes.img}/>
                        </div>
                    }
                    {authData.isAuth ? <Button className={classes.button} color="inherit" onClick={onSubmit}>Logout</Button>
                        :
                    <Button className={classes.button} color="inherit"><NavLink className={classes.loginLink} to='/login' >Login</NavLink></Button>
                }
                </div>
            </Toolbar>
        </AppBar>
    );
};

