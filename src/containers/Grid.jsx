import React from 'react';

import Cell from '../components/Cell'

export default function Grid(props) {
  const [ gridSize ] = props

  render() {
    return(
      <div className="grid">
        {gridSize.map(cell => <Cell />)}
      </div>
    )
  }
}
