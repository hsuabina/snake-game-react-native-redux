import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas/GameSaga.js'

import reducer from './reducers/reducer.js'


let sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
