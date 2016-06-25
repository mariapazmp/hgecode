document.addEventListener('DOMContentLoaded', function () {


	document.getElementById("submenu-lbl").addEventListener("click", showSubmenu); /*If the user clicks on the item menu */
	document.getElementById("backg").addEventListener("click", showSubmenu); /*If the user clicks on the rest of the page when the submenu is displayed */


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