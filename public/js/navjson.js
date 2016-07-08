
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

      /* Generating the desktop menu*/

      for (var j in obj.items) {
              
          var items2 = obj.items[j].items;

          if ( items2.length > 0 ) {
              out += '<li>';
              out += '<a class="fly" tabindex="1" href="' + obj.items[j].url + '">' + 
                       obj.items[j].label + '</a>';

              out += '<ul class="dd submenu">';

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

  document.getElementById("nav").innerHTML = out;

  /* Generating the mobile menu*/


  var objxs = JSON.parse(response);  
  var outxs = "";

  for (var m in objxs.items) {
          
          var items2xs = objxs.items[m].items;

          if ( items2xs.length > 0 ) {
              outxs += '<li class="submenu-lblxs">';
              outxs += '<a class="link-subxs fly" tabindex="1" href="' + objxs.items[m].url + '">' + 
                       objxs.items[m].label + '</a>';

              outxs += '<ul class="submenuxs dd">';

              for (var n in items2xs) {
                  outxs += '<li><a href="' + items2xs[n].url + '">' + 
                         items2xs[n].label + '</a></li>';

              }

              outxs += '</ul>';
              outxs += '</li>';
          }

          else {
            outxs += '<li>';
            outxs += '<a href="' + objxs.items[m].url + '">' + 
                   objxs.items[m].label + '</a>';
            outxs += '</li>';
          }
          
      }

  document.getElementById("navxs").innerHTML = outxs;
    
  }
