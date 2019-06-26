import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class PostCard extends Component {
  render() {
    return (
      <Link to='/post'>
        <div className='post-card'>
          <div className='img-container'>
            <img className='card-img' src='https://static1.squarespace.com/static/4f6792f624ac778428aca39d/4f760d4b6a9b61f6cc2748c3/5cc99e47ee6eb0610120949e/1558445945777/2018-12-sqsp-app-blog-hero.png?format=1000w' />
          </div>
          <div className='card-metadata'>
            <div className='card-title'>
              Title
            </div>
            <div className='card-date'>
              June 1, 2019
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default withRouter(PostCard)