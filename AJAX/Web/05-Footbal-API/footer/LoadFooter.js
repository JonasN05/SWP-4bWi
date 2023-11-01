let htmlFooter = `
<div id="bottomBar">
    <div id="informationButton"><a href="index2.html"><button class="button"><h1>Upcomming Games</h1><img class="football" src="pictures/fussball.png" alt=""></button></a></div>
    <div id="pictureBottomBar"><img src="pictures/Vorschaubild_ABL_78f19_f_1280x720.png" alt=""></div>
    <div id="linkButton"><a href="https://www.bundesliga.at/de/"><button class="button"><h1>About the Liga</h1><img src="pictures/BL50Y_RGB_RZ_63957_x_0x0.png" alt=""></button></a></div>
</div>`;

console.log(htmlFooter);

document.getElementById('main-menu').innerHTML = htmlFooter;