import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-evenly bg-dark-grey mt-8 text-slate-50 font-black'>

      <div className='' onClick={() => {
        navigate("/");
      }}>
        Bundesligatabelle
      </div>

      <div className='' onClick={() => {
        navigate("/games");
      }}>
        Veschiedene Matches
      </div>

    </div>
  )
}
