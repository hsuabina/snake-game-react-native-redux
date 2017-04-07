import { combineReducers } from 'redux'
import game from 'src/reducers/game.js'
import board from 'src/reducers/board.js'

export default combineReducers({
  game,
  board
})
