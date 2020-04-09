import React, { Component } from "react"
import { FiHeart } from "react-icons/fi"
import axios from "axios"
import { connect } from "react-redux"

//primeiro arquivo a ser trabalhado

//export default function TimeLine() {
class Timeline extends Component {
  state = {
    conteudo: [],
  }
  //tem que ser uma array[]
  //nao um objeto {}

  getPosts = async () => {
    await axios.get("http://localhost:3000/posts").then((res) => {
      this.setState({ conteudo: res.data })
    })
  }

  putLikes = async () => {
    this.props.user.likes++
    await axios.put("http://localhost:3000/user", this.props.user)
    this.props.dispatch({
      type: "PUT_LIKES",
      payload: this.props.user,
    })
  }

  componentDidMount = () => {
    this.getPosts()
  }

  render() {
    return (
      <>
        <div className="post">
          {this.state.conteudo.map((content) => (
            <div key={content.id}>
              <header>
                <img src={content.userPicture} alt="Lala" />
                <div className="post-user">
                  <strong>{content.user}</strong>
                  <span>{content.location}</span>
                </div>
              </header>
              <div className="post-image">
                <img src={content.postPicture} alt="daniela" />
              </div>
              <div>
                <span className="post-likes" onClick={this.putLikes}>
                  <FiHeart />
                </span>
              </div>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Timeline)
