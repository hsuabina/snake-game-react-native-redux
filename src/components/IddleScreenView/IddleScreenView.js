import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import Scores from 'src/components/Scores/Scores.js'

const IddleScreenView = (props) => {

  let gameStateText = null
  if (props.paused) {
    gameStateText = (<Text style={ styles.h2 }>Game paused</Text>)
  }
  if (props.crashed) {
    gameStateText = (<Text style={ styles.h2 }>Game over</Text>)
  }


  return (
    <View style={ styles.backgroundLayer } >
      <Text style={ styles.h1 }>Snake Game</Text>

      { gameStateText }

      <Scores style={ styles.h2 } score={ props.score } />

      <Button
        onPress={ props.onPlayClick }
        title="PLAY"
        color="#AA9984"
        accessibilityLabel="Start Playing"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000AA'
  },

  h1: {
    fontSize: 52,
    color: '#FFFFFF',
    textAlign: 'center'

  },

  h2: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})

export default IddleScreenView
