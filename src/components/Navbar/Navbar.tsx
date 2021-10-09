import React from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useHistory } from 'react-router-dom';
import {Card, List, ListItem, ListItemIcon, ListItemText, Theme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '225px',
            height: '100%'
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
    const toSettings = () => history.push("/settings", { update: true });

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
                <ListItem button onClick={toSettings}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Card>
    );
};

