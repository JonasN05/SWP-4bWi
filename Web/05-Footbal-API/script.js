const loadData = () => {

    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        })
    })
}


const fillTable = (data) => {
    let html = ""; 

    data.forEach(element => {
        teamIcon = element.teamIconUrl;
        pointString = "Punkte: ";

        html += "<div class='tablePlace'> <div class='container'> <img src=' "+ teamIcon +"'/> </div> <div class='team'>" + element.teamName + "</div> <div class='points'>" + pointString + element.points + "</div> </div>"
    console.log(element.teamIconUrl);

    });

    document.getElementById("output").innerHTML = html;
}


loadData();