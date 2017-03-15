import { TURN, MOVE, GROW, CRASH, UPDATE, move, grow, crash, updateDirection } from '../actions/actions.js'
import { take, select, call, put } from 'redux-saga/effects'

import { getNextTile, isValidTurn } from '../utils/TileUtils.js'


function *gameSaga() {
  while (true) {
    // wait for the player to turn into a direction
    const action = yield take(TURN)

    let board = yield select(getBoard)

    let turnDirection = action.payload.direction
    let currentDirection = board.snake.direction

    if (isValidTurn(currentDirection, turnDirection)) {
      yield put(updateDirection(turnDirection))
      yield call(tickSaga)
    }
  }
}

function *tickSaga() {
  // fetch info from the store
  const board = yield select(getBoard)
  const rows = board.rows
  const cols = board.cols
  const direction = board.snake.direction
  const snake = board.snake
  const foodTile = board.foodTile

  // calculate what will the next tile will be, based on the snake direction
  let nextTile = getNextTile(rows, cols, snake.headTile, direction)

  // snake crashes into the wall or with itself
  if (nextTile < 0 || nextTile in snake.body) {
    yield put(crash())
    return
  }

  if (nextTile == foodTile) {
    // find a new empty tile for the food
    let newFoodTile = yield call(getNewFoodTile, [rows, cols, snake, foodTile])
    // dispatch a grow action
    yield put(grow(nextTile, newFoodTile))
  } else {
    // dispatch a move action
    yield put(move(nextTile))
  }
}


// Selector
const getBoard = (state) => {
  return state.board
}

const getNewFoodTile = (args) => {
  const rows = args[0]
  const cols = args[1]
  const snake = args[2]
  const foodTile = args[3]

  // find a new empty tile to place food
  let usedTiles = Object.keys(snake.body)
  usedTiles.push(snake.headTile)
  usedTiles.push(foodTile)

  let newFoodTile
  do {
    newFoodTile = (Math.floor(Math.random() * (rows * cols)))
  } while (!usedTiles.indexOf(newFoodTile))

  return newFoodTile
}


export { gameSaga }