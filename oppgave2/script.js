function doClick() {
    points += pointsPerClick;
    smileyIndex = getNextSmileyIndex(smileyIndex);
    updateView();
}

function buyUpgrade(upgradeCost) {
    if (points < upgradeCost) return;
    points -= upgradeCost;
    pointsPerClick++;
    updateView();
}
function nullUt(nullen) {
    if (points < nullen) return;
    points = nullPoeng;
    updateView();
}
function minusPoeng(minusEn) {
    points -= minusEn;
    updateView();
}
function jukseKnapp() {
    if (points >0) 
    points *= 10; 
    pointsPerClick *= 10;
    juksemaker++;
    if (juksemaker >=1)
    juks = `<h1>Juksemaker! 👿 </h1>`
    updateView();
    }

    function ikkeJuks() {
        points = 0; 
        pointsPerClick = 1;
        juksemaker = 0;
        if (juksemaker <1)
        juks = `<h1> </h1>`
        updateView();
        }

    function uboost() {
    points *= 1000;
    pointsPerClick *=1000;
    juksemaker++;
    if (juksemaker >=1)
    juks = `<h1>👿 Juksemaker! 👿 </h1>`
    updateView();    
        }    

        function getSmiley(aSmileyIndex) {
            if(aSmileyIndex == 0) return '😀';
            if(aSmileyIndex == 1) return '😁';
            if(aSmileyIndex == 2) return '😎';
            if(aSmileyIndex == 3) return '😍';
            return '';
        }

        function getNextSmileyIndex(aSmileyIndex) {
            const maxSmileyIndex = 3;
            aSmileyIndex++;
            if (aSmileyIndex > maxSmileyIndex) {
                aSmileyIndex = 0;
            }
            return aSmileyIndex;
        }