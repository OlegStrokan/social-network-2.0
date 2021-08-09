import React from 'react'
import userPhoto from '../../assets/images/userIcon.jpeg'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'
import {Card, makeStyles} from "@material-ui/core";

type PropsType = {
    user: UserType,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    followingInProgress: Array<number>,
}

const useStyles = makeStyles((theme) => ({
   root: {
       width: '100%',
       margin: '10px',
       display: 'flex',
       justifyContent: 'space-around',
   },
    userPhoto: {
        width: '50px',
        height: '50px',
        backgroundSize: 'cover',
        borderRadius: '50%',
    }
}));

export const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto}/>
                </NavLink>
                        <div>{user.name}</div>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</button>}

            </div>
        </Card>)
}
