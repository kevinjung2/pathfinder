import React, { useState } from 'react';

import '../stylesheets/Cell.css'

export default function Cell(props) {
  const [visited, setVisited] = useState(false)

  return(
    <td className="cell" id={props.location} onClick={() => setVisited(true)}>
    </td>
  )
}
