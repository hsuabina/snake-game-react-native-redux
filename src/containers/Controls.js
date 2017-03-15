import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ControlsView from '../components/ControlsView.js'

import { turn } from '../actions/actions.js'

function mapDispatchToProps(dispatch) {
  return {
    onKeyUpClick: () => dispatch(turn('UP')),
    onKeyDownClick: () => dispatch(turn('DOWN')),
    onKeyLeftClick: () => dispatch(turn('LEFT')),
    onKeyRightClick: () => dispatch(turn('RIGHT'))
  }
}


export default connect(null, mapDispatchToProps)(ControlsView)
