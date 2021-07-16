import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent, CardHeader,
    CardMedia,
    createStyles,
    makeStyles,
    Theme,
    Typography
} from "@material-ui/core";
import {ProfileType} from "../../types/types";
import {Preloader} from "../../components/Preloader/Preloader";
import userPhoto from "../../assets/images/user.jpeg"
import {useDispatch, useSelector} from "react-redux";
import {getUserDataSelector} from "../../redux/auth/selectors";
import {getProfileDataSelector} from "../../redux/profile/selectors";
import {profileActions} from "../../redux/profile/reducer";
import {RouteComponentProps, useHistory, useParams} from "react-router-dom";
import {appActions} from "../../redux/app/reducer";

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


export const Profile: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const userId = 14037
    useEffect(() => {
            dispatch(profileActions.fetchedProfileData(userId))
    },[dispatch])

    const [editMode, setEditMode] = useState(false)


    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
             hello

            </CardContent>
        </Card>
    );
};

