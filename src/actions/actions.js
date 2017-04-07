/* Actions */
export const Actions = {
  UPDATE_DIRECTION: 'UPDATE_DIRECTION',
  TURN: 'TURN',
  MOVE: 'MOVE',
  GROW: 'GROW',
  CRASH: 'CRASH',
  PLAY: 'PLAY',
  PAUSE: 'PAUSE',
  RESET_GAME: 'RESET_GAME'
}

/* Action creators */
export const ActionCreators = {

  // UPDATE_DIRECTION action creator
  updateDirection: (direction) => {
    return { type: Actions.UPDATE_DIRECTION, payload: { direction: direction } }
  },

  // TURN action creator
  turn: (direction) => {
   return { type: Actions.TURN, payload: { direction: direction } }
  },

  // MOVE action creators
  move: (nextTile) => {
    return { type: Actions.MOVE, payload: { nextTile: nextTile } }
  },

  // GROW action creator
  grow: (nextTile, newFoodTile) => {
    return { type: Actions.GROW, payload: { nextTile: nextTile, newFoodTile: newFoodTile } }
  },

  // CRASH action creator
  crash: () => {
    return { type: Actions.CRASH, payload: null }
  },

  // PLAY action creator
  play: () => {
    return { type: Actions.PLAY, payload: null }
  },

  // PAUSE action creator
  pause: () => {
    return { type: Actions.PAUSE, payload:null }
  },

  // RESET_GAME action creator
  resetGame: () => {
    return { type: Actions.RESET_GAME, payload: null }
  }

}
