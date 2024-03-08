import React from 'react'
import styles from './Match.module.css'

export default function Match({ match }) {

    let pointsTeam1 = "";
    let pointsTeam2 = "";

    if (match.matchResults.length > 0) {
        pointsTeam1 = match.matchResults[1].pointsTeam1;
        pointsTeam2 = match.matchResults[1].pointsTeam2;
    }


    return (

        <div className={styles.matchBody}>

            <div className={styles.team1}>
                <div className={styles.teamIcon1}><img src={match.team1.teamIconUrl} alt=''></img></div>
                <div className={styles.teamName1}>{match.team1.teamName}</div>
                <div className={styles.points}>{pointsTeam1}</div>

            </div>

            <div className={styles.bindestrich}>-</div>

            <div className={styles.team2}>
                <div className={styles.points}>{pointsTeam2}</div>
                <div className={styles.teamName2}>{match.team2.teamName}</div>
                <div className={styles.teamIcon2}><img src={match.team2.teamIconUrl} alt=''></img></div>
            </div>

        </div>

    )
}
