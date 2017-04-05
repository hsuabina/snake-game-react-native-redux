import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreators } from 'src/actions/actions.js'
import ControlsView from 'src/components/ControlsView/ControlsView.js'

function mapDispatchToProps(dispatch) {
  return {
    onKeyUpClick: () => dispatch(ActionCreators.turn('UP')),
    onKeyDownClick: () => dispatch(ActionCreators.turn('DOWN')),
    onKeyLeftClick: () => dispatch(ActionCreators.turn('LEFT')),
    onKeyRightClick: () => dispatch(ActionCreators.turn('RIGHT'))
  }
}


export default connect(null, mapDispatchToProps)(ControlsView)
