import React from 'react'
import Team from '../molekules/Team.js'
import TableHeader from '../molekules/TableHeader.js'

export default function Table({ teams }) {

  teams.sort(function (a, b) {
    return b.points - a.points;
  });

  return (
    <div className='mt-16'>

      <TableHeader></TableHeader>

      {teams.map(team => {
        return <Team name={team.teamName} points={team.points} won={team.won} lost={team.won} draw={team.draw} icon={team.teamIconUrl} />
      })}

    </div>
  )
}
