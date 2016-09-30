/**
 * Created by NinaYoda on 2016-09-27.
 */


//******** Deklarationer **********

//Antal Sushis (som räknas upp)
var sushis = 0;

//Startpriser
var riceprice = 10;
var octopusprice = 20;
var sashimiprice = 40;
var sushiprice = 80;
var souschefprice = 120;

//Värdet för varje upgrade
var ricevalue = 1;
var octopusvalue = 2;
var sashimivalue = 3;
var sushivalue = 4;
var souschefvalue = 5;

//Intervallen som kommer ticka upp automatiskt
var interval;



//********************* Funktioner ************************

//Anropas vid klick av användare och autoklick
function sushiClicker(number){
    //Räknar upp sushis och skriver ut värdet i applikationen
    sushis = sushis + number;
    document.getElementById("sushis").innerHTML = sushis;

    //Anropar funktion för att se om någon upgrade kan låsas upp (skickar med antalet sushis)
    unlockUpgrades(sushis)
}


//Anropas vid köp av någon upgrade. Elementet som anropar skickas med till funktionen för att avgöra vilken upgrade som köps.
function buy(tag){
    //Förklaring values:
    //values[0] = Upgrade pris
    //values[1] = Upgrade värde
    //values[2] = Tidigare köpta upgrades av samma sort
    //values[3] = Totala värdet för alla tidigare upgrades som köpts, för varje: värde * antal.

    //Hämtar aktuellt pris och värde för klickat element.
    var values = getPriceAndValue(tag);

    //Räknar av priset från antal sushis.
    sushis = sushis - values[0];

    //Uppdatera antal sushis i applikationen.
    document.getElementById("sushis").innerHTML = sushis;

    //Räknar värdet för aktuellt köp + alla tidigare köps värden.
    var calculatedValue = (values[1] * 1) + values[3];

    console.log(tag.id +" "+ values[1]);
    console.log('Calculated value ' + calculatedValue);

    //Uppdatera priset för den köpta upgrade'n.
    updatePrice(tag);

    //Anropas för att se om någon upgrade ska låsas efter köpet.
    unlockUpgrades(sushis);

    //Nollställer intervallen.
    clearInterval(interval);

    //Startar om intervallen med 1 sek / användarens totala köps värden. Den kommer räkna snabbare ju fler köp som görs.
    interval = window.setInterval(function () {

        sushiClicker(1);
    }, 1000/calculatedValue);

}

function unlockUpgrades(sushis){

        //Går igenom pris för varje upgrade och ser ifall antal sushis räcker för att låsa upp någon.
        //Lägger till eller tar bort attribut från elementet.
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



//Returnerar värde, pris och totalt värde för tidigare köp.
function getPriceAndValue(tag){

    //Denna funktion returnerar värde, pris samt totalt värde av tidigare köp.
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

    //Anropar funktion som räknar ut tidigare köps värden.
    values[3] = previouslyBought();

    return values;
}

//Räknar ut tidigare köp
function previouslyBought(){

    //Här adderas alla tidigare köp till previouslyBought som sedan returneras till getPriceAndValue().

    var previouslyBought;

    previouslyBought = parseInt(document.getElementById('ricebought').innerHTML) * ricevalue;
    previouslyBought = previouslyBought + parseInt(document.getElementById('octopusinfo').innerHTML) * octopusvalue;
    previouslyBought = previouslyBought + parseInt(document.getElementById('sashimiinfo').innerHTML) * sashimivalue;
    previouslyBought = previouslyBought + parseInt(document.getElementById('sushiinfo').innerHTML) * sushivalue;
    previouslyBought = previouslyBought + parseInt(document.getElementById('souschefinfo').innerHTML) * souschefvalue;

    return  previouslyBought
}

//Uppdaterar pris, räknar upp köp samt skriver ut det nya priset i knappen.
function updatePrice(tag){

    //Här uppdateras priset efter varje köp för den köpta upgrade'en, antal köpta räknas upp med 1 samt att det nya priset
    //skrivs ut på knappen.

    if (tag.id == 'rice') {
        //pris räknas upp med 1.
        riceprice = riceprice +1;

        //antal köpta räknas upp med 1.
        document.getElementById('ricebought').innerHTML = parseInt(document.getElementById('ricebought').innerHTML) + 1;

        //texten på knappen uppdateras.
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
