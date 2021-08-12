import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardMedia, makeStyles, Theme, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {profileActions} from "../../redux/profile/reducer";
import {useHistory, useParams} from 'react-router-dom';
import {getProfileDataSelector} from "../../redux/profile/selectors";
import {getUserDataSelector} from "../../redux/auth/selectors";
import {Preloader} from "../../components/Preloader/Preloader";
import userPhoto from '../../assets/images/userIcon.jpeg'
import {ContactsType} from "../../types/types";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    wallpaper: {
        width: '100%',
        height: '300px',
    },
    profileInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    posts: {

    },
    profileImg: {
        width: '300px',
        borderRadius: '10px',
    }
}))

export const Profile:React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const authData = useSelector(getUserDataSelector);
    const profileData = useSelector(getProfileDataSelector);
    let userId = useParams<any>();
    let history = useHistory();
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if (!userId?.userId) {
            userId = authData.userId
            if (!userId) {
                history.push('/login');
            }
        }
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            if (Number(userId)) {
                dispatch(profileActions.fetchedProfileData(userId));
            } else {
                dispatch(profileActions.fetchedProfileData(userId.userId));
            }
        }
    }, [])

    if (!profileData.profile) {
        return <Preloader/>
    }



    return (
        <Card className={classes.root}>
            <CardContent className={classes.wallpaper}>

            </CardContent>
            <CardContent className={classes.profileInfo}>
                <div>
                <img className={classes.profileImg} src={profileData.profile?.photos.large || userPhoto}/>
                </div>
                <div>
                    <Typography variant="h6">{profileData.profile.fullName}</Typography>
                    <Typography variant="h6">Looking for a job: {profileData.profile.lookingForAJob ? "yes" : 'no'}</Typography>
                    <Typography variant="h6">About me: {profileData.profile.aboutMe}</Typography>
                    {
                        profileData.profile.lookingForAJob &&
                        <Typography variant="h6">My skills: {profileData.profile.lookingForAJobDescription}</Typography>
                    }
                </div>
                <div>
                <Typography variant="h6"> Contacts: {
                    Object
                        .keys(profileData.profile.contacts)
                        .map((key)  => {
                            return <Contact key={key} contactTitle={key} contactValue={profileData.profile?.contacts[key as keyof ContactsType] || 'contacts'}/>
                        })}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <Typography><b>{contactTitle}</b>: {contactValue}</Typography>
}
