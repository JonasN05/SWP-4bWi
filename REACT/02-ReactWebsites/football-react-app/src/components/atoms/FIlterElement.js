import styles from "./Matches.module.css";
import { useState, useEffect } from 'react';

export default function FIlterTeam({ team, onclickHandler, id }) {

    const [scale, setScale] = useState(false);

    useEffect(() => {
        if (team.teamInfoId === id) {
            setScale(true);
        } else {
            setScale(false);
        }
    }, [team, id]);

    return (
        <div className={scale ? styles.scale : styles.normal} onClick={() => {
            onclickHandler(team)
        }}>
            <img src={team.teamIconUrl} alt=''></img>
        </div >
    )
}
