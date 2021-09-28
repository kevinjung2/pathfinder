import React from 'react';

import '../stylesheets/Cell.css'

export default function Cell(props) {
  return(
    <>
      {props.color === 0 ? (<div className="dark">

      </div>) : (<div className="light">

      </div>)}
    </>
  )
}
