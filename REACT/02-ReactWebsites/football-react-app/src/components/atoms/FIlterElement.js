import React from 'react'
import styles from "./Matches.module.css";
import { useState } from 'react';

export default function FIlterTeam({ team, onclickHandler }) {

    const [scale, setScale] = useState(false);

    return (
        <div className={scale ? styles.scale : styles.normal} onClick={() => {
            onclickHandler(team)
            setScale(!scale);
            console.log(scale);
        }}>
            <img src={team.teamIconUrl} alt=''></img>
        </div >
    )
}
