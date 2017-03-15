import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Board from './Board.js'
import Controls from '../containers/Controls.js'
import Scores from './Scores.js'

class GameView extends Component {
  render() {

    if (this.props.game.crashed) {
      console.log('GAME OVER')
      return (
        <View style={ styles.gameview }>
          <Text>GAME OVER!</Text>
        </View>
      )
    } else {
      return (
        <View style={ styles.gameview }>
          <Board board={ this.props.board }/>
          <Controls />
          <Scores score={ this.props.score } />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  gameview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default GameView
