import React from 'react'
import Team from './data-website-components/Team.js'
import styles from './Table.module.css'

export default function Table({ teams }) {

  return (
    <div className='mt-16'>

      <div className={styles.span}>
        <div></div>
        <div></div>
        <div className={styles.teamName}> Teamname</div>
        <div>PTS</div>
        <div>W</div>
        <div>L</div>
        <div>D</div>
      </div>

      {teams.map(team => {
        return <Team name={team.teamName} points={team.points} won={team.won} lost={team.won} draw={team.draw} icon={team.teamIconUrl} />
      })}

    </div>
  )
}
