import React from 'react'

export default function Card(props) {
  return (
    <div className='border grid grid-cols-2 h-40'>
      <div className='flex-1 p-4'>
        <h2 className='font-bold text-xl'>{props.name}</h2>
        <h4>{props.title}</h4>
      </div>

      <div className='bg-green-400 w-full flex-1'>
        <img src={props.imageUrl} alt='' className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}
