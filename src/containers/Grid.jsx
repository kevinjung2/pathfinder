import React from 'react';

import Cell from '../components/Cell'

export default function Grid(props) {
  const { gridSize } = props
  const grid = Array.from({length: gridSize}, () => 0)

  return(
    <div className="grid">
      {grid.map(cell => <Cell />)}
    </div>
  )
}
