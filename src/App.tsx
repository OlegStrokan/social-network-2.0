import React, {useEffect, useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Login} from "./pages/Login/Login";
import {Users} from "./pages/Users/Users";
import {Header} from "./components/Header/Header";
import {makeStyles} from "@material-ui/core";
import {Navbar} from "./components/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getUserDataSelector} from "./redux/auth/selectors";
import {getInitializeAppData} from "./redux/app/selectors";
import {Preloader} from "./components/Preloader/Preloader";
import {appActions} from "./redux/app/reducer";
import {Profile} from "./pages/Profile/Profile";
import {ChatPage} from "./pages/Chat/ChatPage";
import {getWeatherDataSelector} from "./redux/weather/selectors";
import {fetchedWeather} from "./redux/weather/action-creators";

const useStyles = makeStyles((theme) => ({
  rootOpen: {
    backgroundColor: '#eeeeee',
    display: 'grid',
    gridTemplateColumns: '225px 1fr',
    gridTemplateRows: 'auto',
    gridGap: '10px 0',
    padding: 0,
    margin: 0,
    height: '100vh',
    gridTemplateAreas:
        `"header header"
         "navbar content"`,
  },
  rootClose: {
    backgroundColor: '#eeeeee',
    display: 'grid',
    gridGap: '10px 0',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    padding: 0,
    margin: 0,
    height: '100vh',
    gridTemplateAreas:
        `"header"
         "content"`,
  },
  header: {
    gridArea: 'header',
  },
  navbar: {
    gridArea: 'navbar',
  },
  content: {
    gridArea: 'content',
  },
}));

export function App() {
  const isInit = useSelector(getInitializeAppData)
  const authData = useSelector(getUserDataSelector)
  const weatherData = useSelector(getWeatherDataSelector);

  const dispatch = useDispatch()
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const classes = useStyles();

  useEffect(() => {
    dispatch(appActions.fetchedInitialized());
    dispatch(fetchedWeather('Prague'));
  },[])

  if (!isInit) {
    return <Preloader/>
  }
  return <div className={openMenu ? classes.rootOpen : classes.rootClose}>
    <div className={classes.header}><Header weatherData={weatherData} authData={authData} openMenu={openMenu} setOpenMenu={setOpenMenu}/></div>
    <div className={classes.navbar}>{openMenu && <Navbar/>}</div>
    <div className={classes.content}>
      <Route exact path='/'
             render={() => <Redirect to={'/profile'}/>}/>
      <Route path='/users'
             render={() => <Users/>}/>
      <Route path='/login'
             render={() => <Login/>}/>
      <Route path='/profile/:userId?'
             render={() => <Profile/>}/>
      <Route path='/chat'
             render={() => <ChatPage/>}/>
    </div>
  </div>
}
