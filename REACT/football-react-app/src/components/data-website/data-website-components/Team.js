import React from 'react'

export default function Team(props) {
    console.log(props.name)
    return (
        <div>
            {props.name}
        </div>
    )
}
