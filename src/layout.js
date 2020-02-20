import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext'
import Home from './views/home'

const Layout = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}
export default injectContext(Layout);