import React, {useEffect, useState} from 'react';
import {Card, CardContent, makeStyles, Theme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {profileActions} from "../../redux/profile/reducer";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    content: {
        marginRight: theme.spacing(2),
    },
    userImg: {

    }
}))

export const Profile:React.FC = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const userId = 14037
    useEffect(() => {
        dispatch(profileActions.fetchedProfileData(userId))
    },[])


    const [editMode, setEditMode] = useState(false)
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                hello

            </CardContent>
        </Card>
    )
}
