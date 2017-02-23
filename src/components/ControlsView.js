import React, { Component, PropTypes } from 'react'
import { View, Button } from 'react-native'

const ControlsView = (props) => (
  <View>
    <Button onPress={props.onKeyUpClick} title="UP" />
    <Button onPress={props.onKeyDownClick} title="DOWN" />
    <Button onPress={props.onKeyLeftClick} title="LEFT" />
    <Button onPress={props.onKeyRightClick} title="RIGHT" />
  </View>
)

ControlsView.propTypes = {
  onKeyUpClick: React.PropTypes.func.isRequired,
  onKeyDownClick: React.PropTypes.func.isRequired,
  onKeyLeftClick: React.PropTypes.func.isRequired,
  onKeyRightClick: React.PropTypes.func.isRequired
}

export default ControlsView
