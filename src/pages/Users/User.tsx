import React from 'react'
import userPhoto from '../../assets/images/user.jpeg'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'
import {Card, makeStyles} from "@material-ui/core";

type PropsType = {
    user: UserType,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
}

const useStyles = makeStyles((theme) => ({
   root: {
       width: '100%',
       margin: '10px',
   },
    userPhoto: {
        width: '100px',
    }
}));

export const User: React.FC<PropsType> = ({user, unfollow, follow}) => {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.userPhoto}/>
                       </NavLink>
                    </div>
                     <div>
                        {user.followed
                            ? <button
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
        </Card>)
}
