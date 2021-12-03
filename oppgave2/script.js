function doClick() {
    model[0].points += model[0].pointsPerClick;
    model[0].smileyIndex = getNextSmileyIndex(model[0].smileyIndex);
    updateView();
}

function buyUpgrade(upgradeCost) {
    if (model[0].points < upgradeCost) return;
    model[0].points -= upgradeCost;
    model[0].pointsPerClick++;
    updateView();
}
function nullUt(nullen) {
    if (model[0].points < nullen) return;
    model[0].points = model[1].nullPoeng;
    updateView();
}
function minusPoeng(minusEn) {
    model[0].points -= minusEn;
    updateView();
}
function jukseKnapp() {
    if (model[0].points >0) 
    model[0].points *= 10; 
    model[0].pointsPerClick *= 10;
    model[0].juksemaker++;
    if (model[0].juksemaker >=1)
    model[0].juks = `<h1>Juksemaker! 👿 </h1>`
    updateView();
    }

    function ikkeJuks() {
        model[0].points = 0; 
        model[0].pointsPerClick = 1;
        model[0].juksemaker = 0;
        if (model[0].juksemaker <1)
        model[0].juks = `<h1> </h1>`
        updateView();
        }

    function uboost() {
        model[0].points *= 1000;
        model[0].pointsPerClick *=1000;
        model[0].juksemaker++;
    if (model[0].juksemaker >=1)
    model[0].juks = `<h1>👿 Juksemaker! 👿 </h1>`
    updateView();    
        }    

        function getSmiley() {
            if(model[0].smileyIndex == 0){smiley = '😀'}
            if(model[0].smileyIndex == 1){smiley = '😁'} 
            if(model[0].smileyIndex == 2){smiley = '😎'} 
            if(model[0].smileyIndex == 3){smiley = '😍'} 
            updateView();  
        }

        function getNextSmileyIndex() {
            const maxSmileyIndex = 3;
            model[0].smileyIndex++;
            if (model[0].smileyIndex> maxSmileyIndex) {
                model[0].smileyIndex = 0;
            }
            return model[0].smileyIndex;
        }