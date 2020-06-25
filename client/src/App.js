import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import store from './store'

import Main from './components/Layout/Main'

import Home from './components/Home'
import HomeConnect from './components/HomeConnect'
import Registration from './components/Auth/Registration'
import Connection from './components/Auth/Connection'
import Profile from './components/Profile/Profile'
import NotFound from './components/Profile/NotFound'
import Search from './components/Search/NotFound'
import About from './components/Layout/About'
import Api from './components/Layout/Api'
import Recipe from './components/RecipeConnect'

import setAuthHeader from './utils/setAuthHeader'
import { logoutUser, getCurrentUser } from './actions/authActions'

if (localStorage.getItem('jwtToken')) {
  const currentTime = Date.now() / 1000
  const decode = jwt_decode(localStorage.getItem('jwtToken'))

  if (currentTime > decode.exp) {
    store.dispatch(logoutUser())
    window.location.href = '/'
  } else {
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser())
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/connection" component={Connection} />
                <Route path="/registration" component={Registration} />
                <Route path="/profile/:userId" component={Profile} />
                <Route path="/aboutUs" component={About} />
                <Route path="/homeConnect" component={HomeConnect} />
                <Route path="/recipe" component={Api} />
                <Route path="/recipeConnect" component={Recipe} />
                <Route path="/search" component={Search} />
                <Route component={NotFound}/>
              </Switch>
            </Main>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
