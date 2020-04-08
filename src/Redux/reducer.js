import { createStore } from "redux"

const initialState = {
  user: {},
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        user: action.payload,
      }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
