import React from 'react'

export default class GifList extends React.Component {
  
  renderImages = () => {
    return this.props.gifs.map((gifUrl,idx)=> <li key={idx}><img src={gifUrl} /></li>)
  }

  render() {
    return (
      <ul>
        {this.renderImages()}
      </ul>
    )
  }
}