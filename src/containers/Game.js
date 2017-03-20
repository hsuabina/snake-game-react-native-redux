import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GameView from '../components/GameView.js'

function mapStateToProps(state) {
  return {
    game: state.game,
    board: {...state.board}
  }
}

export default connect(mapStateToProps)(GameView)
