import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GameView from '../components/GameView.js'

function mapStateToProps(state) {
  return {
    score: state.score,
    board: {...state.board}
  }
}

export default connect(mapStateToProps)(GameView)
