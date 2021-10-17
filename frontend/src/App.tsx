import React, {useEffect, useState} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Login} from "./pages/Login/Login";
import {Users} from "./pages/Users/Users";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {getUserDataSelector} from "./redux/auth/selectors";
import {getInitializeAppData} from "./redux/app/selectors";
import {Preloader} from "./components/Preloader/Preloader";
import {appActions} from "./redux/app/reducer";
import {Profile} from "./pages/Profile/Profile";
import {ChatPage} from "./pages/Chat/ChatPage";
import {weatherActions} from "./redux/weather/reducer";
import {getWeatherDataSelector} from "./redux/weather/selectors";
import {News} from "./pages/News/News";
import {Settings} from "./pages/Settings/Settings";
import {makeStyles} from "@mui/styles";

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
  const classes = useStyles();


  const isInit = useSelector(getInitializeAppData)
  const authData = useSelector(getUserDataSelector)
  const weatherData = useSelector(getWeatherDataSelector);

  const dispatch = useDispatch()
  const [openMenu, setOpenMenu] = useState<boolean>(false);


  useEffect(() => {
    dispatch(appActions.fetchedInitialized());
    dispatch(weatherActions.fetchedWeatherData('Prague'));
  },[authData.isAuth])

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
      <Route path='/news'
             render={() => <News/>}/>
      <Route path='/settings'
             render={() => <Settings/>}/>
    </div>
  </div>
}
