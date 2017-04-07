import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreators } from 'src/actions/actions.js'
import GameView from 'src/components/GameView/GameView.js'

function mapDispatchToProps(dispatch) {
  return {
    onPlayClick: () => dispatch(ActionCreators.play())
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
    board: {...state.board}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameView)
