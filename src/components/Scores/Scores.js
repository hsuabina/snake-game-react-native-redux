import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

const Scores = (props) => (
  <Text style={ props.style }>SCORE: { props.score }</Text>
)

Scores.propTypes = {
  score: PropTypes.number.isRequired
}


export default Scores
