document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
	
    document.getElementById("ic-toggle").addEventListener("click", openNav);

  	var flyli = document.getElementsByClassName('link-subxs');
  	var ddul = document.getElementsByClassName('submenuxs');
  	var menuitems = document.getElementsByClassName('menu-a');
  	var submenuitems = document.getElementsByClassName('submenu');

  	
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

	menuitems[i].onclick = function (){ /*Shows the traslucent background when click on menu item with submenu options */

			if (!(submenuitems[i].className.match("active"))) { 
		  			document.getElementById("backg").style.display = "block";		  			
				}

				else {
					document.getElementById("backg").style.display = "none";		

				}

		}		
		      
		})(i);

  }

}
  
/*Functions */




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



