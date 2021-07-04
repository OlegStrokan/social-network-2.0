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
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        content: {
            marginRight: theme.spacing(2),
        },
        userImg: {

        }
    }),
);


export const Profile: React.FC = () => {
    const classes = useStyles();
    const data = useSelector(getProfileDataSelector)
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(getUserDataSelector).userId


    useEffect(() => {
        if (!userId) {
                history.push("/login");
        }
        // @ts-ignore
        dispatch(profileActions.fetchedProfileData(userId))
    })

    const [editMode, setEditMode] = useState(false)

    if (!data.profile) {
        return <Preloader/>
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img src={data.profile.photos.large || userPhoto} className={classes.userImg}/>

            </CardContent>
        </Card>
    );
};

