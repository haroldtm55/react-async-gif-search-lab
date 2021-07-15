import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
      keyword: ''
    }
  }
  fetchGifs = keyword => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({
          gifs: [gifs.data[0].images.original.url,gifs.data[1].images.original.url,gifs.data[2].images.original.url]
        })
      })
  }
  handleKeyword = event => {
    this.setState({
      keyword: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchGifs(this.state.keyword)
    this.setState({
      keyword: ''
    })
    document.getElementById('keyword').value=''

  }
  render() {
    // console.log(this.state.gifs)
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} handleKeyword={this.handleKeyword}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}