import React, { Component } from 'react'

export default class EditPost extends Component {
  render() {
    return (
      <div className='edit-post'>
        <form>
          <input type='text' className='edit-title' placeholder='Title' />
          <textarea type='textarea' className='edit-content' placeholder='Content'></textarea>
          <button type='text' className='edit-title' placeholder='Title'>
            Done
          </button>
        </form>
      </div>
    )
  }
}
