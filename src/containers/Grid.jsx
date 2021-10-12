import React from 'react';
import { gridArrays } from '../components/gridArrays.js';

import Cell from '../components/Cell'

export default function Grid(props) {
  const { gridSize } = props
  const grid = gridArrays()[gridSize]

  return(
    <table className="grid">
      {grid.map((row, i) => <tr>{row.map((cell, j) => <Cell location={`${i},${j}`} key={`${i},${j}`} />)}</tr>)}
    </table>
  )
}
