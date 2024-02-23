import React from 'react'
import styles from './Match.module.css'

export default function Match({ match }) {
    return (

        <div className={styles.matchBody}>

            <div>
                <div>{match.team1.teamName}</div>
                <div>{match.team1.points}</div>
            </div>

            <div>-</div>

            <div>
                <div>{match.team2.points}</div>
                <div>{match.team2.teamName}</div>
            </div>

        </div>

    )
}
