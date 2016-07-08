document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
	
    document.getElementById("backg").addEventListener("click", showSubmenu); /*If the user clicks on the rest of the page when the submenu is displayed */
    document.getElementById("ic-toggle").addEventListener("click", openNav);
	


  	var flyli = document.getElementsByClassName('link-subxs');
  	var ddul = document.getElementsByClassName('submenuxs');
  	

  	for ( var i = 0; i < flyli.length; i++ ) (function(i){ 
  		

		flyli[i].onclick = function() {

		  	if (!(flyli[i].className.match("active"))) { 
		  			flyli[i].style.backgroundImage = "url(images/ic_arrow_up.png)";
					flyli[i].className = "active fly link-subxs";
					ddul[i].style.display = "block";
				}

				else {
					flyli[i].className = "fly link-subxs";
		  			flyli[i].style.backgroundImage = "url(images/ic_arrow.png)";
		  			ddul[i].style.display = "none";

				}
		}
		      
		})(i);

  }

}
  
/*Functions */

function showSubmenu (){

		if (!(document.getElementById("submenu-3").className.match("active"))) { /* If the submenu hasn't the "active" */
   			
   			document.getElementById("backg").style.display = "block"; /*Appears the transparency layer over the content */
		}	

		else{

			/*Si tiene la clase active y hace click en el botón del menú, cierra el submenu */
			document.getElementById("submenu-3").style.display = "none";
			document.getElementById("submenu-3").className = "";
			document.getElementById("subli-3").style.background = "#ec008c";
			document.getElementById("subli-3").style.color = "#FFF";
			document.getElementById("backg").style.display = "none";
		}
		
	}


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



