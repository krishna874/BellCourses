var ui = ["HTML", "CSS", "JavaScript", "AngularJS"];
var dotnet = ["C#.Net", "ASP.Net", "VB.Net" ];
var java = ["Core Java","Adavanced Java", "Springs", "Structs"];
var database = ["Sql","Oracle Sql","PlSql", "Mysql"];
var courseName = document.getElementById("topics");
courseName.onclick =  function(e){
    
    
    if(e.target.tagName === 'A') {
        if(e.target.innerHTML == "Home"){
            document.getElementById("section").style.display = "block";
            list.innerHTML = "";
            return;
            
        }
        document.getElementById("section").style.display = "none";
        subTopics(e.target.innerHTML);
    
        }
    };
function subTopics(topic) {
    if(topic == "UI") {
        setList(ui);
    } else if(topic == "DotNet"){
        setList(dotnet)
    } else if(topic == "Java") {
        setList(java);
    } else  {
        setList(database);
        
    }
}
function setList(array) {
    var list = document.getElementById("list");
    list.innerHTML = "";
    for(var i=0;i<array.length;i++) {
        var li = document.createElement("li");
        li.innerHTML = array[i];
        list.appendChild(li);
    }
    
}