import React from 'react';
import { makeStyles } from '@mui/styles';
import {
	Card,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Theme,
	Typography
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		marginTop: '50px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	listItem: {
		outline: '1px solid',
		textAlign: 'center',
	},
	titleBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		paddingLeft: '10px',
	},
	listContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	}
}));

export const Settings = () => {
	const classes = useStyles();

	const [state, setState] = React.useState();

	return <Card className={classes.root}>
		<List>
			<ListItemIcon className={classes.titleBox}>
				<PersonIcon fontSize="large" />
				<Typography variant="h5" className={classes.title}>User settings</Typography>
			</ListItemIcon>
			<Divider/>
			<ListItem className={classes.listContent}>
				<ListItem>
					<ListItemText primary="Name and surname: "/>
					<ListItemText primary=" Oleh Strokan"/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Email" />
					<ListItemText primary="oleg14ua71@gmail.com" />
				</ListItem>
				<ListItem>
				</ListItem>
			</ListItem>
			<ListItemIcon className={classes.titleBox}>
				<InvertColorsIcon fontSize="large" />
				<Typography variant="h5" className={classes.title}>Theme</Typography>
			</ListItemIcon>
			<Divider/>
			<ListItem className={classes.listContent}>
				<ListItemText primary="some text" />
				<ListItemText primary="some text" />
				<ListItemText primary="some text" />
			</ListItem>
			<ListItemIcon className={classes.titleBox}>
					<LocationOnIcon fontSize="large" />
					<Typography variant="h5" className={classes.title}>Localization</Typography>
				</ListItemIcon>
			<Divider/>
			<ListItem className={classes.listContent}>
					<ListItemText primary="some text" />
					<ListItemText primary="some text" />
					<ListItemText primary="some text" />
			</ListItem>
		</List>
	</Card>
};
