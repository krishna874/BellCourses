function transferToTable() {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    
    var table = document.getElementById("chart");
    table.appendChild(tr);
    var name = document.getElementById("name").value;
    td1.innerHTML = name;
    td2.innerHTML = document.getElementById("fee").value;
    
    
    var courses = document.getElementById("courses");
    var course = courses.options[courses.selectedIndex].text;
    td3.innerHTML = "<a href='topics.html?courseName="+course+"'>"+course+"</a>";
    
    var subCourses = document.getElementById("subCourses");
    var subCourse = subCourses.options[subCourses.selectedIndex].text;
    td4.innerHTML = "<a href='javascript:subTopic()"+subCourse+"'>"+subCourse+"</a>" ;

    td5.innerHTML = document.getElementById("duration").value;
    
    var select = document.getElementById("level");
    var level = select.options[select.selectedIndex].text;
    td6.innerHTML = level;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
   
    showResults();
    
}
// showing the form
// Hidding the table
function openCourseForm() {
    document.getElementById("formCourses").style.display = "block";
    document.getElementById("chart").style.display = "none";
    document.getElementById("addCourses").style.display = "none";
}

function showResults() {
     document.getElementById("formCourses").style.display = "none";
    document.getElementById("chart").style.display = "block";
    document.getElementById("addCourses").style.display = "block";
}
// select box
var ui = ["HTML", "CSS", "JavaScript", "AngularJS"];
var dotnet = ["C#.Net", "ASP.Net", "VB.Net" ];
var java = ["Core Java","Adavanced Java", "Springs", "Structs"];
var database = ["Sql","Oracle Sql","PlSql", "Mysql"];

function subTopics(course) {
    switch(course.value) {
        case "ui":
            setOptions(ui);
            break;
            
        case "dotnet":
            setOptions(dotnet);
            break;
            
        case "java":
            
            setOptions(java);
            break;
            
        case "database":
            
            setOptions(database);
            break;
        
            
    }
    
}
function setOptions(array) {
    var selectList = document.getElementById("subCourses")
    subCourses.options.length = 0;
    
    for(var i = 0;i<array.length;i++) {
        
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
    }
}
// script for subTopics.html
//var courseName = document.getElementById("topics");
var subCourses = document.getElementById("subCourses");
var subCourse = subCourses.options[subCourses.selectedIndex].text;
 function subTopic()  {
    var name = document.getElementById("name").value;
     var subCourses = document.getElementById("subCourses");
    var subCourse = subCourses.options[subCourses.selectedIndex].text;
    console.log(subCourse);
     var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = name;
    td2.innerHTML = subCourse;
    tr.appendChild(td1);
    tr.appendChild(td2);
    students.appendChild(tr);
}