
function httpGet(url, callback) {
    /*      setTimeout(() => {
            callback("empty string");
        }, 201);  */
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send();
}

var urlBase = "https://disease.sh/v3/covid-19/all";
httpGet(urlBase, (data) => {
    /* data = {
        "updated": 1649037436475,
        "cases": 491746291,
        "todayCases": 181566,
        "deaths": 6176144,
        "todayDeaths": 333,
        "recovered": 426533692,
        "todayRecovered": 68139,
        "active": 59036455,
        "critical": 55675,
        "casesPerOneMillion": 63086,
        "deathsPerOneMillion": 792.3,
        "tests": 6100958942,
        "testsPerOneMillion": 773107.88,
        "population": 7891471673,
        "oneCasePerPeople": 0,
        "oneDeathPerPeople": 0,
        "oneTestPerPeople": 0,
        "activePerOneMillion": 7481.05,
        "recoveredPerOneMillion": 54049.96,
        "criticalPerOneMillion": 7.06,
        "affectedCountries": 227
    } */

    console.log(data);
    document.getElementById("1").innerHTML = data.cases;
    document.getElementById("2").innerHTML = data.recovered;
    document.getElementById("3").innerHTML = data.deaths;
    document.getElementById("4").innerHTML = Math.round(data.todayDeaths / (data.cases - data.recovered) * 10000000) / 10000000 + " %";
    document.getElementById("5").innerHTML = Math.round(data.deaths / data.cases * 1000) / 1000 + " %";
    document.getElementById("6").innerHTML = Math.round(data.deaths / data.population * 1000) / 1000 + " %";
    document.getElementById("7").innerHTML = Math.round(data.cases / data.deaths * 100) / 100 + " : " + Math.round(data.recovered / data.deaths * 100) / 100 + " : " + data.deaths / data.deaths;
    document.getElementById("11").innerHTML = data.todayCases;
    document.getElementById("12").innerHTML = data.todayRecovered;
    document.getElementById("13").innerHTML = data.todayDeaths;
});

var urlBase = "https://disease.sh/v3/covid-19/countries/South%20Africa?yesterday=South%20Africa&twoDaysAgo=South%20Africa&strict=South%20Africa&allowNull=South%20Africa";
httpGet(urlBase, (data) => {
    /* data = {
        "updated": 1649039837272,
        "country": "South Africa",
        "countryInfo": {
            "_id": 710,
            "iso2": "ZA",
            "iso3": "ZAF",
            "lat": -29,
            "long": 24,
            "flag": "https://disease.sh/assets/img/flags/za.png"
        },
        "cases": 3722954,
        "todayCases": 0,
        "deaths": 100050,
        "todayDeaths": 0,
        "recovered": 3611123,
        "todayRecovered": 0,
        "active": 11781,
        "critical": 546,
        "casesPerOneMillion": 61417,
        "deathsPerOneMillion": 1651,
        "tests": 23909698,
        "testsPerOneMillion": 394435,
        "population": 60617532,
        "continent": "Africa",
        "oneCasePerPeople": 16,
        "oneDeathPerPeople": 606,
        "oneTestPerPeople": 3,
        "activePerOneMillion": 194.35,
        "recoveredPerOneMillion": 59572.25,
        "criticalPerOneMillion": 9.01
    } */

    console.log(data);
    document.getElementById("8").innerHTML = data.cases;
    document.getElementById("9").innerHTML = data.recovered;
    document.getElementById("10").innerHTML = data.deaths;

});

var urlBase = "https://disease.sh/v3/covid-19/countries";
httpGet(urlBase, (data) => {
    /* data = {
        "updated": 1649039837272,
        "country": "South Africa",
        "countryInfo": {
            "_id": 710,
            "iso2": "ZA",
            "iso3": "ZAF",
            "lat": -29,
            "long": 24,
            "flag": "https://disease.sh/assets/img/flags/za.png"
        },
        "cases": 3722954,
        "todayCases": 0,
        "deaths": 100050,
        "todayDeaths": 0,
        "recovered": 3611123,
        "todayRecovered": 0,
        "active": 11781,
        "critical": 546,
        "casesPerOneMillion": 61417,
        "deathsPerOneMillion": 1651,
        "tests": 23909698,
        "testsPerOneMillion": 394435,
        "population": 60617532,
        "continent": "Africa",
        "oneCasePerPeople": 16,
        "oneDeathPerPeople": 606,
        "oneTestPerPeople": 3,
        "activePerOneMillion": 194.35,
        "recoveredPerOneMillion": 59572.25,
        "criticalPerOneMillion": 9.01
    } */

    console.log(data);
    var xValues = [data[0].country, data[6].country, data[123].country, data[200].country, data[20].country];
    var yValues = [data[0].deaths, data[6].deaths, data[123].deaths, data[200].deaths, data[20].deaths];
    var barColors = ["green", "red", "yellow", "brown", "purple"];
    new Chart("graph", {
        type: "bar",
        data: {labels: xValues,datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        }, options: {legend: { display: false },title: {
                display: true,
                text: "COVID-19 DEATHS IN DIFFERENT COUNTRIES"
            }
        }
    });
});

