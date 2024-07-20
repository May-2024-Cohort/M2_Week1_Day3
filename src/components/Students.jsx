import React from 'react'

function Students(props) {
  return (
    <div>
        <ol>
        <li>{props.name}</li> 
        <li>{props.city}</li>
        </ol>
       <h1>{props.name}</h1> 
       <h2>{props.city}</h2>
    </div>
  )
}

export default Students