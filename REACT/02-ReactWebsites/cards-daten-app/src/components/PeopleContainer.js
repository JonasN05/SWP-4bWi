import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([])

  useEffect(() => {
    fetch("https://657c5542853beeefdb993793.mockapi.io/swp/react/person").then(
      (res) => res.json().then((data) => {
        console.log(data);
        setPeople(data);
        setFilteredPeople(data)
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
  }


  return (
    <div className=''>


      <div className='fixed border mb-4 bg-slate-400 w-full h-28 p-8'>
        <input className='border p-4' type='text' placeholder='search' onChange={(el) => {
          console.log(el.target.value);
          filterPeople(el.target.value);
        }} />
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
        {filteredPeople.map(person => {
          return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle} />
        })}
      </div>
    </div>
  )
}
