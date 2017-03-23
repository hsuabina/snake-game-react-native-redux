import { Actions } from 'src/actions/actions.js'
import { getUpdatedSnake } from 'src/utils/Utils'

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
      direction: 'RIGHT',
      nextDirection: null
    },
    foodTile: 10
  }
}

function reducer(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case Actions.TURN:
      console.log('Turn command received')
      break
    case Actions.UPDATE_DIRECTION:
      console.log('Updating snake nextDirection (' + action.payload.direction + ')')
      newState.board.snake.nextDirection = action.payload.direction
      break
    case Actions.MOVE:
      console.log('Snake moves to an empty tile')
      newState.board.snake = getUpdatedSnake(state.board.snake, action.payload.nextTile, false)
      break
    case Actions.GROW:
      console.log('Snake eats food and grows')
      newState.board.snake = getUpdatedSnake(state.board.snake, action.payload.nextTile, true)
      newState.board.foodTile = action.payload.newFoodTile
      newState.game.score = newState.game.score + 1
      break
    case Actions.CRASH:
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
