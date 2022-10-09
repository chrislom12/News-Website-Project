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

var todayDate = new Date();
var date = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
var urlBase = "https://api.thenewsapi.com/v1/news/all?api_token=FCtYbbZgDTV2cFFzGX3T9z9a7SHZluZRmSlOBFML&language=en&published=" + date;
httpGet(urlBase, (data) => {
   /*  data = {
        "meta": {
            "found": 16624433,
            "returned": 5,
            "limit": 5,
            "page": 1
        },
        "data": [
            {
                "uuid": "9cb2c187-6405-4b93-aa4f-eba9db5aea44",
                "title": "Hawaii hotels are offering updated wellness programs: Travel Weekly",
                "description": "Following two years of living with the stress and restrictions of Covid-19, travelers are gravitating toward wellness experiences in 2022.",
                "keywords": "",
                "snippet": "Following two years of living with the stress and restrictions of Covid-19, travelers are gravitating toward wellness experiences in 2022, and the Aloha State i...",
                "url": "https://www.travelweekly.com/Hawaii-Travel/Updated-wellness-offerings-at-Hawaii-resorts",
                "image_url": "https://ik.imgkit.net/3vlqs5axxjf/TW/uploadedImages/Art/2022/0404/T0404SENSEILANAI_C_HR.jpg?tr=w-1540%2Ch-866%2Cfo-auto",
                "language": "en",
                "published_at": "2022-04-03T15:00:00.000000Z",
                "source": "travelweekly.com",
                "categories": [
                    "travel"
                ],
                "relevance_score": null
            },
            {
                "uuid": "c88e3376-542d-4378-b859-7d2fb40fb49f",
                "title": "How some Lytton, B.C., residents are rebuilding fire-resilient homes after village destroyed",
                "description": "Nearly nine months after the devastating fire, a Lytton. B.C.. couple are rebuilding their house and other structures on their property — but this time they...",
                "keywords": "",
                "snippet": "Tricia Thorpe remembers the day her hometown of Lytton, B.C., went up in flames 'like a blow torch.'\n\nAfter days of record-breaking heat late June 2021, she say...",
                "url": "https://www.cbc.ca/news/canada/british-columbia/rebuild-lytton-fireproof-1.6404486?cmp=rss",
                "image_url": "https://i.cbc.ca/1.6373015.1646414151!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/aerial-view-of-wildfire-damage-in-lytton-b-c.jpg",
                "language": "en",
                "published_at": "2022-04-03T15:00:00.000000Z",
                "source": "cbc.ca",
                "categories": [
                    "general"
                ],
                "relevance_score": null
            },
            {
                "uuid": "c2124a4a-8f78-4eaa-ac3e-1687c22ae18c",
                "title": "Opinion : Biden’s economy is extraordinary. But inflation is still the Achilles’ heel of Democrats.",
                "description": "If it weren't for inflation, this president's economic performance would be unmatched.",
                "keywords": "",
                "snippet": "In a remarkably short period of time — far sooner than virtually all respected prognosticators expected — the United States has recaptured nearly all (93 pe...",
                "url": "https://www.washingtonpost.com/opinions/2022/04/03/biden-economy-extraordinary-but-wont-save-democrats-inflation/",
                "image_url": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JNBBIRFRZ4I6ZHN5BVDATVCMDQ.jpg&w=1440",
                "language": "en",
                "published_at": "2022-04-03T15:00:00.000000Z",
                "source": "washingtonpost.com",
                "categories": [
                    "politics"
                ],
                "relevance_score": null
            },
            {
                "uuid": "0a84d01b-256d-4ee0-8e2c-e3e1b67f9d32",
                "title": "Three of their four children will go blind. So this Canadian couple has taken them on a yearlong trip to give them sights to last a lifetime",
                "description": "A week and a half ago, Edith Lemay, Sebastien Pelletier took their four children on what they hope will be a yearlong trip full of adventure and beautiful sight...",
                "keywords": "Montreal, Quebec, disabilities, blindness, families, vision, children's health, Health, Travel, EM1, NICRT2, smg_canada, smg2_news, InHouseArticle_thestar, algolock",
                "snippet": "A campsite nestled amongst the granite desert peaks of Western Namibia. Sunlight splashing against the fiery rocks. The glassy surface of nearby pool.\n\nEdith Le...",
                "url": "https://www.thestar.com/news/canada/2022/04/03/three-of-their-four-children-will-go-blind-so-this-canadian-couple-has-taken-them-on-a-yearlong-trip-to-give-them-sights-to-last-a-lifetime.html",
                "image_url": "https://images.thestar.com/oc1NEjeCrJ7TXbzFw_HeGSCOrDU=/1200x1145/smart/filters:cb(1648840180355)/https://www.thestar.com/content/dam/thestar/news/canada/2022/04/03/three-of-their-four-children-will-go-blind-so-this-canadian-couple-has-taken-them-on-a-yearlong-trip-to-give-them-sights-to-last-a-lifetime/_pelican.jpg",
                "language": "en",
                "published_at": "2022-04-03T15:00:00.000000Z",
                "source": "thestar.com",
                "categories": [
                    "general"
                ],
                "relevance_score": null
            },
            {
                "uuid": "7f9a4b39-b520-49ce-8da2-6f411ab091e0",
                "title": "Peterborough library started a CO2 monitor lending program and Toronto may soon follow",
                "description": "The hand-held devices can help measure ventilation to assess the risks of catching COVID.",
                "keywords": "CO2, covid, coronavirus, omicron, ba.2, CO2 monitor, Peterborough, Toronto, Piggott, Toronto Public Health, Toronto public library, libraries, NICRT1, KMI2, Arc cov science, smg_gta, smg2_news, InHouseArticle_thestar, algolock",
                "snippet": "Starting Friday, residents of Peterborough, Ont., will be able to pop into their local library and rent a device that can help them gauge their risk of catching...",
                "url": "https://www.thestar.com/news/gta/2022/04/03/peterborough-started-a-co2-monitor-lending-program-and-toronto-may-soon-follow.html",
                "image_url": "https://images.thestar.com/X6hwXFfHH31qwrUOfVKhO-jyF7s=/1086x576/smart/filters:cb(1648852122339)/https://www.thestar.com/content/dam/thestar/news/gta/2022/04/03/peterborough-started-a-co2-monitor-lending-program-and-toronto-may-soon-follow/c02_monitor_ptbo_library.jpg",
                "language": "en",
                "published_at": "2022-04-03T15:00:00.000000Z",
                "source": "thestar.com",
                "categories": [
                    "general"
                ],
                "relevance_score": null
            }
        ]
    } */
    for (let i = 1; i < 6; i++) {

        console.log(data.data[i - 1].image_url);
        var urlStr = data.data[i - 1].image_url;

        const waitLoad = setTimeout(function () {
            addLoad(data, data.data[i - 1].image_url, i);
        }, 3000);


        /* console.log("done")
         if (checkImage(urlStr)) {
            document.getElementById("newsDiv" + i).style.backgroundImage = "url(" + urlStr + ")";
        }
        else {
            var urlSplit = urlStr.split('https://');
            if (urlSplit.length > 1) {
                document.getElementById("newsDiv" + i).style.backgroundImage = "url(https://" + urlSplit[urlSplit.length - 1] + ")";
            }
            else {
                document.getElementById("newsDiv" + i).style.backgroundImage = "url(https://" + urlSplit[0] + ")";
            }
        }  */




        //document.getElementById("newsDiv" + i).style.backgroundImage = "url(" + data.data[i-1].image_url + ")";

    }

    /* document.getElementById("newsDiv1").style.backgroundImage = "url(" + data.data[i].image_url + ")";
    document.getElementById("newsHead1").innerHTML = data.data[i].title;
    document.getElementById("newsPar1").innerHTML = data.data[i].snippet;
    if (data.data[i].keywords != "") {
        var keys = JSON.parse(data.data[i].keywords);
        document.getElementById("li1.1").innerHTML = document.getElementById("li1.1").innerHTML + " " + keys[0] + ", " + keys[1] + ", " + keys[2];
    }
    else {
        document.getElementById("li1.1").innerHTML = document.getElementById("li1.1").innerHTML + " " + data.data[i].categories;
    }
    document.getElementById("li1.2").innerHTML = document.getElementById("li1.2").innerHTML + " " + data.data[i].published_at.substring(0, 10);
    document.getElementById("li1.3").innerHTML = document.getElementById("li1.3").innerHTML + " " + data.data[i].source;
    document.getElementById("li1.4").innerHTML = document.getElementById("li1.4").innerHTML + " " + data.data[i].categories;
 */
});

function addLoad(data, url, i) {
    console.log("newsDiv" + i);
    document.getElementById("newsDiv" + i).style.backgroundImage = "url(" + url + ")";
    document.getElementById("newsDiv" + i).innerHTML="<h1 id= 'newsHead" + i + "' class='newsHead'></h1><p id= 'newsPar" + i + "' class='newsPar'><br><br><a href='' id = 'link" + i + "' class = 'links' target='_blank'>Read</a></p><div class='tagBar'><ul class='ulbar'><li id = 'li" + i + ".1' class=item><i class='fa-solid fa-tags'></i></li><li id = 'li" + i + ".2' class=item><i class='fa-solid fa-calendar-days'></i></li><li id = 'li" + i + ".3' class=item><i class='fa-solid fa-feather'></i></li><li id = 'li" + i + ".4' class=item><i class='fa-solid fa-hashtag'></i></li></ul></div>";
    document.getElementById("newsDiv" + i).style.backgroundSize = "cover";
    document.getElementById("newsHead" + i).innerHTML = data.data[i - 1].title;
    document.getElementById("newsPar" + i).innerHTML = data.data[i - 1].snippet + document.getElementById("newsPar" + i).innerHTML;
    document.getElementById("link" + i).href = data.data[i - 1].url;


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
    document.getElementById("li" + i + ".4").innerHTML = document.getElementById("li" + i + ".4").innerHTML + " " + data.data[i - 1].categories;
}

/* function addLoadSearch(term, data, url, i) {
    console.log("newsDiv" + i);
    if(!data.data[i-1].title.contains(term))
    {
        document.getElementById("newsDiv" + i).style.display = "none";
    }
    else{
        document.getElementById("newsDiv" + i).style.backgroundImage = "url(" + url + ")";
        document.getElementById("newsDiv" + i).innerHTML="<h1 id= 'newsHead" + i + "' class='newsHead'></h1><p id= 'newsPar" + i + "' class='newsPar'><br><br><a href='' id = 'link" + i + "' class = 'links' target='_blank'>Read</a></p><div class='tagBar'><ul class='ulbar'><li id = 'li" + i + ".1' class=item><i class='fa-solid fa-tags'></i></li><li id = 'li" + i + ".2' class=item><i class='fa-solid fa-calendar-days'></i></li><li id = 'li" + i + ".3' class=item><i class='fa-solid fa-feather'></i></li><li id = 'li" + i + ".4' class=item><i class='fa-solid fa-hashtag'></i></li></ul></div>";
        document.getElementById("newsDiv" + i).style.backgroundSize = "cover";
        document.getElementById("newsHead" + i).innerHTML = data.data[i - 1].title;
        document.getElementById("newsPar" + i).innerHTML = data.data[i - 1].snippet + document.getElementById("newsPar" + i).innerHTML;
        document.getElementById("link" + i).href = data.data[i - 1].url;


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
        document.getElementById("li" + i + ".4").innerHTML = document.getElementById("li" + i + ".4").innerHTML + " " + data.data[i - 1].categories;
    }
    
} */


function search() {
    console.log("searched");
    let input = document.getElementById('searchTxt').value;
    input=input.toLowerCase();
    urlBaseNew = urlBase + "&search="+input;
    httpGet(input, urlBaseNew, (data) => {
         /* data = {
            "meta": {
                "found": 16624433,
                "returned": 5,
                "limit": 5,
                "page": 1
            },
            "data": [
                {
                    "uuid": "9cb2c187-6405-4b93-aa4f-eba9db5aea44",
                    "title": "Hawaii hotels are offering updated wellness programs: Travel Weekly",
                    "description": "Following two years of living with the stress and restrictions of Covid-19, travelers are gravitating toward wellness experiences in 2022.",
                    "keywords": "",
                    "snippet": "Following two years of living with the stress and restrictions of Covid-19, travelers are gravitating toward wellness experiences in 2022, and the Aloha State i...",
                    "url": "https://www.travelweekly.com/Hawaii-Travel/Updated-wellness-offerings-at-Hawaii-resorts",
                    "image_url": "https://ik.imgkit.net/3vlqs5axxjf/TW/uploadedImages/Art/2022/0404/T0404SENSEILANAI_C_HR.jpg?tr=w-1540%2Ch-866%2Cfo-auto",
                    "language": "en",
                    "published_at": "2022-04-03T15:00:00.000000Z",
                    "source": "travelweekly.com",
                    "categories": [
                        "travel"
                    ],
                    "relevance_score": null
                },
                {
                    "uuid": "c88e3376-542d-4378-b859-7d2fb40fb49f",
                    "title": "How some Lytton, B.C., residents are rebuilding fire-resilient homes after village destroyed",
                    "description": "Nearly nine months after the devastating fire, a Lytton. B.C.. couple are rebuilding their house and other structures on their property — but this time they...",
                    "keywords": "",
                    "snippet": "Tricia Thorpe remembers the day her hometown of Lytton, B.C., went up in flames 'like a blow torch.'\n\nAfter days of record-breaking heat late June 2021, she say...",
                    "url": "https://www.cbc.ca/news/canada/british-columbia/rebuild-lytton-fireproof-1.6404486?cmp=rss",
                    "image_url": "https://i.cbc.ca/1.6373015.1646414151!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/aerial-view-of-wildfire-damage-in-lytton-b-c.jpg",
                    "language": "en",
                    "published_at": "2022-04-03T15:00:00.000000Z",
                    "source": "cbc.ca",
                    "categories": [
                        "general"
                    ],
                    "relevance_score": null
                },
                {
                    "uuid": "c2124a4a-8f78-4eaa-ac3e-1687c22ae18c",
                    "title": "Opinion : Biden’s economy is extraordinary. But inflation is still the Achilles’ heel of Democrats.",
                    "description": "If it weren't for inflation, this president's economic performance would be unmatched.",
                    "keywords": "",
                    "snippet": "In a remarkably short period of time — far sooner than virtually all respected prognosticators expected — the United States has recaptured nearly all (93 pe...",
                    "url": "https://www.washingtonpost.com/opinions/2022/04/03/biden-economy-extraordinary-but-wont-save-democrats-inflation/",
                    "image_url": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JNBBIRFRZ4I6ZHN5BVDATVCMDQ.jpg&w=1440",
                    "language": "en",
                    "published_at": "2022-04-03T15:00:00.000000Z",
                    "source": "washingtonpost.com",
                    "categories": [
                        "politics"
                    ],
                    "relevance_score": null
                },
                {
                    "uuid": "0a84d01b-256d-4ee0-8e2c-e3e1b67f9d32",
                    "title": "Three of their four children will go blind. So this Canadian couple has taken them on a yearlong trip to give them sights to last a lifetime",
                    "description": "A week and a half ago, Edith Lemay, Sebastien Pelletier took their four children on what they hope will be a yearlong trip full of adventure and beautiful sight...",
                    "keywords": "Montreal, Quebec, disabilities, blindness, families, vision, children's health, Health, Travel, EM1, NICRT2, smg_canada, smg2_news, InHouseArticle_thestar, algolock",
                    "snippet": "A campsite nestled amongst the granite desert peaks of Western Namibia. Sunlight splashing against the fiery rocks. The glassy surface of nearby pool.\n\nEdith Le...",
                    "url": "https://www.thestar.com/news/canada/2022/04/03/three-of-their-four-children-will-go-blind-so-this-canadian-couple-has-taken-them-on-a-yearlong-trip-to-give-them-sights-to-last-a-lifetime.html",
                    "image_url": "https://images.thestar.com/oc1NEjeCrJ7TXbzFw_HeGSCOrDU=/1200x1145/smart/filters:cb(1648840180355)/https://www.thestar.com/content/dam/thestar/news/canada/2022/04/03/three-of-their-four-children-will-go-blind-so-this-canadian-couple-has-taken-them-on-a-yearlong-trip-to-give-them-sights-to-last-a-lifetime/_pelican.jpg",
                    "language": "en",
                    "published_at": "2022-04-03T15:00:00.000000Z",
                    "source": "thestar.com",
                    "categories": [
                        "general"
                    ],
                    "relevance_score": null
                },
                {
                    "uuid": "7f9a4b39-b520-49ce-8da2-6f411ab091e0",
                    "title": "Peterborough library started a CO2 monitor lending program and Toronto may soon follow",
                    "description": "The hand-held devices can help measure ventilation to assess the risks of catching COVID.",
                    "keywords": "CO2, covid, coronavirus, omicron, ba.2, CO2 monitor, Peterborough, Toronto, Piggott, Toronto Public Health, Toronto public library, libraries, NICRT1, KMI2, Arc cov science, smg_gta, smg2_news, InHouseArticle_thestar, algolock",
                    "snippet": "Starting Friday, residents of Peterborough, Ont., will be able to pop into their local library and rent a device that can help them gauge their risk of catching...",
                    "url": "https://www.thestar.com/news/gta/2022/04/03/peterborough-started-a-co2-monitor-lending-program-and-toronto-may-soon-follow.html",
                    "image_url": "https://images.thestar.com/X6hwXFfHH31qwrUOfVKhO-jyF7s=/1086x576/smart/filters:cb(1648852122339)/https://www.thestar.com/content/dam/thestar/news/gta/2022/04/03/peterborough-started-a-co2-monitor-lending-program-and-toronto-may-soon-follow/c02_monitor_ptbo_library.jpg",
                    "language": "en",
                    "published_at": "2022-04-03T15:00:00.000000Z",
                    "source": "thestar.com",
                    "categories": [
                        "general"
                    ],
                    "relevance_score": null
                }
            ]
        } */
        for (let i = 1; i < 6; i++) {
    
            console.log(data.data[i - 1].image_url);
            var urlStr = data.data[i - 1].image_url;
    
            const waitLoad = setTimeout(function () {
                addLoad(data, data.data[i - 1].image_url, i);
            }, 3000);
    
        }
    
     
    }); 
    
} 

