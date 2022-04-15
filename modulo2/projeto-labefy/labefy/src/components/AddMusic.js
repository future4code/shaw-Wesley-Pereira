import React from 'react'
import styled from 'styled-components'

const DivAddMusic = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin-top: 10px;
  width: 1000px;
`
const DivInLine = styled.div`
  display: inline-block;

`


export default class AddMusic extends React.Component {
  state = {
    title: '',
    artist: '',
    url: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMusic(this.state)
    this.setState({
      title: '',
      artist: '',
      url: '',
    })
  }

  addMusic = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <DivAddMusic>
          
          <label>Add Playlist</label>
          
          <form onSubmit={this.handleSubmit}>
          <DivInLine>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            </DivInLine>
            <DivInLine>
            <label>
              Artist:
              <input
                type="text"
                name="artist"
                value={this.state.artist}
                onChange={this.handleChange}
              />
            </label>
            </DivInLine>
            <DivInLine>
            <label>
              Url:
              <input
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </label>
            </DivInLine>
            <button onClick={this.addMusic}>Add Music</button>
          </form>
        </DivAddMusic>
      </div>
    )
  }
}
