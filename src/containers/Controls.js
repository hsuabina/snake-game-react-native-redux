import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ControlsView from '../components/ControlsView.js'

import { moveUp, moveDown, moveLeft, moveRight } from '../actions/actions.js'

function mapDispatchToProps(dispatch) {
  return {
    onKeyUpClick: () => dispatch(moveUp()),
    onKeyDownClick: () => dispatch(moveDown()),
    onKeyLeftClick: () => dispatch(moveLeft()),
    onKeyRightClick: () => dispatch(moveRight())
  }
}


export default connect(null, mapDispatchToProps)(ControlsView)
