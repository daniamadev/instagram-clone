import React, { Component } from "react"
import { FiUser, FiHeart } from "react-icons/fi"
import { connect } from "react-redux"

class TopInfo extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>1</b>
        </span>
        <span>
          <FiUser />
          {user.name}Eu
        </span>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(TopInfo)
