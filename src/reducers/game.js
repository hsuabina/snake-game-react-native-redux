import { Actions } from 'src/actions/actions.js'

const initialState = {
  paused: true,
  crashed: false,
  score: 0
}

function game(state = initialState, action) {
  let newState = { ...state }

  switch (action.type) {
    case Actions.PLAY:
      newState.paused = false
      break
    case Actions.PAUSE:
      newState.paused = true
    case Actions.CRASH:
      newState.paused = true
      newState.crashed = true
      break
    case Actions.RESET_GAME:
      newState = { paused: false, crashed: false, score: 0 }
      break
    case Actions.GROW:
      newState.score = newState.score + 1
      break
  }
  
  return newState
}

export default game
