import React, {useState} from 'react';
import {
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid, Link, makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getUserDataSelector} from "../../redux/auth/selectors";
import { Redirect } from 'react-router-dom';
import {authActions} from "../../redux/auth/reducer";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const Login = () => {
    const {isAuth, captchaUrl, loading, error} = useSelector(getUserDataSelector)
    const classes = useStyles();

    const dispatch = useDispatch()

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [rememberMe, setRememberMe] = useState(false);

    const onSubmit = () => {
        dispatch(authActions.fetchedLogin(email, password, rememberMe, captchaUrl))
    }
    if (isAuth) return <Redirect to="/profile"/>


    return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    value={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                />
                <Button
                    onClick={onSubmit}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="https://social-network.samuraijs.com/login" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://social-network.samuraijs.com/signUp" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container>
};

