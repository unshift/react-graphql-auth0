import React from 'react'

export default class Post extends React.Component {

  render () {
    return (
      <div className='pa3 bg-near-white ma3 br3 ba b--light-gray'>
        <div className='pt3'>
         {JSON.stringify(this.props.post)}
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  post: React.PropTypes.object
}