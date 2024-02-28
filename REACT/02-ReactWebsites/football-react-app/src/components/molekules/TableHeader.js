import React from 'react'
import styles from './TableHeader.module.css'

export default function TableHeader() {
    return (
        <div className={styles.span}>
            <div className=''></div>
            <div className=''></div>
            <div className={styles.teamName}> Teamname</div>
            <div className=''>PTS</div>
            <div className=''>W</div>
            <div className=''>L</div>
            <div className=''>D</div>
        </div>
    )
}
