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

        html += "<div class='tablePlace'> <div class='container'> <img src=' "+ element.teamIconUrl +"'/> </div> <div class='team'>" + element.teamName + "</div> <div class='points'>" + pointString + element.points + "</div> </div>"
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


