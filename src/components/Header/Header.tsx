import React from 'react';
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Typography, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../../redux/auth/reducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        loginTitle: {
            color: '#fff',
            textDecoration: 'none',
        }
    }),
);

type HeaderProps = {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
    authData: AuthStateType;
}


export const Header: React.FC<HeaderProps> = ({openMenu, setOpenMenu, authData}) => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                {authData.isAuth &&
                <IconButton onClick={() => setOpenMenu(!openMenu)} edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>}
                <Typography variant="h6" className={classes.title}>
                    Description
                </Typography>
                {authData.isAuth ? <Button color="inherit"><NavLink to='/login'
                                                                    className={classes.loginTitle}>Logout</NavLink></Button>
                    :
                    <Button color="inherit"><NavLink to='/login' className={classes.loginTitle}>Login</NavLink></Button>
                }
            </Toolbar>
        </AppBar>
    );
};

