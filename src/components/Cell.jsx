import React from 'react';

export default function Cell(props) {
  return(
    <>
      {props.color === 0 ? (<div className="dark">

      </div>) : (<div className="light">

      </div>)}
    </>
  )
}
