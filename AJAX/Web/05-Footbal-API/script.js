const loadData = () => {

    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        })
    })
}


const fillTable = (data) => {
    let html = ""; 

    data.forEach(element => {
        pointString = "Punkte: ";

        html += "<div class='tableElement'> <div></div> <div class='teamIcon'> <img src=' "+ element.teamIconUrl +"'/> </div> <div class='teamName'>" + element.teamName + "</div> <div class='points'>" + element.points + "</div> <div>" + element.won + "</div> <div>" + element.lost + "</div> <div>" + element.draw + "</div></div>"
    });

    document.getElementById("output").innerHTML = html;
}

/*
printSth = () => {
    console.log('Hallo');
}
*/

loadData();
//printSth();


