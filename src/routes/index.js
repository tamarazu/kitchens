import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Homepage } from 'views'


export default routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/"  component={Homepage}/>
        </Switch>
      </Router>
    </>
  )
}