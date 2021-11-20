import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersSelector} from "../../redux/users/selectors";
import {FilterType} from "../../redux/users/reducer";
import {User} from "./User";
import {UserType} from "../../types/types";
import {Paginator} from "../../components/Paginator/Paginator";
import {Card, makeStyles, Typography} from "@material-ui/core";
import {Preloader} from "../../components/Preloader/Preloader";
import {UsersSearchForm} from "./UsersSearchForm";
import queryString from "querystring";
import {useHistory} from "react-router-dom";
import { fetchedUsers } from '../../redux/users/action-creators';
import { UserRequestType } from '../../api/users-api';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: '0 10px',
    },
    actions: {
        margin: '10px',
        padding: '25px',
        backgroundColor: '#e9e9e9',
    },
    users: {
        margin: '10px',
        backgroundColor: '#e9e9e9',
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
        const dataForRequest = {
            currentPage: actualPage,
            pageSize: data.pageSize,
            term: data.filter.term,
            friend: data.filter.friend
        }

        dispatch(fetchedUsers(dataForRequest))
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
        dispatch(fetchedFollow(userId));
    }
    const unfollow = (userId: number) => {
        dispatch(fetchedUnfollow(userId));
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(fetchedUsers(pageNumber, data.pageSize))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(fetchedUsers(1, data.pageSize, filter.term, filter.friend))
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
