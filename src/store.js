import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from 'src/sagas/Sagas.js'
import reducer from 'src/reducers/main.js'


let sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
