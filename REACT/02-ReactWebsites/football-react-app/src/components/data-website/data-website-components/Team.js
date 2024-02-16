import React from 'react'
import styles from './Team.module.css'

export default function Team({ name, points, won, lost, draw, icon }) {
    console.log({ name, points, icon })
    return (
        <div className={styles.span}>

            <div></div>
            <div><img src={icon} alt='' /></div>
            <div className='font-black'>{name}</div>
            <div>{points}</div>
            <div>{won}</div>
            <div>{lost}</div>
            <div>{draw}</div>

        </div>
    )
}
