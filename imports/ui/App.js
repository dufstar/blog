import React, { Component } from 'react'
import PostsList from './PostsList'
import Post from './Post'
import Header from './Header'
import './App.css'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={PostsList} />
          <Route exact path='/about' component={Post} />
        </Switch>
      </div>
    )
  }
}