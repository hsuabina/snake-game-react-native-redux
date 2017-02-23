import {
  MOVE
} from '../actions/actions.js'

import { getNextTile, moveSnake } from '../utils/TileUtils'

const initialState = {
  game: {
    paused: false
  },
  score: 0,
  board: {
    rows: 20,
    cols: 20,
    snake: {
      size: 3,
      headPosition: 2,
      tailPosition: 0,
      body: {
        0: 1,
        1: 2
      }
    },
    food: {
      position: 20
    }
  }
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case MOVE:
      let fromTile = state.board.snake.headPosition
      let direction = action.payload
      let board = state.board
      let nextTile = getNextTile(fromTile, direction, board)

      // snake crashes into the wall
      if (nextTile < 0) {
        console.log('Snake crashes into the wall')
        return {...state, game: { ...state.game, paused: true } }
      }

      // snake crashes with its body
      if (nextTile in state.board.snake.body) {
        console.log('Snake crashed with its body')
        return {...state, game: { ...state.game, paused: true } }
      }

      // snake grows
      if (nextTile == state.board.food.position) {
        console.log('Snake grows')
        return {...state, game: { ...state.game, paused: true } }
      }

      console.log('Snake moves to an empty tile')
      let newSnake = moveSnake(state.board.snake, nextTile, false)

      return {...state, board: { ...state.board, snake: newSnake }}
      break;
    default:
      return state;
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

export default reducer
