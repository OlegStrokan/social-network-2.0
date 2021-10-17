import React from 'react'
import userPhoto from '../../assets/images/userIcon.jpeg'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'
import {makeStyles} from "@mui/styles";
import {Button, Typography} from "@mui/material";

type PropsType = {
    user: UserType,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    followingInProgress: Array<number>,
}

const useStyles = makeStyles((theme) => ({
   root: {
       margin: '10px',
       display: 'flex',
       justifyContent: 'space-between',
       alignItems: 'center',
       borderBottom: '3px solid #f7f7f7'
   },
    userPhoto: {
        width: '50px',
        height: '50px',
        backgroundSize: 'cover',
        borderRadius: '50%',
        margin: '10px 20px 10px 100px',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navLink: {
       textDecoration: 'none',
       color: 'black',
    }
}));

export const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress}) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto}/>
                </NavLink>
                <Typography variant="h6"> <NavLink to={'/profile/' + user.id} className={classes.navLink}>{user.name}</NavLink></Typography>
            </div>
            <div>
                {user.followed
                    ? <Button variant="contained" color="primary" disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</Button>
                    : <Button variant="contained" color="primary" disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</Button>}

            </div>
        </div>)
}
