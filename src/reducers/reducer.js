import { TURN, MOVE, GROW, CRASH, GAME_TICK, UPDATE_DIRECTION } from '../actions/actions.js'

import { getUpdatedSnake } from '../utils/TileUtils'

const initialState = {
  game: {
    paused: false,
    crashed: false,
    score: 0
  },
  board: {
    rows: 20,
    cols: 20,
    snake: {
      size: 3,
      headTile: 2,
      tailTile: 0,
      body: {
        0: 1,
        1: 2
      },
      direction: 'RIGHT'
    },
    foodTile: 10
  }
}

function reducer(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case TURN:
      console.log('Turn command received')
      break
    case GAME_TICK:
      console.log('Game tick')
      break
    case UPDATE_DIRECTION:
      console.log('Updating snake direction')
      newState.board.snake.direction = action.payload.direction
      break
    case MOVE:
      console.log('Snake moves to an empty tile')
      newState.board.snake = getUpdatedSnake(state.board.snake, action.payload.nextTile, false)
      break
    case GROW:
      console.log('Snake eats food and grows')
      newState.board.snake = getUpdatedSnake(state.board.snake, action.payload.nextTile, true)
      newState.board.foodTile = action.payload.newFoodTile
      newState.game.score = newState.game.score + 1
      break
    case CRASH:
      console.log('Snake crashes into the wall or its body')
      newState.game.crashed = true
      newState.game.paused = true
      break
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return newState
}

export default reducer
