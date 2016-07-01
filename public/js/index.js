document.addEventListener('DOMContentLoaded', function () {

	function openNav() {
	    document.getElementById("hugenav").style.width = "80%";
	    document.getElementById("content").style.marginLeft = "80%";
	}

	function closeNav() {
	    document.getElementById("hugenav").style.width = "0";
	    document.getElementById("content").style.marginLeft = "0";
	}

	document.getElementById("header").addEventListener("click", openNav);

	document.getElementById("submenu-lbl").addEventListener("click", showSubmenu); /*If the user clicks on the item menu */
	document.getElementById("backg").addEventListener("click", showSubmenu); /*If the user clicks on the rest of the page when the submenu is displayed */
	document.getElementById("ic-toggle").addEventListener("click", showMenuxs); /*If the user clicks on the item menu */
	
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




	function showMenuxs (){
		document.getElementById("ic-toggle").style.backgroundImage = "url(images/toggle-close.svg)";
	}


	function showSubmenu (){	
		if (!(document.getElementById("submenu").className.match("active"))) { /* If the submenu hasn't the "active" */
   			
   			document.getElementById("submenu").style.display = "block";/* Shows the submenu */
			document.getElementById("submenu").className = "active"; /* Adds the "active" class */
			document.getElementById("link-sub").style.background = "#FFF";
			document.getElementById("link-sub").style.color = "#ec008c";

			document.getElementById("backg").style.display = "block";
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