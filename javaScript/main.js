function transferToTable() {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    
    var table = document.getElementById("chart");
    table.appendChild(tr);
    td1.innerHTML = document.getElementById("name").value;
    td2.innerHTML = document.getElementById("fee").value;
    td3.innerHTML = document.getElementById("duration").value;
    
    var select = document.getElementById("level");
    var level = select.options[select.selectedIndex].text;
    td4.innerHTML = level;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
   
    
    
}