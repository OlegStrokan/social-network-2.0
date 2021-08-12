import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersSelector} from "../../redux/users/selectors";
import {FilterType, usersActions} from "../../redux/users/reducer";
import {User} from "./User";
import {UserType} from "../../types/types";
import {Paginator} from "../../components/Paginator/Paginator";
import {Card, makeStyles, Typography} from "@material-ui/core";
import {Preloader} from "../../components/Preloader/Preloader";
import {UsersSearchForm} from "./UsersSearchForm";
import queryString from "querystring";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        width: '100%',
    },
    actions: {
        margin: '10px',
        padding: '25px',
    },
    users: {
        margin: '10px',
    },
    notFound: {
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
    }
}));

type QueryParamsType = { term?: string; page?: string; friend?: string }


export const Users: React.FC = () => {

    const classes = useStyles();

    const data = useSelector(getUsersSelector)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualPage = data.currentPage
        let actualFilter = data.filter
        if (!!parsed.page) actualPage = Number(parsed.page)


        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}

        switch(parsed.friend) {
            case "null":
                actualFilter = {...actualFilter, friend: null}
                break;
            case "true":
                actualFilter = {...actualFilter, friend: true}
                break;
            case "false":
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(usersActions.fetchedUsers(actualPage, data.pageSize, actualFilter.term, actualFilter.friend))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!data.filter.term) query.term = data.filter.term
        if (data.filter.friend !== null) query.friend = String(data.filter.friend)
        if (data.currentPage !== 1) query.page = String(data.currentPage)

        history.push({
            search: queryString.stringify(query)
        })
    }, [data.filter, data.currentPage, history])

    const follow = (userId: number) => {
        debugger
        dispatch(usersActions.fetchedFollow(userId));
    }
    const unfollow = (userId: number) => {
        debugger
        dispatch(usersActions.fetchedUnfollow(userId));
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(usersActions.fetchedUsers(pageNumber, data.pageSize))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(usersActions.fetchedUsers(1, data.pageSize, filter.term, filter.friend))
    }

    if (data.loading) {
        return <Preloader/>
    }

    return <Card className={classes.root}>
        <Card className={classes.actions}>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
        </Card>
        <Card className={classes.users}>
            {data.users.length === 0 && <Card className={classes.notFound}>
                <Typography variant="h5">User with this name not found...</Typography>
            </Card>
            }
            {
                data.users.map((u: UserType) => <User follow={follow} unfollow={unfollow} user={u}
                                                      followingInProgress={data.followingInProgress}
                                                      key={u.id}

                    />
                )
            }
        </Card>
        {data.users.length !== 0 &&
        <Card className={classes.actions}>
            <Paginator currentPage={data.pageSize}
                       totalItemsCount={data.totalUsersCount} pageSize={data.pageSize} onPageChanged={onPageChanged}/>
        </Card>}
    </Card>
};
