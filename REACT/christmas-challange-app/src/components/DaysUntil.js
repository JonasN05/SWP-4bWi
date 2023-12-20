import React from 'react'
import styles from './DaysUntil.module.css'

export default function DaysUntil() {

    var targetDate = '2023-12-24';
    var date = new Date();
    var remainingDays = daysUntil(targetDate, date);
    console.log(remainingDays);

  return (
    <div>
      <div className={styles.daysTilChristmas}>
        Days Until Christmas {remainingDays}
      </div>
    </div>
  )
}

function daysUntil(targetDate,date) {

    var currentDate = new Date(date);
    var targetDateObj = new Date(targetDate);
  
    var timeDifference = targetDateObj.getTime() - currentDate.getTime();
    var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }

  
 