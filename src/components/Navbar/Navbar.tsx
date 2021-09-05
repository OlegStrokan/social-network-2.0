import React from 'react';
import {
    createStyles,
    makeStyles,
    Theme,
    ListItemIcon, ListItemText, ListItem, List, Card
} from "@material-ui/core";
import DraftsIcon from '@material-ui/icons/Drafts';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '225px'
        },
    }),
);
type NavbarProps = {

}

export const Navbar: React.FC<NavbarProps> = () => {
    const classes = useStyles();

    const history = useHistory()

    const toProfile = () => history.push("/profile", { update: true });
    const toUsers = () => history.push("/users", { update: true });
    const toChat = () => history.push("/chat", { update: true });
    const toNews = () => history.push("/news", { update: true });

    return (
        <Card className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={toProfile}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={toUsers}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button onClick={toChat}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItem>
                <ListItem button onClick={toNews}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="News" />
                </ListItem>
            </List>
        </Card>
    );
};

