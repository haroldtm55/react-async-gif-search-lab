import React from 'react'

export default class GifSearch extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   keyword: ''
    // }
  }

  
  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event)}>
        <div className='form-group'>
          <input onChange={event=>this.props.handleKeyword(event)} type='text' className='form-control' id='keyword'/>
        </div>
        <button type='submit' className='btn btn-default'>Search</button>
      </form>
    )
  }
}