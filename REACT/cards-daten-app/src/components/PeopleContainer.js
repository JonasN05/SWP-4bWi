import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {

    const [people, setPeople] = useState([]);

    useEffect(()=>{
            fetch("https://657c5542853beeefdb993793.mockapi.io/swp/react/person").then(
                (res) => res.json().then((data)=>{
                    console.log(data);
                    setPeople(data);
            })
        );
    }, []);


  return (
    <div>
        <h1>People</h1>

        <div className='w-40'>
          {people.map(person => {
            return <Card name ={person.name} imageUri={person.avatar} title={person.jobtitle}/>
          })}
        </div>
    </div>
  )
}
