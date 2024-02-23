import React from 'react'
import Team from './data-website-components/Team.js'
import styles from './Table.module.css'

export default function Table({ teams }) {

  teams.sort(function (a, b) {
    return b.points - a.points;
  });

  return (
    <div className='mt-16'>

      <div className={styles.span}>
        <div className=''></div>
        <div className=''></div>
        <div className={styles.teamName}> Teamname</div>
        <div className=''>PTS</div>
        <div className=''>W</div>
        <div className=''>L</div>
        <div className=''>D</div>
      </div>

      {teams.map(team => {
        return <Team name={team.teamName} points={team.points} won={team.won} lost={team.won} draw={team.draw} icon={team.teamIconUrl} />
      })}

    </div>
  )
}
