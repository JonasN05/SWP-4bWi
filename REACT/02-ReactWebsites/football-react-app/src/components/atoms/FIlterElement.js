import React from 'react'

export default function FIlterTeam({ team, onclickHandler }) {
    return (
        <div className='p-2' onClick={() => onclickHandler(team)}><img src={team.teamIconUrl} alt=''></img></div>
    )
}
