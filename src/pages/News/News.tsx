import React from 'react';
import {Card, Theme, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from "../../redux/news/reducer";
import {getNewsSelector} from "../../redux/news/selectors";
import {Preloader} from "../../components/Preloader/Preloader";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
	newsItem: {
		padding: '10px',
		margin: '10px',
	},
}));



export const News = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const newsData = useSelector(getNewsSelector)

	React.useEffect(() => {
		dispatch(newsActions.fetchedWeatherData('programming'))
	},[])

	if	(newsData.loading) {
		return <Preloader/>
	}

	return (
		<Card>
			{newsData.news?.data.map((item) => <Card className={classes.newsItem}>
				<Typography variant="subtitle1">{item.title}</Typography>
				<Typography variant="subtitle2">{item.description}</Typography>
			</Card>)}
		</Card>
	);
};
