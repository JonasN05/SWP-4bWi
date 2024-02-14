import React from 'react'

export default function Team({ name, points, won, lost, draw }) {
    console.log({ name, points })
    return (
        <div className='w-full grid grid-cols-5'>
            <div>{name}</div>
            <div>{points}</div>
            <div>{won}</div>
            <div>{lost}</div>
            <div>{draw}</div>

        </div>
    )
}
