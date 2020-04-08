import React from "react"
import Home from "./pages/home"
import "./App.css"
import { Provider } from "react-redux"
import store from "./Redux/reducer"

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
