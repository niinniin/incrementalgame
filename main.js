/**
 * Created by NinaYoda on 2016-09-27.
 */

var sushis = 0;
var riceprice = 10;
var octopusprice = 20;
var sashimiprice = 40;
var sushiprice = 80;
var souschefprice = 120;

var interval;

function sushiClicker(number){
    sushis = sushis + number;
    document.getElementById("sushis").innerHTML = sushis;

    unlockUpgrades(sushis)
};


function unlockUpgrades(sushis){

        if (sushis < 10) {
            console.log('below 10');
            document.getElementById('rice').setAttribute('disabled', 'true');
            document.getElementById('octopus').setAttribute('disabled', 'true');
            document.getElementById('sashimi').setAttribute('disabled', 'true');
            document.getElementById('sushi').setAttribute('disabled', 'true');
            document.getElementById('sousChef').setAttribute('disabled', 'true');
        }
        else if (sushis == 10)
        {
            document.getElementById('rice').removeAttribute('disabled');

            document.getElementById('octopus').setAttribute('disabled','true');
            document.getElementById('sashimi').setAttribute('disabled','true');
            document.getElementById('sushi').setAttribute('disabled','true');
            document.getElementById('sousChef').setAttribute('disabled','true');
        }
        else if (sushis == 20)
        {
            document.getElementById('octopus').removeAttribute('disabled');

            document.getElementById('sashimi').setAttribute('disabled','true');
            document.getElementById('sushi').setAttribute('disabled','true');
            document.getElementById('sousChef').setAttribute('disabled','true');
        }
        else if (sushis == 40)
        {

            document.getElementById('sashimi').removeAttribute('disabled');

            document.getElementById('sushi').setAttribute('disabled','true');
            document.getElementById('sousChef').setAttribute('disabled','true');
        }
        else if (sushis == 80)
        {

            document.getElementById('sushi').removeAttribute('disabled');

            document.getElementById('sousChef').setAttribute('disabled','true');
        }
        else if(sushis == 120)
        {

            document.getElementById('sousChef').removeAttribute('disabled');
        }



};

function buy(tag,cost){
    sushis = sushis - cost;
    riceprice = riceprice + 1;
    document.getElementById('ricebought').innerHTML = parseInt(document.getElementById('ricebought').innerHTML) + 1;
    document.getElementById('rice').innerHTML = 'RICE '+riceprice+' CLICKS';

    unlockUpgrades(sushis);
    clearInterval(interval);

     interval = window.setInterval(function () {

        sushiClicker(1);
    }, 1000);
}






