


document.getElementById('theaterlist').addEventListener('change', loadAndParseXML);


 
// this function sends request to server and parse it to us to in readable form in html page.
function loadAndParseXML() {
    var theater = document.getElementById("theaterlist").value;
    let url = 'https://www.finnkino.fi/xml/Schedule/?area=' + theater + '&dt=';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var xmlDoc = xmlhttp.responseXML;
             //these are tags i use to search content to the table. show element is created for the for loop work properly and search all items.
             // table shows starting time,title, and movie poster. 
            var show = xmlDoc.getElementsByTagName("Show");
            var starting = xmlDoc.getElementsByTagName("dttmShowStart");
            var auditorium = xmlDoc.getElementsByTagName("TheatreAuditorium");
            var title = xmlDoc.getElementsByTagName("Title");
            var genre = xmlDoc.getElementsByTagName("Genres");
            var image = xmlDoc.getElementsByTagName("EventSmallImagePortrait")
            // Here is for loop that goes through all data from xml file. 
            var txt = "<table>";
            for (i = 0; i < show.length; i++) {
                txt += "<tr><td>" + starting[i].childNodes[0].nodeValue + "</td>" +
                "<td>" + auditorium[i].childNodes[0].nodeValue + "</td>" +
                    "<td>" + title[i].childNodes[0].nodeValue + "</td>" + "<td>"+ genre[i].childNodes[0].nodeValue +  "</td>" + "<td>" + "<img src =" + image[i].childNodes[0].nodeValue + ">" + "</td>" + "</tr>";
                console.log(txt);
            }
            txt += "</table>";
            // This shows data on table 
            document.getElementById("table").innerHTML = txt;
        }
    }
}
