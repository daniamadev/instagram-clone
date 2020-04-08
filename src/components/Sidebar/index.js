import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: [], //é uma array porque são vários itens
    }
  }

  async getStories() {
    const { data } = await axios.get("http://localhost:3000/stories")
    this.setState({ stories: data })
  }

  componentDidMount = () => {
    this.getStories()
  }

  render() {
    const { name, username } = this.props.user
    return (
      <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <div className="user-bio">
            <strong>{name}Daniela</strong>
            <span>{username}@daniela</span>
          </div>
        </div>
        <div className="stories">
          <h2>Stories</h2>
          {this.state.stories.map((item) => (
            <div key={item.id}>
              <div className="storie">
                <div className="storie-image">
                  <img src={item.userPicture} alt="user" />
                </div>
                <div className="storie-user">
                  <strong>{item.user}</strong>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Sidebar)
