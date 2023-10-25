
let html = `
<div id="heading">
    <div id="name">
        <div id="öbl"><h1>Österreichische</h1><h1>Bundesliega</h1></div>
        <div id="untertietel"><h1>time to play football</h1></div>
    </div>
    <div id="logo"><img id="logoPicture" src="pictures/Österreichische_Fußball_Bundesliga_(ÖFBL)_Logo.png" alt=""></div>
</div>
<div class="navBar">
        <div class="navBarElement"><a class="navBarLink" href="index.html">Bundesliegatabelle</a></div>
        <div class="navBarElement"><a class="navBarLink" href="index2.html">Verschiedene Matches</a></div>
</div>`;

console.log(html);

document.getElementById('main-menu').innerHTML = html;