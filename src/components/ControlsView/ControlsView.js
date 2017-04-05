import React, { Component, PropTypes } from 'react'
import Svg, { G, Rect, Polygon } from 'react-native-svg'

const ControlsView = (props) => (
  <Svg width="150" height="150">
    <G onPress={props.onKeyUpClick}>
      <Rect x='50' y='0' width='50' height='50' fill='#6d6d6d' />
      <Polygon points='60,40, 75,10 90,40' fill='#ffffff'/>
    </G>

    <G onPress={props.onKeyDownClick}>
      <Rect x='50' y='100' width='50' height='50' fill='#6d6d6d' />
      <Polygon points='60,110, 75,140 90,110' fill='#ffffff' />
    </G>

    <G onPress={props.onKeyLeftClick}>
      <Rect x='0' y='50' width='50' height='50' fill='#6d6d6d' />
      <Polygon points='40,60, 10,75 40,90' fill='#ffffff' />
    </G>

    <G onPress={props.onKeyRightClick}>
      <Rect x='100' y='50' width='50' height='50' fill='#6d6d6d' />
      <Polygon points='110,60, 140,75 110,90' fill='#ffffff' />
    </G>
  </Svg>
)

ControlsView.propTypes = {
  onKeyUpClick: React.PropTypes.func.isRequired,
  onKeyDownClick: React.PropTypes.func.isRequired,
  onKeyLeftClick: React.PropTypes.func.isRequired,
  onKeyRightClick: React.PropTypes.func.isRequired
}

export default ControlsView
