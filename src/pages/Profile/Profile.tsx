import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, makeStyles, TextField, Theme, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {profileActions} from "../../redux/profile/reducer";
import {useHistory, useParams} from 'react-router-dom';
import {getProfileDataSelector} from "../../redux/profile/selectors";
import {getUserDataSelector} from "../../redux/auth/selectors";
import {Preloader} from "../../components/Preloader/Preloader";
import userPhoto from '../../assets/images/userIcon.jpeg'
import {ContactsType} from "../../types/types";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) => ({
    wallpaper: {
        padding: 0,
    },
    wallpaperImg: {
        width: '100%',
        height: '300px',
    },
    profileInfo: {
        display: 'flex',
        width: '90vw',
        margin: '0 auto',
        justifyContent: 'flex-start',
    },
    posts: {
        width: '100%',
        margin: '10px',
        padding: '10px',
    },
    post: {
        width: '100%',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flexStart',
    },
    postMessage: {
        margin: '0 20px',
    },
    likesCount: {
        display: 'flex',
        alignItems: 'center'
    },
    postImg: {
        width: '40px',
        borderRadius: '5px',
    },
    addPostButton: {
        padding: '15px 25px',
    },
    deletePostButton: {
        marginLeft: '20px',
    },
    addPostForm: {
        padding: '30px',
    },
    addPostInput: {
        marginRight: '10px',
    },
    addPostText: {
        marginBottom: '10px',
    },
    profileImg: {
        width: '400px',
        borderRadius: '10px',
        margin: '-150px 30px 0 0',
        padding: 0,
    },
    fullName: {
        margin: '-70px 0 40px 0',
        color: '#f6f6f6',
    },
    line: {
        border: '1px solid #ccc',
        backgroundColor: '#cccccc',
    },
    contacts: {
        margin: '10px 30px 0',
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

    const [postMessage, setPostMessage] = useState('')

    const onAddPost = () => {
        dispatch(profileActions.addPost(postMessage))
    }

    const onDeletePost = (post: any) => {
        dispatch(profileActions.deletePost(post.id))
    }

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
        <Card>
            <CardContent className={classes.wallpaper}>
                <img className={classes.wallpaperImg} src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701591408.jpg"/>
            </CardContent>
            <CardContent className={classes.profileInfo}>
                <div>
                    <img className={classes.profileImg} src={profileData.profile?.photos.large || userPhoto}/>
                </div>
                <div>
                    <Typography variant="h4" className={classes.fullName}>{profileData.profile.fullName}</Typography>
                    <Typography variant="h6"><b>Looking for a
                        job:</b> {profileData.profile.lookingForAJob ? "yes" : 'no'}</Typography>
                    <hr className={classes.line}/>
                    <Typography variant="h6"><b>About me:</b> {profileData.profile.aboutMe}</Typography>
                    <hr className={classes.line}/>
                    {
                        profileData.profile.lookingForAJob &&
                        <Typography variant="h6"><b>My skills:</b> {profileData.profile.lookingForAJobDescription}
                        </Typography>
                    }
                </div>
                <div className={classes.contacts}>
                    <Typography variant="h6"> <b>Contacts:</b>
                        <hr className={classes.line}/>
                        {
                            Object
                                .keys(profileData.profile.contacts)
                                .map((key) => {
                                    return <Contact key={key} contactTitle={key}
                                                    contactValue={profileData.profile?.contacts[key as keyof ContactsType] || 'contacts'}/>
                                })}</Typography>
                </div>
            </CardContent>
            <Card>
                <CardContent className={classes.posts}>
                    <Card className={classes.addPostForm}>
                        <form noValidate autoComplete="off">
                            <Typography variant="h5" className={classes.addPostText}>Add new post</Typography>
                        <TextField value={postMessage} onChange={(e) => setPostMessage(e.target.value)} className={classes.addPostInput} id="standard-basic" variant="outlined" label="Enter your text..."/>
                            <Button onClick={onAddPost} variant="contained" color="primary" className={classes.addPostButton}>Add post</Button>
                    </form>
                    </Card>
                    {profileData.posts.map((post) => <Card className={classes.post} key={post.id}>
                        <img className={classes.postImg} src={profileData.profile?.photos.large || userPhoto}/>
                        <Typography variant="subtitle2" className={classes.postMessage}>{post.message}</Typography>
                        <Typography variant="subtitle2" className={classes.likesCount}><FavoriteIcon/>{post.likesCount}</Typography>
                        <Button onClick={onDeletePost} size="small" variant="contained" color="secondary" className={classes.deletePostButton}>Delete post</Button>
                    </Card>)}
                </CardContent>
            </Card>
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
