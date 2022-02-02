import React from 'react';

export default function List({mypeople}) {
  return (
    <>
      {
        mypeople.map((person) =>{
          const {id, name, age , img}=person;
          return (
            <div key={id} className='per_sec'>
            <div className='img_sec'>
              <img src={img} alt="" />
            </div>
            <div className='cont_s'>
              <h1>{name}</h1>
              <h3>{age} Age</h3>
            </div>
          </div>
          )
        })
      }
  </>
  )
  
}
