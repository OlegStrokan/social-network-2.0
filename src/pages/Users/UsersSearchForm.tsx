import {Field, Form, Formik} from 'formik'
import React from 'react'
import {useSelector} from 'react-redux'
import {getUsersSelector} from "../../redux/users/selectors";
import {FilterType} from "../../redux/users/reducer";
import {makeStyles} from "@mui/styles";
import {Button, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        fontSize: '20px',
        margin: '10px',
        padding: '8px',
        borderRadius: '5px',
    },
    input: {
        fontSize: '20px',
        marginLeft: '10px',
        padding: '8px',
        textAlign: 'center',
        borderRadius: '5px',
    },
    button: {
        padding: '9px 15px',
    },


}));
const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const classes = useStyles();

    const filter = useSelector(getUsersSelector).filter
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form  className={classes.root}>
                    <Typography variant="h6">Find user:</Typography>
                    <Field type="text" name="term" className={classes.input}/>

                    <Field name="friend" as="select" className={classes.select}>
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <Button className={classes.button} variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                        Find
                    </Button>
                </Form>
            )}
        </Formik>
    </div>
})
