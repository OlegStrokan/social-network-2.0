import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Card, CardContent, makeStyles, TextField, Theme, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {profileActions} from "../../redux/profile/reducer";
import {useHistory, useParams} from 'react-router-dom';
import {getProfileDataSelector} from "../../redux/profile/selectors";
import {getUserDataSelector} from "../../redux/auth/selectors";
import {Preloader} from "../../components/Preloader/Preloader";
import userPhoto from '../../assets/images/userIcon.jpeg'
import { ContactsType, ProfileType } from '../../types/types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as yup from 'yup';
import { useFormik } from 'formik';
const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        margin: '0 10px',
    },
    background: {
        backgroundColor: '#e9e9e9',
        margin: '15px',
    },
    wallpaper: {
        padding: 0,
    },
    wallpaperImg: {
        width: '100%',
        height: '300px',
    },
    profileInfo: {
        display: 'flex',
        margin: '15px',
        justifyContent: 'flex-start',
        backgroundColor: '#e9e9e9',
        borderRadius: '5px',
    },
    posts: {
        margin: '20px',
        padding: '10px',
    },
    post: {
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
    profileImgButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    profileButton: {
        width: '180px',
        margin: '20px 30px 0 0',
    },
    fullName: {
        margin: '-80px 0 40px 0',
        color: '#f6f6f6',
    },
    line: {
        border: '1px solid #ccc',
        backgroundColor: '#cccccc',
    },
    contacts: {
        margin: '10px 30px 0',
    },
}))

export const Profile = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const authData = useSelector(getUserDataSelector);
    const profileData = useSelector(getProfileDataSelector);
    let userId = useParams<any>();
    let history = useHistory();
    let isOwner = !userId.userId;



    const [editMode, setEditMode] = useState(false);

    const [postMessage, setPostMessage] = useState('')

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            // @ts-ignore
            dispatch(profileActions.fetchedPhoto(e.target.files[0]));
        }
    }

    const onAddPost = () => {
        dispatch(profileActions.addPost(postMessage))
    }

    const onDeletePost = (post: any) => {
        dispatch(profileActions.deletePost(post.id))
    }

    const changeEditMode = () => {
        setEditMode(!editMode)
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

    const validationSchema = yup.object({
        fullName: yup
          .string()
          .min(8, 'Full name should be of minimum 2 characters length')
          .required('Email is required'),
        lookingForAJob: yup
          .string()
          .required('Password is required'),
        aboutMe: yup
          .string()
          .min(8, 'Full name should be of minimum 2 characters length')
          .required('Email is required'),
        skills: yup
          .string()
          .required('Skills is required'),
        contacts: yup
          .string()
          .min(8, 'Full name should be of minimum 2 characters length')
          .required('Email is required'),
    });

        const formik = useFormik({
            initialValues: {} as ProfileType,
            validationSchema: validationSchema,
            onSubmit: (values) => {
                // @ts-ignore
                profileActions.fetchedNewProfileData(values).then(
                  () => {
                      setEditMode(false);
                  }
                );
            },
        });


    if (!profileData.profile) {
        return <Preloader/>
    }

    return (
        <Card className={classes.wrapper}>
            <CardContent className={classes.wallpaper}>
                <img className={classes.wallpaperImg} src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701591408.jpg"/>
            </CardContent>
            <CardContent className={classes.profileInfo}>
                <div className={classes.profileImgButton}>
                    <img className={classes.profileImg} src={profileData.profile?.photos.large || userPhoto}/>
                    {isOwner &&
                    <Button className={classes.profileButton} size="large" variant="contained" component="label" color="primary">Change image
                        <input type="file" hidden onChange={onMainPhotoSelected}/>
                    </Button>}

                </div>
                {editMode ?
                  <div>
                      <div>
                          <form onSubmit={formik.handleSubmit}>
                              <TextField
                                fullWidth
                                id="fullname"
                                name="fullname"
                                label="Full name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                              />
                              <TextField
                                fullWidth
                                id="lookingForAJob"
                                name="lookingForAJob"
                                label="Looking for a job"
                                value={formik.values.lookingForAJob}
                                onChange={formik.handleChange}
                                error={formik.touched.lookingForAJob && Boolean(formik.errors.lookingForAJob)}
                                helperText={formik.touched.lookingForAJob && formik.errors.lookingForAJob}
                              />
                              <TextField
                                fullWidth
                                id="aboutMe"
                                name="aboutMe"
                                label="About me"
                                value={formik.values.aboutMe}
                                onChange={formik.handleChange}
                                error={formik.touched.aboutMe && Boolean(formik.errors.aboutMe)}
                                helperText={formik.touched.aboutMe && formik.errors.aboutMe}
                              />
                              <TextField
                                fullWidth
                                id="skills"
                                name="skills"
                                label="Skills"
                                value={formik.values.skills}
                                onChange={formik.handleChange}
                                error={formik.touched.skills && Boolean(formik.errors.skills)}
                                helperText={formik.touched.skills && formik.errors.skills}
                              />
                              <Typography variant="h6"> <b>Contacts:</b>
                                  {
                                      Object
                                        .keys(profileData.profile.contacts)
                                        .map((key) => {
                                            return <TextField
                                              fullWidth
                                              id={'contacts.' + key}
                                              name={'contacts.' + key}
                                              label={key}
                                              value={formik.values.contacts}
                                              onChange={formik.handleChange}
                                              error={formik.touched.contacts && Boolean(formik.errors.contacts)}
                                              helperText={formik.touched.contacts && formik.errors.contacts}
                                            />
                                        })}</Typography>
                              <Button color="primary" variant="contained" fullWidth type="submit">
                                  Submit
                              </Button>
                          </form>
                      </div>
                      <Button onClick={changeEditMode} size="large" variant="contained" component="label" color="primary">Back</Button>

                  </div>
                  :
                  <>
                      <Button onClick={changeEditMode} size="large" variant="contained" component="label" color="primary">Edit</Button>
                    <div>
                        <Typography variant="h4">{profileData.profile.fullName}</Typography>
                        <Typography variant="h6"><b>Looking for a
                            job:</b> {profileData.profile.lookingForAJob ? "yes" : 'no'}</Typography>
                        <Typography variant="h6"><b>About me:</b> {profileData.profile.aboutMe}</Typography>
                        {
                            profileData.profile.lookingForAJob &&
                            <Typography variant="h6"><b>My skills:</b> {profileData.profile.skills}
                            </Typography>
                        }
                    </div>
                    <div className={classes.contacts}>
                    <Typography variant="h6"> <b>Contacts:</b>
                {
                    Object
                    .keys(profileData.profile.contacts)
                    .map((key) => {
                    return <Contact key={key} contactTitle={key}
                    contactValue={profileData.profile?.contacts[key as keyof ContactsType] || 'contacts'}/>
                })}</Typography>
                    </div>
                    </>}
            </CardContent>
            <Card  className={classes.background}>
                <CardContent className={classes.posts}>
                    {isOwner &&
                    <Card className={classes.addPostForm}>
                        <form noValidate autoComplete="off">
                            <Typography variant="h5" className={classes.addPostText}>Add new post</Typography>
                            <TextField value={postMessage} onChange={(e) => setPostMessage(e.target.value)}
                                       className={classes.addPostInput} id="standard-basic" variant="outlined"
                                       label="Enter your text..."/>
                            <Button onClick={onAddPost} variant="contained" color="primary"
                                    className={classes.addPostButton}>Add post</Button>
                        </form>
                    </Card>
                    }
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
