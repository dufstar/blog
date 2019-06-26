import React, { Component } from 'react'
import PostsList from './PostsList'
import Post from './Post'
import Header from './Header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostsList />
        <Post />
      </div>
    )
  }
}