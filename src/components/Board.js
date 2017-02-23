import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { EmptyTile, SnakeTile, FoodTile } from './BoardTiles.js'

class Board extends Component {
  render() {

    let board = this.props.board
    let rows = board.rows
    let cols = board.cols
    let boardSize = rows * cols

    // start with the board empty
    let tiles = [...Array(boardSize).keys()].map((k) => <EmptyTile key={k}/>)
    // add the the snake tail
    tiles[board.snake.tailPosition] = ( <SnakeTile key={board.snake.tailPosition}/> )
    // add the snake head
    tiles[board.snake.headPosition] = ( <SnakeTile key={board.snake.headPosition}/> )
    // now add the snake body
    for (let key in board.snake.body) {
      tiles[key] = ( <SnakeTile key={key} /> )
    }

    return (
      <View style={styles.outerBoard}>
        <View style={[styles.innerBoard, {width: 16 * rows, height: 16 * cols}]}>
          { tiles }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outerBoard: {
    marginTop: 20,
    flex: 0,
    borderWidth: 5,
    borderColor: '#FF00FF'
  },
  innerBoard: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF'
  }
});

export default Board
