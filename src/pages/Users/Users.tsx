import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersSelector} from "../../redux/users/selectors";
import {usersActions} from "../../redux/users/reducer";
import {User} from "./User";
import {UserType} from "../../types/types";
import {Paginator} from "../../components/Paginator/Paginator";
import {Card, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: '100%',
    }
}));

export const Users: React.FC = () => {

    const classes = useStyles();

    const data = useSelector(getUsersSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(usersActions.fetchedUsers(1, 20))
    },[dispatch])

    const follow = (userId: number) => {
        dispatch(usersActions.fetchedFollow(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(usersActions.fetchedUnfollow(userId));
    }

    return <Card className={classes.root}>

        <Paginator currentPage={data.pageSize}
                   totalItemsCount={data.totalUsersCount} pageSize={data.pageSize}/>
        <div>
            {
                data.users.map((u: UserType) => <User follow={follow} unfollow={unfollow} user={u}
                                     key={u.id}

                    />
                )
            }
        </div>
    </Card>
};
