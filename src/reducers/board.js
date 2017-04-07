import { Actions } from 'src/actions/actions.js'
import { getUpdatedSnake } from 'src/utils/Utils'

const initialState = {
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

function board(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case Actions.UPDATE_DIRECTION:
      newState.snake.nextDirection = action.payload.direction
      break
    case Actions.MOVE:
      newState.snake = getUpdatedSnake(state.snake, action.payload.nextTile, false)
      break
    case Actions.GROW:
      newState.snake = getUpdatedSnake(state.snake, action.payload.nextTile, true)
      newState.foodTile = action.payload.newFoodTile
      break
    case Actions.RESET_GAME:
      newState = initialState
      break
  }
  
  return newState
}

export default board
