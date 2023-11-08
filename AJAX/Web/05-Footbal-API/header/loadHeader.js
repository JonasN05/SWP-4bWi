
let htmlMainMenu = `
<div id="heading">
    <div id="name">
        <div id="öbl"><h1>Österreichische</h1><h1>Bundesliega</h1></div>
        <div id="untertietel"><h1>time to play football</h1></div>
    </div>
    <div id="logo"><img id="logoPicture" src="pictures/Österreichische_Fußball_Bundesliga_(ÖFBL)_Logo.png" alt=""></div>
</div> `;

let htmlNavBarJs = `
<div class="navBar">
        <div class="navBarElement"><a class="navBarLink" href="index.html">Bundesliegatabelle</a></div>
        <div class="navBarElement"><a class="navBarLink" href="index2.html">Verschiedene Matches</a></div>
</div>`;


document.getElementById('main-menu').innerHTML = htmlMainMenu;
document.getElementById('navBarJs').innerHTML = htmlNavBarJs;

const date = new Date();
let dateYear = date.getFullYear();

let htmlFooter = `
<div id="bottomBar">
    <div id="aboutTheLiga"><a href="https://www.bundesliga.at/de/"><h1>About the Liga</h1><img src="pictures/BL50Y_RGB_RZ_63957_x_0x0.png" alt=""></a></div>
    <div id="footballLigaPicture"><img src="pictures/Vorschaubild_ABL_78f19_f_1280x720.png" alt=""></div>
    <div id="copyright">
    <h1>© Jonas Nigg</h1>
    <h1 class="year">${dateYear}</h1>
    </div>
</div>`;

document.getElementById('footer').innerHTML = htmlFooter;