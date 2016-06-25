document.addEventListener('DOMContentLoaded', function () {


	document.getElementById("submenu-lbl").addEventListener("click", showFunction); /*If the user clicks on the item menu */

	function showFunction (){	
		if (!(document.getElementById("submenu").className.match("active"))) { /* If the submenu hasn't the "active" */
   			
   			document.getElementById("submenu").style.display = "block";/* Shows the submenu */
			document.getElementById("submenu").className = "active"; /* Adds the "active" class */
		}	

		else{
			/*Si tiene la clase active y hace click en el botón del menú, cierra el submenu */
			document.getElementById("submenu").style.display = "none";
			document.getElementById("submenu").className = "";
		}
		
	}


});




	
/* */