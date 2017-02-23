import { createStore } from 'redux'

import reducer from './reducers/reducer.js'

let store = createStore(reducer)

export default store
