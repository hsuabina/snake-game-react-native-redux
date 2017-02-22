import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import { EmptyTile, SnakeTile, FoodTile } from './BoardTiles.js'

class Board extends Component {
  render() {

    let tiles = [...Array(100).keys()].map((k) => <EmptyTile key={k}/>)

    return (
      <View style={styles.board}>
        { tiles }
        <SnakeTile />
        <FoodTile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF',
    borderWidth: 5
  }
});

export default Board
