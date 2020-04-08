import React, { Component } from "react"
import { Switch, Route } from "react-route"

import Home from "../pages/home"
import Perfil from "../pages/perfil"

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/perfil" exact component={Perfil} />
        </Switch>
      </>
    )
  }
}
export default Routes
