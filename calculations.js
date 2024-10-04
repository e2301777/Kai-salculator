function hpPerlvl(champion){
    let lvl = document.getElementById('lvlRange').value;
    let hpAtlvl = championData.data[champion].stats.hp + ((lvl-1)*championData.data[champion].stats.hpperlevel);
    return hpAtlvl.toFixed(2);
}

function arPerlvl(champion){
    let lvl = document.getElementById('lvlRange').value;
    let arAtlvl = championData.data[champion].stats.armor + ((lvl-1)*championData.data[champion].stats.armorperlevel);
    return arAtlvl.toFixed(2);
}

function mrPerlvl(champion){
    let lvl = document.getElementById('lvlRange').value;
    let mrAtlvl = championData.data[champion].stats.spellblock + ((lvl-1)*championData.data[champion].stats.spellblockperlevel);
    return mrAtlvl.toFixed(2);
}

function adPerlvl(champion){
    let lvl = document.getElementById('lvlRange').value;
    let adAtlvl = championData.data[champion].stats.attackdamage + ((lvl-1)*championData.data[champion].stats.attackdamageperlevel);
    return adAtlvl.toFixed(2);
}

function asPerlvl(champion){
    let lvl = document.getElementById('lvlRange').value;
    let asAtlvl = championData.data[champion].stats.attackspeed * (1+(((lvl-1)*championData.data[champion].stats.attackspeedperlevel)/100));
    return asAtlvl.toFixed(4);
}



function kaisaAd(totalBonusAd){
    let lvl = document.getElementById('lvlRange').value;
    let bonusAd = kaisalvlAd[lvl-1] + totalBonusAd;
    return bonusAd.toFixed(0);
}

function kaisaAs(totalBonusAs){
    let lvl = document.getElementById('lvlRange').value;
    let bonusAs = kaisalvlAs[lvl-1] + (totalBonusAs*100);
    return bonusAs.toFixed(0);
}