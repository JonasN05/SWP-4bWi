import React from 'react'
import { useEffect, useState } from 'react'

export default function Matches({ teams }) {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result) => {
      result.json().then((matches) => {

      })
    });
  }, [matches]);



  teams.sort((x, y) => x.teamName.localeCompare(y.teamName));


  return (
    <div>
      <div className='w-full flex justify-evenly'>

        {teams.map(team => {
          return <div className='p-2'><img src={team.teamIconUrl} alt=''></img></div>
        })}

      </div>

      <div>
        set
      </div>


    </div >

  )

  function onclickHandler(team) {

  }

}
