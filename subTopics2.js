window.onload = function() {
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        
        var topic = request.responseText;
        var json = JSON.parse(topic);
        printing(json);
        

    }
    
}
request.open("GET", "http://localhost:8000/course/", true) ;
request.send();
    
}