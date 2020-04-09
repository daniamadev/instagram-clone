import React, { Component } from "react"
import { FiUser, FiHeart } from "react-icons/fi"
import { connect } from "react-redux"

class TopInfo extends Component {
  render() {
    const { likes, name } = this.props.user
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{likes}</b>
        </span>
        <span>
          <FiUser />
          {name}
        </span>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    likes: state.user.likes,
    user: state.user,
  }
}

export default connect(mapStateToProps)(TopInfo)
