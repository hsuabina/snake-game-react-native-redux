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
          <View style= {styles.scores }>
            <Scores score={ this.props.game.score } />
          </View>

          <View style={ styles.board }>
            <Board board={ this.props.board } />
          </View>

          <View style={ styles.controls }>
            <Controls />
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  gameview: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },

  scores: {
    marginTop: 20
  },

  board: {
    marginTop: 20
  },

  controls: {
    paddingTop: 20
  }
});

export default GameView
