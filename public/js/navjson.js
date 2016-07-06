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
      var out = " ";



      for (var j in obj.items) {
        	out += '<li>';
        	out += '<a class="nav-item" id="navitem-'+j+'" href="' + obj.items[j].url + '">' + obj.items[j].label + '</a>';
        		
  	    var items2 = obj.items[j].items;

        
          if ( Object.prototype.toString.call( items2 ) === '[object Array]' ) {
             out += '<ul id="submenu">';

              for (var k in items2) {
                out += '<li><a id="link-sub" href="' + items2[k].url + '">' + 
                       items2[k].label + '</a></li>';

              }
              out += '</ul>';
            }
        out += '</li>';
  	}


      document.getElementById("id01").innerHTML = out;
  }

