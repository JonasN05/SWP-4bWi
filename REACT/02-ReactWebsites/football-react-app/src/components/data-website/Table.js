import React from 'react'
import Team from './data-website-components/Team.js'

export default function Table({ teams }) {

  return (
    <div>
      {teams.map(team => {
        return <Team name={team.teamName} points={team.points} won={team.won} lost={team.won} draw={team.draw} />
      })}
    </div>
  )
}
