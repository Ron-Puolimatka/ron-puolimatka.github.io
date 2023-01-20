function menu_browser_onclick_event(color_switch = true) {
    
    var menu = document.getElementById("menu_browser");
    var header_container = document.getElementById("header_container");
    var title = document.getElementById("title");
    var menu_icon = document.getElementById("menu_icon");
    var logo = document.getElementsByClassName("cr_flag_img");

    if (menu.style.display == "none") {

        menu.style.display = "block";
        if (color_switch) {
            header_container.style.background = "black";
            title.style.color = "white";
            menu_icon.style.color = "white";
            logo[0].style.filter = "saturate(0) invert(1)";
        }
        menu_icon.innerHTML = "⨉";
        menu_icon.classList.remove("menu_icon_hover");
        menu_icon.classList.add("menu_icon_active");
    }

    else {

        menu.style.display = "none";
        if (color_switch) {
            header_container.style.background = "white";
            title.style.color = "black";
            menu_icon.style.color = "black";
            logo[0].style.filter = "invert(0)";
        }
        menu_icon.innerHTML = "☰";
        menu_icon.classList.add("menu_icon_hover");
        menu_icon.classList.remove("menu_icon_active");
    }
}


function resize_website_array() {

    var divisions = 1;
    if (window.innerWidth > 750) {

        divisions = 3
    }
    else if (window.innerWidth > 550) {

        divisions = 2;
    }
    else {

        divisions = 1;
    }

    document.documentElement.style.setProperty("--website-array-divisions", divisions.toString()); 
}


function resplit_website_info() {

    var split = "flex";
    if (window.innerWidth > 500) {

        split = "flex";
    }
    else {

        split = "block";
    }

    document.documentElement.style.setProperty("--website-info-split", split); 
}


function website_info_open(element) {

    var data = {
        1 : ["Google.com on verkkohakukone ja verkkopalvelujen tarjoaja, jonka tarkoituksena on auttaa ihmisiä löytämään tietoa Internetistä. Google on perustettu vuonna 1998 ja se on tällä hetkellä maailman käytetyin hakukone. Google tarjoaa myös muita palveluita kuten Gmail, Google Drive, Google Maps, Google Calendar, Google Translate ja monet muut. Google on myös kehittänyt käyttäjäystävällisiä sovelluksia kuten Google Chrome, Google Docs ja Google Sheets. Google tarjoaa myös mainostilaa yrityksille ja tarjoaa erilaisia ​​mainostyökaluja.", 
        ["Noin 1.42 mrd.", "Noin 92.86 mrd."], "Google"],

        2 : ["Youtube on Googlen verkkosivusto, jolla käyttäjät voivat lataa, katsella ja jakaa videoita. Sivusto on ollut käytössä vuodesta 2005 ja on tällä hetkellä maailman suurin videopalvelu. Sivustolla on miljoonia videoita, joista monet ovat musiikkivideoita, elokuvia, TV-sarjoja, dokumentteja, uutisia, opetusvideoita ja henkilökohtaisia videoita. Käyttäjät voivat myös luoda omia kanavia, joilla he voivat jakaa videoitaan muiden käyttäjien kanssa.", 
        ["Noin 924.17 milj.", "Noin 76.55 mrd."], "YouTube"],

        3 : ["Lectormo on verkkosivusto, joka tarjoaa ilmaisia sarjakuvia. Sivusto on erikoistunut anime ja manga-sarjakuviin.", 
        ["Noin 421.97 milj.", "Noin 3.3 mrd."], "Lectortmo"],

        4 : ["XVideos on verkkosivusto, joka tarjoaa ilmaisia aikuisviihde videoita. Sivusto on perustettu vuonna 2007 ja se on yksi suosituimmista ilmaisista aikuisviihdesivustoista maailmassa.", 
        ["Noin 307.14 milj.", "Ei saatavilla"], "XVideos"],

        5 : ["AnimeFLV on verkkosivusto, joka tarjoaa ilmaista sarjojen suoratoistoa. Sivusto on erikoistunut tarjoamaan anime-sarjoja ja -elokuvia eri kategorioista. Sivusto on saatavilla useilla kielillä ja se on ilmainen käyttää, mutta käyttäjät voivat katsoa mainoksia.", 
        ["Noin 294.72 milj.", "Noin 1.37 mrd."], "AnimeFLV"],

        6 : ["Pornhub on verkkosivusto, joka tarjoaa ilmaisia aikuisviihde videoita. Sivusto on perustettu vuonna 2007 ja se on suosituin ilmainen aikuisviihdesivusto maailmassa.", 
        ["Noin 268.02 milj.", "Ei saatavilla"], "PornHub"],

        7 : ["Facebook on verkkososiaalinen media, joka mahdollistaa käyttäjien jakaa kuvia, videoita, päivityksiä ja viestejä ystävien ja perheenjäsenten kanssa. Sivusto on perustettu vuonna 2004 ja se on tällä hetkellä yksi suosituimmista sosiaalisista verkostoista maailmassa. Facebook tarjoaa käyttäjille mahdollisuuden luoda profiileja, lisätä ystäviä, liittyä erilaisiin ryhmiin ja sivuihin, sekä jakaa sisältöään. Sivusto tarjoaa myös erilaisia ​​työkaluja kuten Messenger, jolla käyttäjät voivat viestiä ystävien kanssa ja Facebook Marketplace, jonka avulla käyttäjät voivat myydä ja ostaa tavaroita.", 
        ["Noin 192.89 milj.", "Noin 10.93 mrd."], "Facebook"],

        8 : ["XNXX on verkkosivusto, joka tarjoaa ilmaisia aikuisviihde videoita. Sivusto on perustettu vuonna 1997 ja se on yksi suosituimmista ilmaisista aikuisviihdesivustoista maailmassa.", 
        ["Noin 118.59 milj.", "Ei saatavilla"], "XNXX"],

        9 : ["JKAnime on verkkosivusto, joka tarjoaa ilmaista sarjojen suoratoistoa. Sivusto on erikoistunut tarjoamaan anime-sarjoja ja -elokuvia eri kategorioista. Sivusto on saatavilla useilla kielillä ja se on ilmainen käyttää, mutta käyttäjät voivat katsoa mainoksia.", 
        ["Noin 108.11 milj.", "Noin 438.5 milj."], "JKAnime"],

       10 : ["Lectormanga on verkkosivusto, joka tarjoaa ilmaisia sarjakuvia. Sivusto on erikoistunut anime ja manga-sarjakuviin.", 
       ["Noin 102.84 milj.", "Noin 646.3 milj."], "Lectormanga"]
    }

    var title = data[element][2];
    var desc = data[element][0];
    var country_visits = data[element][1][0];
    var total_visits = data[element][1][1];

    var backdrop = document.getElementById("info_focus_filter");
    var container = document.getElementById("website_info_container");
    var info_title = document.getElementById("wesbite_info_title");
    var info_desc = document.getElementById("website_info_desc");
    var info_stats_1 = document.getElementById("website_info_stats_1");
    var info_stats_2 = document.getElementById("website_info_stats_2");

    container.style.display = "block";
    backdrop.style.display = "block";

    info_title.innerHTML = title;
    info_desc.innerHTML = desc;
    info_stats_1.innerHTML = "Vierailuja Costa Ricasta:<br>" + country_visits;
    info_stats_2.innerHTML = "Vierailuja maailmanlaajuisesti:<br> " + total_visits;


}


function website_info_exit() {

    var container = document.getElementById("website_info_container");
    var backdrop = document.getElementById("info_focus_filter");
    container.style.display = "none";
    backdrop.style.display = "none";
}


function resplit_typical() {

    var split = "flex";
    if (window.innerWidth > 800) {

        split = "flex";
    }
    else {

        split = "block";
    }

    var image = document.getElementById("split_left_container")
    image.style.backgroundPosition = "calc(50% - 0) 50%"
    document.documentElement.style.setProperty("--typical-split", split); 
}