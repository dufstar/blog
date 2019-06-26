import React, { Component } from 'react'
import PostCard from './PostCard'

export default class PostsList extends Component {
  render() {
    return (
      <div className='list-container'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    )
  }
}
