/**
 * Created by NinaYoda on 2016-09-27.
 */

var sushis = 0;
var riceprice = 10;
var octopusprice = 20;
var sashimiprice = 40;
var sushiprice = 80;
var souschefprice = 120;

var ricevalue = 1;
var octopusvalue = 2;
var sashimivalue = 3;
var sushivalue = 4;
var souschefvalue = 5;

var interval;

function sushiClicker(number){
    sushis = sushis + number;
    document.getElementById("sushis").innerHTML = sushis;

    unlockUpgrades(sushis)
}


function unlockUpgrades(sushis){

        if (sushis < riceprice) {

            document.getElementById('rice').setAttribute('disabled', 'true');

        }else{
            document.getElementById('rice').removeAttribute('disabled');
        }

        if (sushis < octopusprice) {
            document.getElementById('octopus').setAttribute('disabled', 'true');
        }else {
            document.getElementById('octopus').removeAttribute('disabled');
        }

        if (sushis < sashimiprice) {
            document.getElementById('sashimi').setAttribute('disabled', 'true');
        }else {
            document.getElementById('sashimi').removeAttribute('disabled');
        }

        if (sushis < sushiprice) {
            document.getElementById('sushi').setAttribute('disabled', 'true');
        }else {
            document.getElementById('sushi').removeAttribute('disabled');
        }

        if (sushis < souschefprice) {
            document.getElementById('sousChef').setAttribute('disabled', 'true');
        }else {
            document.getElementById('sousChef').removeAttribute('disabled');
        }


}

function buy(tag){

    var values = getPriceAndValue(tag);

    sushis = sushis - values[0];

    document.getElementById("sushis").innerHTML = sushis;

    var calculatedValue = (values[1] * 1) + values[3];

    console.log(tag.id +" "+ values[1]);
    console.log('Calculated value ' + calculatedValue);

    updatePrice(tag);

    unlockUpgrades(sushis);

    clearInterval(interval);

    interval = window.setInterval(function () {

        sushiClicker(1);
    }, 1000/calculatedValue);

}


function getPriceAndValue(tag){
    var values =[];

    if (tag.id == 'rice') {

        values[0] = riceprice;
        values[1] = ricevalue;
        values[2] = document.getElementById('ricebought').innerHTML;

    }else if (tag.id == 'octopus'){

        values[0] = octopusprice;
        values[1] = octopusvalue;
        values[2] = document.getElementById('octopusinfo').innerHTML;

    }else if (tag.id == 'sashimi'){

        values[0] = sashimiprice;
        values[1] = sashimivalue;
        values[2] = document.getElementById('sashimiinfo').innerHTML;

    }else if (tag.id == 'sushi'){

        values[0] = sushiprice;
        values[1] = sushivalue;
        values[2] = document.getElementById('sushiinfo').innerHTML;

    }else if (tag.id == 'sousChef'){

        values[0] = souschefprice;
        values[1] = souschefvalue;
        values[2] = document.getElementById('souschefinfo').innerHTML;

    }

    values[3] = previouslyBought();

    return values;
}

function previouslyBought(){
    var previouslyBought;

    previouslyBought = parseInt(document.getElementById('ricebought').innerHTML) * 1;
    previouslyBought = previouslyBought + parseInt(document.getElementById('octopusinfo').innerHTML)*2;
    previouslyBought = previouslyBought + parseInt(document.getElementById('sashimiinfo').innerHTML)*3;
    previouslyBought = previouslyBought + parseInt(document.getElementById('sushiinfo').innerHTML)*4;
    previouslyBought = previouslyBought + parseInt(document.getElementById('souschefinfo').innerHTML)*5;
    return  previouslyBought
}


function updatePrice(tag){

    if (tag.id == 'rice') {
        riceprice = riceprice +1;
        document.getElementById('ricebought').innerHTML = parseInt(document.getElementById('ricebought').innerHTML) + 1;
        document.getElementById(tag.id).innerHTML = 'RICE '+riceprice+' CLICKS';

    }else if (tag.id == 'octopus'){

        octopusprice = octopusprice +1;
        document.getElementById('octopusinfo').innerHTML = parseInt(document.getElementById('octopusinfo').innerHTML) + 1;
        document.getElementById(tag.id).innerHTML = 'OCTOPUS '+octopusprice+' CLICKS';

    }else if (tag.id == 'sashimi'){

        sashimiprice = sashimiprice +1;
        document.getElementById('sashimiinfo').innerHTML = parseInt(document.getElementById('sashimiinfo').innerHTML) + 1;
        document.getElementById(tag.id).innerHTML = 'SASHIMI '+sashimiprice+' CLICKS';

    }else if (tag.id == 'sushi'){

        sushiprice = sushiprice +1;
        document.getElementById('sushiinfo').innerHTML = parseInt(document.getElementById('sushiinfo').innerHTML) + 1;
        document.getElementById(tag.id).innerHTML = 'SUSHI '+sushiprice+' CLICKS';

    }else if (tag.id == 'sousChef'){

        souschefprice = souschefprice +1;
        document.getElementById('souschefinfo').innerHTML = parseInt(document.getElementById('souschefinfo').innerHTML) + 1;
        document.getElementById(tag.id).innerHTML = 'SOUS CHEF '+souschefprice+' CLICKS';

    }

}
