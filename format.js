function capitalize(term){;
    let lowTerm = term.toLowerCase()
    let capTerm = lowTerm.charAt(0).toUpperCase() + lowTerm.slice(1);

    return capTerm;
}

function removeSpecials(item){
    let corrected = ""
    for(let i in item){
        if(item[i] != "'"){
            corrected += item[i];
        }
    }
    
    return corrected;
}

function renameStats(stats) {
    let renamedStats = [];  // Create a new array to store renamed stats
    for (let i = 0; i < stats.length; i++) {
        if (stats[i] == "FlatPhysicalDamageMod") {
            renamedStats.push('AD');
        } else if (stats[i] == "FlatMagicDamageMod") {
            renamedStats.push('AP');
        } else if (stats[i] == "PercentAttackSpeedMod") {
            renamedStats.push('AS');
        } else {
            renamedStats.push(stats[i]); // If no match, keep original value
        }
    }

    return renamedStats; // Return the renamed stats
}
    
function markReady(kaisaTotalBonusAd, kaisaTotalBonusAp, kaisaTotalBonusAs){
    if(kaisaAd(kaisaTotalBonusAd) >= 100){
        document.getElementById('adRow').style.color = 'green';
    }
    if(kaisaAd(kaisaTotalBonusAd) < 100){
        document.getElementById('adRow').style.color = 'white';
    }
    
    if(kaisaTotalBonusAp >= 100){
        document.getElementById('apRow').style.color = 'green';
    }
    if(kaisaTotalBonusAp < 100){
        document.getElementById('apRow').style.color = 'white';
    }

    if(kaisaAs(kaisaTotalBonusAs) >= 100){
        document.getElementById('asRow').style.color = 'green';
    }
    if(kaisaAs(kaisaTotalBonusAs) < 100){
        document.getElementById('asRow').style.color = 'white';
    }
}