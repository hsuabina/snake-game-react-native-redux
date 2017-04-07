import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Board from 'src/components/Board/Board.js'
import Scores from 'src/components/Scores/Scores.js'
import ControlsContainer from 'src/containers/ControlsContainer.js'
import IddleScreenView from 'src/components/IddleScreenView/IddleScreenView.js'

class GameView extends Component {
  render() {

    if (this.props.game.paused || this.props.game.crashed) {
      return (
        <IddleScreenView
          onPlayClick={ this.props.onPlayClick }
          { ...this.props.game }
          />
      )
    }

    return (
      <View style={ styles.gameview }>
        <View style={ styles.scores }>
          <Scores score={ this.props.game.score } />
        </View>

        <View style={ styles.board }>
          <Board board={ this.props.board } />
        </View>

        <View style={ styles.controls }>
          <ControlsContainer />
        </View>
      </View>
    )
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
