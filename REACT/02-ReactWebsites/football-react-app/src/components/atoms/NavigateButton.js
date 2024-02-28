import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavigateButton({ titel, path }) {
    const navigate = useNavigate();
    return (
        <div className='hover:cursor-pointer' onClick={() => {
            navigate(path);
        }}>
            {titel}
        </div>

    )
}
