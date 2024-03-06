import React from 'react';
import { useEffect, useState } from 'react';
import Match from '../molekules/Match.js';
import FilterElement from '../atoms/FIlterElement.js';

export default function Matches({ teams }) {

  const [matches, setMatches] = useState("https://api.openligadb.de/getmatchdata/%C3%B6bl1/2023/CASHPOINT%20SCR%20Altach");
  const [matchDataOfSpecificTeam, setMatchDataOfSpecificTeam] = useState([]);


  useEffect(() => {
    fetch(matches).then((result) => {
      result.json().then((matchData) => {
        setMatchDataOfSpecificTeam(matchData);
      })
    });
  }, [matches]);


  teams.sort((x, y) => x.teamName.localeCompare(y.teamName));


  return (
    <div className=''>
      <div className='w-full flex justify-evenly mb-10 mt-10'>
        {teams.map(team => {
          return <FilterElement team={team} onclickHandler={onclickHandler}></FilterElement>
        })}
      </div>

      <div className='h-full'>
        {matchDataOfSpecificTeam.map(match => {
          return <Match match={match}></Match>
        })}
      </div>
    </div >
  )

  function onclickHandler(team) {
    let year = new Date().getFullYear() - 1;
    let teamName = team.teamName;

    let teamNameLink = teamName.replaceAll(" ", "%20");

    setMatches("https://api.openligadb.de/getmatchdata/%C3%B6bl1/" + year + "/" + teamNameLink + "");

  }

}
