import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import PostsList from './PostsList'
import Post from './Post'
import About from './About'
import EditPost from './EditPost'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={PostsList} />
          <Route exact path='/about' component={About} />
          <Route exact path='/post' component={Post} />
          <Route exact path='/edit' component={EditPost} />
        </Switch>
        <div>{this.props.data.hi}</div>
     </div>
    )
  }
}

const hiQuery = gql`
{hi}
`

export default graphql(
  hiQuery
)(App)