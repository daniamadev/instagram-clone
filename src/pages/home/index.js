import React, { Component } from "react"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import TimeLine from "../../components/TimeLine"
import axios from "axios"
import { connect } from "react-redux"

//export default function Home() {
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}, //user é um objeto, por isso {}
    }
  }

  async getUser() {
    const { data } = await axios.get("http://localhost:3000/user")
    // this.setState({ user: data })
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
