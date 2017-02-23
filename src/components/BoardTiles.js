import React, { Component } from 'react'
import Svg, { Rect } from 'react-native-svg'


const EmptyTile = () => (
  <Svg width="16" height="16">
    <Rect x="0" y="0" width="16" height="16" fill="#A1C653" />
  </Svg>
)

const SnakeTile = () => (
  <Svg width="16" height="16">
    <Rect x="0" y="0" width="16" height="16" fill="black" />
  </Svg>
)

const FoodTile = () => (
  <Svg width="16" height="16">
    <Rect x="0" y="0" width="16" height="16" fill="red" />
  </Svg>
)

export { EmptyTile, SnakeTile, FoodTile }
