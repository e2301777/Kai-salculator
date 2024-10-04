
//---------Fetch data------------

async function championInfo(){
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion.json");
    const data = await response.json();
    championData = data;
    return data;
}

async function itemInfo(){
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/item.json");
    const data = await response.json();
    itemData = data;

    for (let key in itemData.data) {
        itemName = removeSpecials(itemData.data[key].name);
        if(!itemList.includes(itemName)){
            for(let stat in itemData.data[key].stats){
                if(stat == "FlatPhysicalDamageMod" || stat == "FlatMagicDamageMod" || stat == "PercentAttackSpeedMod"){
                    itemList.push(itemName);
                    break;
                }
            }
            
        }
        
    }
    //console.log(itemList);
    //console.log(itemData);
    return data;
}

//---------Show champion data------------

function showChampInfo(championData){
    //champion = capitalize(document.getElementById("champSearch").value)
    document.getElementById('crntAd').innerHTML = kaisaAd(kaisaTotalBonusAd) + ' / 100' + `<span class="tooltiptext">AD from items: ${kaisaItemsAdTT} <br> AD from lvls: ${kaisaAd(kaisaTotalBonusAd) - kaisaItemsAdTT} </span>`;
    document.getElementById('crntAp').innerHTML = kaisaTotalBonusAp + ' / 100' + '<span class="tooltiptext">All AP from items</span>';
    document.getElementById('crntAs').innerHTML = kaisaAs(kaisaTotalBonusAs) + '% / 100%' + `<span class="tooltiptext"> AS from items: ${kaisaItemsAsTT*100}% <br> AS from lvls: ${kaisaAs(kaisaTotalBonusAs) - kaisaItemsAsTT*100}%</span>`;

    markReady(kaisaTotalBonusAd, kaisaTotalBonusAp, kaisaTotalBonusAs)
}

//--------------------Champ lvl selector--------------------//

function champlvl() {
    let slider = document.getElementById('lvlRange');
    let output = document.getElementById('champlvl');

    window.onload = function() {
        slider.value = 1; // Set slider value to 1
        output.value = 1; // Set output value to match the slider
        if (champion) {
            showChampInfo(championData); // Update info when page loads if necessary
        }
    };

    // When the slider value changes, update the text field
    slider.oninput = function() {
        output.value = this.value;
        if (champion) {
            showChampInfo(championData); // Update info when slider changes
        }
        document.getElementById('callChamps').click();
    };

    // When the text field value changes, update the slider
    output.oninput = function() {
        // Ensure the value is within the slider's range and is a number
        let value = parseInt(this.value);
        if (!isNaN(value) && value >= slider.min && value <= slider.max) {
            slider.value = value;
        }
        document.getElementById('callChamps').click();
    };
}

//---------Show item data------------

function showItemInfo(itemData) {
        
    let item = document.getElementById("itemSearch").value;
    //console.log(item);
        
    let found = false;
    let itemName = ''; // Declare itemName here
    
    // Reset statNames and statValues each time the function is called
    statNames = [];
    statValues = [];

    for (let key in itemData.data) {
        if (itemData.data.hasOwnProperty(key)) {
            if (removeSpecials(itemData.data[key].name.toLowerCase()) === removeSpecials(item.toLowerCase())) {
                itemName = itemData.data[key].name;
                let stats = itemData.data[key].stats;
                let statsRows = '';

                for (let statKey in stats) {
                    if (stats.hasOwnProperty(statKey)) {
                        statsRows += `<tr><td>${statKey}:</td><td>${stats[statKey]}</td></tr>`;
                        statNames.push(statKey);
                        statValues.push(stats[statKey]);
                    }
                }
    
                //console.log(statNames);
                //console.log(statValues);
                
                let table = `
                    <table>
                        <tr><th>${itemName}</th></tr>
                        ${statsRows}
                    </table>`;
                    
                //console.log(itemName);
                //console.log(removeSpecials(item));
    
                // Directly call a function that stores the values when the button is clicked
                document.getElementById("itemInfo").innerHTML = table + 
                    `<br><input type="button" id="addToBuild" value="Add to build" 
                    onclick="prepareAddItem('${removeSpecials(item)}')">`;
    
                found = true;
                break; // Exit the loop once the item is found and displayed
            }
            else{
                document.getElementById("itemInfo").innerHTML = "Please enter a valid item"
            }
        }
    }       
}
    


//----------Preparation for adding item-----------

function prepareAddItem(itemName) {
    // Call addItem and pass in the global statNames and statValues arrays
    //console.log(itemName);
    addItem(itemName, statNames, statValues);
}

//----------Add item-------------

function addItem(item, names, values) {
    
    if(buildItems.length < 6){
        //console.log(item);
        document.getElementById('addToBuild').style.display = 'none';
        for (let i in names) {
            if (names[i] == "FlatPhysicalDamageMod") {
                kaisaItemsAd += values[i];
                kaisaTotalBonusAd += kaisaItemsAd;
                kaisaItemsAdTT += kaisaItemsAd;
                kaisaItemsAd = 0;
            } else if (names[i] == "FlatMagicDamageMod") {
                kaisaItemsAp += values[i];
                kaisaTotalBonusAp += kaisaItemsAp; 
                kaisaItemsAp = 0;
            } else if (names[i] == "PercentAttackSpeedMod") {
                kaisaItemsAs += values[i];
                kaisaTotalBonusAs += kaisaItemsAs;
                kaisaItemsAsTT += kaisaItemsAs;
                kaisaItemsAs = 0;
            }
                
            if(names[i] == "FlatPhysicalDamageMod" || names[i] == "FlatMagicDamageMod" || names[i] == "PercentAttackSpeedMod"){
                buildStats.push(names[i]);
                buildValues.push(values[i]);
            }
        }
        buildItems.push(item);


        renamedStats = renameStats(buildStats);
        let correctedItem = removeSpecials(item);
        //console.log(correctedItem);
        
        document.getElementById('crntBuild').innerHTML += '<strong>' + correctedItem + '</strong>: <br>';
        for(i in renamedStats){
            document.getElementById('crntBuild').innerHTML += '<em>' + renamedStats[i] +'</em>: ' + buildValues[i] + ', ';
        }
        document.getElementById('crntBuild').innerHTML += '<br>'

        console.log(buildItems);   
        console.log(buildStats);
        console.log(buildValues);
        
            // Reset statNames and statValues after adding item
        renamedStats = [];
        buildStats = [];
        buildValues = [];
        statNames = [];
        statValues = [];

        document.getElementById('callChamps').click();
        document.getElementById('itemInfo').innerHTML = '';
        document.getElementById('itemSearch').value = '';
    }
    if(buildItems.length == 6){
        document.getElementById('itemInfo').innerHTML = 'Full build, cannot add item!';
    }
}