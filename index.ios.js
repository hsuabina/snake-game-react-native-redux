import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Game from './src/containers/Game.js'
import { moveUp, moveDown, moveLeft, moveRight } from './src/actions/actions.js'
import store from './src/store.js'

class SnakeGame extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// Dispatch some actions
store.dispatch(moveRight())
// Stop listening to state updates
unsubscribe()

AppRegistry.registerComponent('SnakeGame', () => SnakeGame)
