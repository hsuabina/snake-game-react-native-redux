import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import GameContainer from 'src/containers/GameContainer.js'
import store from 'src/store.js'

class SnakeGame extends Component {
  render() {
    return (
      <Provider store={store}>
        <GameContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('SnakeGame', () => SnakeGame)
