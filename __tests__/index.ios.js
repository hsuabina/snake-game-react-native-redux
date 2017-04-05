import 'react-native'
import React from 'react'

import { EmptyTile } from 'src/components/BoardTiles/BoardTiles.js'
import Scores from 'src/components/Scores/Scores.js'


describe('<EmptyTile /> from BoardTiles', () => {
  it('matches snapshot', () => {
    const tree = shallow(<EmptyTile />)
    expect(tree).toMatchSnapshot()
  })
})

describe('<SnakeTile /> from SnakeTile', () => {
  it('matches snapshot', () => {
    const tree = shallow(<EmptyTile />)
    expect(tree).toMatchSnapshot()
  })
})

describe('<Scores />', () => {
  it('matches snapshot', () => {
    const tree = shallow(<Scores score={1}/>)
    expect(tree).toMatchSnapshot()
  })
})
