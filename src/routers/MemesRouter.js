import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from '../components/Navbar';

import DevPage from '../pages/DevPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
// import ImgEditorPage from '../pages/ImgEditorPage';
import ProfilePage from '../pages/ProfilePage';

const MemesRouter = ({theme, handleTheme}) => {
  return (
    <Router>
      <Navbar theme={theme} handleTheme={handleTheme} />
       <Switch>
          <Route exact path="/dev">
            <DevPage theme={theme} />
          </Route>
          {/* <Route exact path="/editor" component={ImgEditorPage} /> */}
          <Route exact path="/profile/:username" component={ProfilePage} />
          
          {/* Home Page */}
          <Route exact path="/">
            <HomePage theme={theme} />
          </Route>

          {/* 404 Error Not Found */}
          <Route path="*" component={() => <ErrorPage theme={theme} />} />
        </Switch>
    </Router>
  )
}

export default MemesRouter
