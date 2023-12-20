import React, { useEffect } from 'react'
import Card from './Card'

export default function PeopleContainer() {
    useEffect(()=>{
            fetch("https://657c5542853beeefdb993793.mockapi.io/swp/react/person").then(
                (res) => res.json().then((data)=>{
                    console.log(data);
            })
        );
    }, [])


  return (
    <div>
        <h1>People</h1>

        <div className='w-40'>
            <Card name="hans" titel="ceo" imageUrl="https://picsum.photos/200/300"/>
            <Card name="hans" titel="ceo" imageUrl="https://picsum.photos/200/300"/> 
            <Card name="hans" titel="ceo" imageUrl="https://picsum.photos/200/300"/> 
        </div>
    </div>
  )
}
