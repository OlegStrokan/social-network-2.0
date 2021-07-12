import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersSelector} from "../../redux/users/selectors";
import {usersActions} from "../../redux/users/reducer";
import {User} from "./User";
import {UserType} from "../../types/types";
import {Paginator} from "../../components/Paginator/Paginator";
import {Card, makeStyles} from "@material-ui/core";
import {Preloader} from "../../components/Preloader/Preloader";

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
    }, [])

    const follow = (userId: number) => {
        dispatch(usersActions.fetchedFollow(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(usersActions.fetchedUnfollow(userId));
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(usersActions.fetchedUsers(pageNumber, 20))
    }

    if (data.loading) {
        return <Preloader/>
    }

    return <Card className={classes.root}>

        <Paginator currentPage={data.pageSize}
                   totalItemsCount={data.totalUsersCount} pageSize={data.pageSize} onPageChanged={onPageChanged}/>
        <div>
            {
                data.users.map((u: UserType) => <User follow={follow} unfollow={unfollow} user={u} followingInProgress={data.followingInProgress}
                                     key={u.id}

                    />
                )
            }
        </div>
    </Card>
};
