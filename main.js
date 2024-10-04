//--------------------Globals--------------------//
let itemData;
let championData;
let champion;
let item;

const kaisalvlAd = [0, 1.9, 3.8, 5.9, 8.0, 10.3, 12.6, 15.0, 17.5, 20.1, 22.8, 25.6, 28.5, 31.4, 34.5, 37.6, 40.9, 44.2];
const kaisalvlAs = [0, 1.3, 2.7, 4.1, 5.6, 7.1, 8.7, 10.4, 12.1, 13.9, 15.8, 17.7, 19.7, 21.8, 23.9, 26.1, 28.3, 30.6];
let kaisaItemsAd = 0;
let kaisaItemsAdTT = 0;
let kaisaItemsAp = 0;
let kaisaItemsAs = 0;
let kaisaItemsAsTT = 0;
let kaisaTotalBonusAd = 0;
let kaisaTotalBonusAp = 0;
let kaisaTotalBonusAs = 0;

let statNames = [];
let statValues = [];
let buildItems = [];
let buildStats = [];
let buildValues = [];
let renamedStats = [];
var itemList = [];

//document.getElementById('champSearch').value = 'Kaisa';
document.getElementById('itemSearch').value = '';
document.getElementById('crntBuild').innerHTML = '';

//--------------------Event listeners--------------------//

callChamps.addEventListener('click', function() {
    championInfo().then(showChampInfo);
});

itemSearch.addEventListener('click', function() {
    itemInfo().then(showItemInfo);
});

callItems.addEventListener('click', function() {
    itemInfo().then(showItemInfo);
});

document.addEventListener('DOMContentLoaded', (event) => {
    champlvl();
});

//--------------------Fetch/show info-----fetch.js---------------//



//--------------------Correct name format-----format.js---------------//



//--------------------Stats per level------calculations.js--------------//



//----------Rename and recolor------format.js---------//





//-----------------LEGACY FUNCTIONS-----------------//

        /* function showItemInfo(itemData) {
    let item = document.getElementById("itemSearch").value;
    let found = false;

    for (let key in itemData.data) {
        if (itemData.data.hasOwnProperty(key)) {
            if (itemData.data[key].name.toLowerCase() === item.toLowerCase()) {
                let itemName = itemData.data[key].name;
                
                
                let stats = itemData.data[key].stats;
                let statsRows = '';

                for (let statKey in stats) {
                    if (stats.hasOwnProperty(statKey)) {
                        statsRows += `<tr><td>${statKey}:</td><td>${stats[statKey]}</td></tr>`;
                        statNames.push(statKey);
                        statValues.push(stats[statKey]);
                    }
                }
                console.log(statNames);
                console.log(statValues);
                let table = `
                    <table>
                        <tr><th>${itemData.data[key].name}</th></tr>
                        ${statsRows}
                    </table>`;
                    console.log(itemName);
                    document.getElementById("itemInfo").innerHTML = table + `<br><input type="button" id="addToBuild" value="Add to build" onclick="addItem('${itemName}', ${JSON.stringify(statNames)}, ${JSON.stringify(statValues)})">`;                found = true;
                break; // Exit the loop once the item is found and displayed
            }
        }
    }
    itemName = '';

    if (!found) {
        document.getElementById("itemInfo").innerHTML = "Item not found";
    }
} */

//----------------------------------------------------------------

        /*     function addItem(item, names, values){
        console.log(item);
        
        for (let i in names){
            if (names[i] == "FlatPhysicalDamageMod"){
                kaisaItemsAd += values[i];
                kaisaTotalBonusAd += kaisaItemsAd;
                kaisaItemsAd = 0;
                statNames = [];
                statValues = [];
            }
            else if (names[i] == "FlatMagicDamageMod"){
                kaisaItemsAp += values[i];
                kaisaTotalBonusAp += kaisaItemsAp; 
                kaisaItemsAp = 0;
                statNames = [];
                statValues = [];             
            }
            else if (names[i] == "PercentAttackSpeedMod"){
                kaisaItemsAs += values[i];
                kaisaTotalBonusAs += kaisaItemsAs;
                kaisaItemsAs = 0;
                statNames = [];
                statValues = [];  
            }

            document.getElementById('crntBuild').innerHTML += item + '<br>';
            buildItems.push(names[i]);
            buildValues.push(values[i]);

            
        }
        console.log(buildItems);
        console.log(buildValues);
        //document.getElementById('itemSearch').value = ''
    } */