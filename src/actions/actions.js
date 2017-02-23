const MOVE = 'MOVE'

export { MOVE }

/*
 * action creators
 */
export function moveUp() {
  return { type: MOVE, payload: 'UP' }
}

export function moveDown() {
  return { type: MOVE, payload: 'DOWN' }
}

export function moveLeft() {
  return { type: MOVE, payload: 'LEFT' }
}

export function moveRight() {
  return { type: MOVE, payload: 'RIGHT' }
}
