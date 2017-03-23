import { delay } from 'redux-saga'
import { take, select, call, put } from 'redux-saga/effects'
import Ticker  from 'redux-saga-ticker';

import { TURN, MOVE, GROW, CRASH, UPDATE, move, grow, crash, updateDirection } from '../actions/actions.js'


import { getNextTile, isValidTurn } from '../utils/TileUtils.js'

function *rootSaga() {
  yield [
      tickSaga(),
      watchTurnSaga()
    ]
}

function *tickSaga() {
  const channel = Ticker(500);
  while (true) {
    yield take(channel);
    yield call(updateGameSaga);

    const game = yield select(getGame)
    if (game.crashed)
      break
  }
}

// updates snake direction everytime user interacts with keyboard (TURN action)
function *watchTurnSaga() {
  while (true) {
    const action = yield take(TURN)
    const turnDirection = action.payload.direction

    const board = yield select(getBoard)
    const currentDirection = board.snake.direction
    const nextDirection = board.snake.nextDirection

    if (nextDirection == null && isValidTurn(currentDirection, turnDirection)) {
      yield put(updateDirection(turnDirection))
    }
  }
}

function *updateGameSaga() {
  // fetch info from the store
  const board = yield select(getBoard)
  const rows = board.rows
  const cols = board.cols
  const direction = board.snake.direction
  const nextDirection = board.snake.nextDirection
  const snake = board.snake
  const foodTile = board.foodTile

  let finalDirection = (nextDirection == null)? direction: nextDirection

  // calculate what will the next tile will be, based on the snake direction
  let nextTile = getNextTile(rows, cols, snake.headTile, finalDirection)

  // snake crashes into the wall or with itself
  if (nextTile < 0 || nextTile in snake.body) {
    yield put(crash())
  } else if (nextTile == foodTile) {
    // find a new empty tile for the food
    let newFoodTile = yield call(getNewFoodTile, [rows, cols, snake, foodTile])
    // dispatch a grow action
    yield put(grow(nextTile, newFoodTile))
  } else {
    // dispatch a move action
    yield put(move(nextTile))
  }
}


// Selectors
const getBoard = (state) => {
  return state.board
}

const getGame = (state) => {
  return state.game
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


export { rootSaga }
