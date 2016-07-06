/*Json nav */
var xmlhttp = new XMLHttpRequest();
var url = "../data/nav.json";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        navFunction(xmlhttp.responseText);
    }
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

  function navFunction(response) {
  	var obj = JSON.parse(response);


    var out = "";

      for (var j in obj.items) {
          
        var items2 = obj.items[j].items;


          if ( items2.length > 0 ) {

          out += '<li class="submenuli">';
          out += '<a href="' + obj.items[j].url + '">' + 
                   obj.items[j].label + '</a>';

          out += '<ul id="submenu">';

            for (var k in items2) {
              out += '<li><a href="' + items2[k].url + '">' + 
                     items2[k].label + '</a></li>';

            }
            out += '</ul>';
            out += '</li>';
          }

          else {
            out += '<li>';
            out += '<a href="' + obj.items[j].url + '">' + 
                   obj.items[j].label + '</a>';
            out += '</li>';
          }
      
  }

    document.getElementById("mainMenu").innerHTML = out;
  }

