import * from './actions.js'

// TURN action creators
function turnUp() {
 return { type: TURN, payload: { direction: 'UP' } }
}

export function turnDown() {
 return { type: TURN, payload: { direction: 'DOWN' } }
}

export function turnLeft() {
 return { type: TURN, payload: { direction: 'LEFT' } }
}

export function turnRight() {
 return { type: TURN, payload: { direction: 'RIGHT' } }
}

// MOVE action creators
export function moveUp() {
  return { type: MOVE, payload: { direction: 'UP' } }
}

export function moveDown() {
  return { type: MOVE, payload: { direction: 'DOWN' } }
}

export function moveLeft() {
  return { type: MOVE, payload: { direction: 'LEFT' } }
}

export function moveRight() {
  return { type: MOVE, payload: { direction: 'RIGHT' } }
}

// GROW action creators
export function growUp(newFoodTile) {
  return { type: GROW, payload: { direction: 'UP', newFoodTile: newFoodTile } }
}

export function growDown(newFoodTile) {
  return { type: GROW, payload: { direction: 'DOWN', newFoodTile: newFoodTile } }
}

export function growLeft(newFoodTile) {
  return { type: GROW, payload: { direction: 'LEFT', newFoodTile: newFoodTile } }
}

export function growRight(newFoodTile) {
  return { type: GROW, payload: { direction: 'RIGHT', newFoodTile: newFoodTile } }
}

// CRASH action creator
export function crash() {
  return { type: CRASH, payload: null }
}
