import React from 'react';

const car = (props) => {
  return(
     <ul>
       <img src={props.image} alt={props.vehicle_make}/>
       <li>{props.year}</li>
       <li>{props.color}</li>
       <li>{props.make}</li>
       <li>{props.model}</li>
       <li>&pound;{props.price}</li>
     </ul>
  )
}

export default car;
