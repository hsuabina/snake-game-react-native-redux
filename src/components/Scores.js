import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

const Scores = ({score}) => (
  <View>
    <Text>SCORE: { score }</Text>
  </View>
)

Scores.propTypes = {
  score: PropTypes.number.isRequired
}


export default Scores
