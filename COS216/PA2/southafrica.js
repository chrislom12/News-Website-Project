//let loader = `<div class="loading" style="background-attachment: fixed; background-image: url("img/loading.gif");background-repeat: no-repeat;background-position: center center;"></div>`;
//document.getElementById("newsDiv1").innerHTML = loader;

function httpGet(url, callback) {
    /* setTimeout(() => {
        callback("empty string");
    }, 201); */
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send();
}

var urlBase = "https://api.thenewsapi.com/v1/news/top?api_token=FCtYbbZgDTV2cFFzGX3T9z9a7SHZluZRmSlOBFML&language=en&locale=za";
httpGet(urlBase, (data) => {
     /* data = {
    "meta": {
        "found": 112777,
        "returned": 5,
        "limit": 5,
        "page": 1
    },
    "data": [
        {
            "uuid": "5851b2f7-be0c-405c-8c8c-0c3aa716d2c2",
            "title": "Today’s Love Horoscope for 04 April 2022",
            "description": "Wondering what romance has in store for your star sign? Here's a quick glance at your love horoscope for today - completely free!",
            "keywords": "",
            "snippet": "Are you ready to plan your day for the infinite possibilities that could be coming your way? Make sure to prepare accordingly by viewing the daily love horoscop...",
            "url": "https://www.thesouthafrican.com/lifestyle/horoscopes/grab-your-todays-love-horoscope-for-04-april-2022/",
            "image_url": "https://www.thesouthafrican.com/wp-content/uploads/2021/02/Daily-Love-Horoscope.jpg",
            "language": "en",
            "published_at": "2022-04-03T23:00:00.000000Z",
            "source": "thesouthafrican.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "za"
        },
        {
            "uuid": "196124c7-ceb1-4415-93a2-a4eaaac55ccd",
            "title": "Regional weather forecast (temperature and uvb index) 04 April 2022",
            "description": "Here's a quick glance at what the weather forecast holds in store across all the South African provinces. Stay warm or keep cool.",
            "keywords": "",
            "snippet": "Weather forecast data provided by the South African Weather Service. For a detailed forecast of your province, click here.\n\nSevere Weather Alerts\n\nIMPACT-BASED ...",
            "url": "https://www.thesouthafrican.com/news/weather/today-regional-weather-forecast-temperature-and-uvb-index-04-april-2022/",
            "image_url": "https://www.thesouthafrican.com/wp-content/uploads/2018/08/cloud-346710_1280.png",
            "language": "en",
            "published_at": "2022-04-03T23:00:00.000000Z",
            "source": "thesouthafrican.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "za"
        },
        {
            "uuid": "b4922a58-4deb-4aed-be25-86cbc141baa6",
            "title": "Horoscopes for 04 April 2022 – Monnday",
            "description": "Wondering what the day has in store for your star sign? Here's a quick glance at your daily horoscopes for 04 April 2022 - completely free!",
            "keywords": "",
            "snippet": "Are you prepared for the day? Do you know what to look out for? See your daily Horoscopes for 04 April 2022 below to know exactly what the stars have planned fo...",
            "url": "https://www.thesouthafrican.com/lifestyle/horoscopes/get-your-horoscopes-for-04-april-2022-monnday/",
            "image_url": "https://www.thesouthafrican.com/wp-content/uploads/2018/03/weekly-horoscope-min.jpg",
            "language": "en",
            "published_at": "2022-04-03T23:00:00.000000Z",
            "source": "thesouthafrican.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "za"
        },
        {
            "uuid": "521fb81e-0fcc-4afa-8eab-8faf0cca49c4",
            "title": "On This Day: What happened on 04 April?",
            "description": "We look back on this day in history and remember the people and events that shaped the world we live in today.",
            "keywords": "",
            "snippet": "In 1988, Arizona Governor Evan Mecham was found guilty in his impeachment trial and removed from office. Image: Wikimedia Commons\n\nHere’s a look at what happe...",
            "url": "https://www.thesouthafrican.com/news/on-this-day-in-history-what-happened-on-04-april/",
            "image_url": "https://www.thesouthafrican.com/wp-content/uploads/2022/04/Evan-Mecham.jpg",
            "language": "en",
            "published_at": "2022-04-03T23:00:00.000000Z",
            "source": "thesouthafrican.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "za"
        },
        {
            "uuid": "a8d54743-4e35-413f-9f40-5c54451d395b",
            "title": "Al Ahly join Mamelodi Sundowns in CAF Champions League Last 8!",
            "description": "Al Ahly have joined Mamelodi Sundowns in the CAF Champions League quarter-finals following a hard-fought 1-0 win over Al Hilal on Sunday.",
            "keywords": "",
            "snippet": "Al Ahly have joined Mamelodi Sundowns in the CAF Champions League quarter-finals following a hard-fought 1-0 win over Al Hilal on Sunday.\n\nREAD | EX-MAN UNITED ...",
            "url": "https://www.thesouthafrican.com/sport/soccer/caf-champions-league/al-ahly-mamelodi-sundowns-caf-champions-league-quarterfinals-al-hilal-pitso-mosimane-percy-tau-breaking/",
            "image_url": "http://www.thesouthafrican.com/wp-content/uploads/2022/04/FPcpY2OXwAwGDI_.jpeg",
            "language": "en",
            "published_at": "2022-04-03T21:59:09.000000Z",
            "source": "thesouthafrican.com",
            "categories": [
                "general"
            ],
            "relevance_score": null,
            "locale": "za"
        }
    ]
} */
    console.log(data);
    for (let i = 1; i < 6; i++) {

        console.log(data.data[i - 1].image_url);
        var urlStr = data.data[i - 1].image_url;

        const waitLoad = setTimeout(function () {
            addLoad(data, data.data[i - 1].image_url, i);
        }, 3000);




    }

});

function addLoad(data, url, i) {
    console.log("newsDiv" + i);
    document.getElementById("newsDiv" + i).style.backgroundImage = "none";

    document.getElementById("newsDiv" + i).innerHTML = "<div class='newsBlock'><h1 id= 'newsHead" + i +"' class=newsHead></h1><div class='tagBar'><ul class='ulbar'><li id = 'li" + i +".1' class=item><i class='fa-solid fa-tags'></i></li><li id = 'li" + i +".2' class=item><i class='fa-solid fa-calendar-days'></i></li><li id = 'li" + i +".3' class=item><i class='fa-solid fa-feather'></i> <a id = 'link"+i +".3'href=''target='_blank'></a></li><li id = 'li" + i +".4' class=item><i class='fa-solid fa-location-dot'></i> <a id='link"+i +".4' href=''target='_blank'></a></li></ul></div><div title=', Rating: 4/5' class='newsImg' id= 'newsImg" + i +"'></div><br><hr><p id= 'newsPar" + i +"' class=articleBody></p><p class=articleBody> <br><br><a href='' id = 'link" + i +"'target='_blank'>Link To Article</a></p></div>";
    document.getElementById("newsImg" + i).style.backgroundImage = "url(" + data.data[i-1].image_url + ")";
    document.getElementById("newsImg" + i).style.backgroundSize = "cover";
    document.getElementById("newsHead" + i).innerHTML = data.data[i - 1].title;
    document.getElementById("newsPar" + i).innerHTML = data.data[i - 1].snippet + document.getElementById("newsPar" + i).innerHTML;
    document.getElementById("link" + i).href = data.data[i - 1].url;
    document.getElementById("newsImg" + i).title = data.data[i-1].title + document.getElementById("newsImg"+i).title;
   


    if (data.data[i - 1].keywords != "") {
        console.log("what");
        var keys = data.data[i - 1].keywords.split(', ');
        document.getElementById("li" + i + ".1").innerHTML = document.getElementById("li" + i + ".1").innerHTML + " " + keys[0] + ", " + keys[1] + ", " + keys[2];
    }
    else {
        document.getElementById("li" + i + ".1").innerHTML = document.getElementById("li" + i + ".1").innerHTML + " " + data.data[i - 1].categories;
    }
    document.getElementById("li" + i + ".2").innerHTML = document.getElementById("li" + i + ".2").innerHTML + " " + data.data[i - 1].published_at.substring(0, 10);
    document.getElementById("li" + i + ".3").innerHTML = document.getElementById("li" + i + ".3").innerHTML + " " + data.data[i - 1].source;
    document.getElementById("link" + i + ".3").href = "https://www." + data.data[i - 1].source;
   
    document.getElementById("li" + i + ".4").innerHTML = document.getElementById("li" + i + ".4").innerHTML + " " + data.data[i - 1].locale;
    document.getElementById("link" + i + ".4").href = "https://goo.gl/maps/zNpUXQEywSQkqN1PA";
}

