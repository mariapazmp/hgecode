document.addEventListener('DOMContentLoaded', function () {

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

    for (var i in obj) {
    	var items = obj[i];

    	for (var j in items) {
	        var items2 = items[j].items;

	        for (var k in items2) {
	        	out += '<li><a href="' + items2[k].url + '">' + 
	        	       items2[k].label + '</a></li>';
	        	
	        }
	    }
	}

    document.getElementById("id01").innerHTML = out;
}

	/*Requesting the nav.json 


	var xmlhttp = new XMLHttpRequest();
	var url = "http://www.w3schools.com/website/Customers_MYSQL.php";

	xmlhttp.onreadystatechange = function() {

	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	alert ("holi");
	        var myArr = JSON.parse(xmlhttp.responseText); /*Convert json to javascript 
	        myFunction(myArr); /*Send de js array to myFunction 

	    }
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();


	/*Create the menu items linked with the object defined in nav.json
	function myFunction(arr) {

	    var out = "";
	    var i;
	    for(i = 0; i < arr.length; i++) {
	        out += '<li><a href="' + arr[i].url + '">' + 
	        arr[i].display + '</a></li>';
	    }
	    document.getElementById("navEx").innerHTML = out;
	}

*/






/*Mobile nav */

	document.getElementById("ic-toggle").addEventListener("click", openNav);

	function openNav() {

		if (!(document.getElementById("ic-toggle").className.match("close"))) { 

			document.getElementById("ic-toggle").style.backgroundImage = "url(images/toggle-close.svg)"; /*When sidenav is open, change the hamburger icon */
			var w = window.innerWidth; /*Get the windows width */
			var marginl = w-72; /* 72px is the #content's width when the sidenav appears */
		    document.getElementById("content").style.marginLeft = marginl+"px"; /*Set the #content's margin-left */
		    document.getElementById("hugenav").style.width = marginl+"px"; /*Set the #hugenav's width */

		    document.body.style.overflow = "hidden";
			document.getElementById("ic-toggle").className = "close";
			document.getElementById("backg").style.display = "block"; /*Appears the transparency layer over the content */

		
		}

		else {
			document.getElementById("hugenav").style.width = "0";
		    document.getElementById("content").style.marginLeft = "0";	    
		    document.body.style.overflow = "visible";
		    document.getElementById("ic-toggle").style.backgroundImage = "url(images/toggle-open.svg)";
			document.getElementById("ic-toggle").className = ""; /*Remove class close */
			document.getElementById("backg").style.display = "none"; 
			
		}

}

	

	

	
	document.getElementById("link-subxs").addEventListener("click", showSubmenuxs); /*If the user clicks on the item menu */

	function showSubmenuxs (){ /*Submenu inside hamburguer menu */
		if (!(document.getElementById("submenuxs").className.match("active"))) { 
			document.getElementById("submenuxs").style.display = "block";
			document.getElementById("submenuxs").className = "active";
		}

		else {
			document.getElementById("submenuxs").style.display = "none";
			document.getElementById("submenuxs").className = ""; /*Remove class active */
		}
	}

		

/*Desktop Javascript */

document.getElementById("submenu-lbl").addEventListener("click", showSubmenu); /*If the user clicks on the item menu */
document.getElementById("backg").addEventListener("click", showSubmenu); /*If the user clicks on the rest of the page when the submenu is displayed */

	function showSubmenu (){	
		if (!(document.getElementById("submenu").className.match("active"))) { /* If the submenu hasn't the "active" */
   			
   			document.getElementById("submenu").style.display = "block";/* Shows the submenu */
			document.getElementById("submenu").className = "active"; /* Adds the "active" class */
			document.getElementById("link-sub").style.background = "#FFF";
			document.getElementById("link-sub").style.color = "#ec008c";

			document.getElementById("backg").style.display = "block"; /*Appears the transparency layer over the content */
		}	

		else{
			/*Si tiene la clase active y hace click en el botón del menú, cierra el submenu */
			document.getElementById("submenu").style.display = "none";
			document.getElementById("submenu").className = "";
			document.getElementById("link-sub").style.background = "#ec008c";
			document.getElementById("link-sub").style.color = "#FFF";

			document.getElementById("backg").style.display = "none";
		}
		
	}


});




	
/* */