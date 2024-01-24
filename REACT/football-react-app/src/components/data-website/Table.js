import React from 'react'
import Team from './data-website-components/Team.js'

export default function Table({ teams }) {

  return (
    <div>
      {teams.map(team => {
        return <Team name={team.teamName} points={team.team} />
      })}
    </div>
  )
}
