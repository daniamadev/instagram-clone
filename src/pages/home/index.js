import React, { Component } from "react"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import TimeLine from "../../components/TimeLine"
import axios from "axios"
import { connect } from "react-redux"

class Home extends Component {
  getUser = async () => {
    const { data } = await axios.get("http://localhost:3000/user")
    this.props.dispatch({ type: "GET_USER", payload: data })
  }

  componentDidMount = () => {
    this.getUser()
  }

  render() {
    return (
      <>
        <Header />
        <div className="home">
          <TimeLine />
          <Sidebar />
        </div>
      </>
    )
  }
}

export default connect()(Home)
