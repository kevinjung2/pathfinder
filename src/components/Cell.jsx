import React, { useState } from 'react';

import '../stylesheets/Cell.css'

export default function Cell(props) {
  const [visited, setVisited] = useState(false)

  return(
    <div className="cell" onClick={() => setVisited(true)}>
    </div>
  )
}
