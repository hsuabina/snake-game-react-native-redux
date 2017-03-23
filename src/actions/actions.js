/* Actions */
const TURN = 'TURN'
const MOVE = 'MOVE'
const GROW = 'GROW'
const CRASH = 'CRASH'
const UPDATE_DIRECTION = 'UPDATE_DIRECTION'

export const Actions = {
  MOVE: MOVE,
  TURN: TURN,
  GROW: GROW,
  CRASH: CRASH,
  UPDATE_DIRECTION: UPDATE_DIRECTION
}

/* Action creators */
export const ActionCreators = {

  // TURN action creators
  turn: (direction) => {
   return { type: TURN, payload: { direction: direction } }
  },

  // MOVE action creators
  move: (nextTile) => {
    return { type: MOVE, payload: { nextTile: nextTile } }
  },

  // GROW action creators
  grow: (nextTile, newFoodTile) => {
    return { type: GROW, payload: { nextTile: nextTile, newFoodTile: newFoodTile } }
  },

  // CRASH action creator
  crash: () => {
    return { type: CRASH, payload: null }
  },

  // UPDATE_DIRECTION action creator
  updateDirection: (direction) => {
    return { type: UPDATE_DIRECTION, payload: { direction: direction } }
  }

}
