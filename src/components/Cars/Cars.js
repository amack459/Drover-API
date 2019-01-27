import React from 'react';

import Car from './Car/Car'

const cars = (props) => props.cars.map((car) => {
  return(
    <Car
      image={car.images[0].small_image_url}
      key={car.id}
      make={car.vehicle_make}
      model={car.vehicle_model}
      color={car.color}
      year={car.year}
      price={car.price_discount_and_deposit_schedule_hash[2].driver_price_pounds_after_discount_including_insurance}
      gear={car.transmission}
    />
  )
});

export default cars;
