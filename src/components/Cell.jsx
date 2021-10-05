import React, { useState } from 'react';

import '../stylesheets/Cell.css'

export default function Cell(props) {
  const [visited, setVisited] = useState(false)

  return(
    <>
      {props.color === 0 ? (<div className="dark">

      </div>) : (<div className="light">

      </div>)}
    </>
  )
}
