import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <ul>
        <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)