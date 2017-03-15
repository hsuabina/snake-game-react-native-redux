/*
TODO: Refactor actions so you can refer to actions or action creators separately,
  like: Actions.MOVE or ActionCreators.moveUp()
*/

const TURN = 'TURN'
const MOVE = 'MOVE'
const GROW = 'GROW'
const CRASH = 'CRASH'
const UPDATE_DIRECTION = 'UPDATE_DIRECTION'
const GAME_TICK = 'GAME_TICK'

export { TURN, MOVE, GROW, CRASH, UPDATE_DIRECTION, GAME_TICK }


// TURN action creators
export function turn(direction) {
 return { type: TURN, payload: { direction: direction } }
}

// MOVE action creators
export function move(nextTile) {
  return { type: MOVE, payload: { nextTile: nextTile } }
}

// GROW action creators
export function grow(nextTile, newFoodTile) {
  return { type: GROW, payload: { nextTile: nextTile, newFoodTile: newFoodTile } }
}

// CRASH action creator
export function crash() {
  return { type: CRASH, payload: null }
}

// UPDATE_DIRECTION action creator
export function updateDirection(direction) {
  return { type: UPDATE_DIRECTION, payload: { direction: direction } }
}

// GAME_TICK action creator
export function gameTick() {
  return { type: GAME_TICK, payload: null }
}
