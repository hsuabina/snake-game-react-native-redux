import { delay } from 'redux-saga'
import { take, select, call, fork, put, race, cancel } from 'redux-saga/effects'

import { Actions, ActionCreators } from 'src/actions/actions.js'
import { getNextTile, isValidTurn } from 'src/utils/Utils.js'

function *rootSaga() {

  // Wait for the play event to start the game for the first time
  yield take(Actions.PLAY)

  while (true) {
    // Start the gameSaga
    const currentGame = yield call(gameSaga)

    // Wait for the player to start the game again
    yield take(Actions.PLAY)

    // Reset the game before the loop
    yield put(ActionCreators.resetGame())
  }

}

function *gameSaga() {
  // start tickSaga and watchTurnSaga concurrently (they are endless loops)
  // only the CRASH action will finish the race
  yield race({
    tick: call(tickSaga),
    turn: call(watchTurnSaga),
    crash: take(Actions.CRASH)
  })
}


function *tickSaga() {

  while (true) {
    // Wait for whatever comes first (game tick, pause event or crash event)
    const { tick, pause } = yield race({
      tick: call(delay, 200),
      pause: take(Actions.PAUSE)
    })

    // If no crash or pause until next game tick, update game as normal
    if (tick) {
      yield call(updateGameSaga)
    } else {
      yield take(Actions.PLAY)
    }
  }
}

// updates snake direction everytime user interacts with keyboard (TURN action)
function *watchTurnSaga() {
  while (true) {
    const action = yield take(Actions.TURN)
    const turnDirection = action.payload.direction

    const board = yield select(getBoard)
    const currentDirection = board.snake.direction
    const nextDirection = board.snake.nextDirection

    if (nextDirection == null && isValidTurn(currentDirection, turnDirection)) {
      yield put(ActionCreators.updateDirection(turnDirection))
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
    yield put(ActionCreators.crash())
  } else if (nextTile == foodTile) {
    // find a new empty tile for the food
    let newFoodTile = yield call(getNewFoodTile, [rows, cols, snake, foodTile])
    // dispatch a grow action
    yield put(ActionCreators.grow(nextTile, newFoodTile))
  } else {
    // dispatch a move action
    yield put(ActionCreators.move(nextTile))
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
