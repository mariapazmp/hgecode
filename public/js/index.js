document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

/*------- [Mobile], when user clicks on the hamburger menu, calls the openNav function */
		document.getElementById("ic-toggle").addEventListener("click", openNav);	
    

/*------- Desktop and mobile navigation events -------*/

  	/* [Mobile] Two variables for save the main menu items and the submenu lists  */
  	var itemsxs = document.getElementsByClassName('link-subxs');
  	var submenuxs = document.getElementsByClassName('submenuxs');

  	/* [Desktop] */
  	var menuitems = document.getElementsByClassName('menu-a');
  	var submenuitems = document.getElementsByClassName('submenu');


  	for ( var i = 0; i < itemsxs.length; i++ ) (function(i){ /* For every item in the menu */
  		
  		/* [Mobile] when user clicks a Primary Navigation item */
			itemsxs[i].onclick = function() {

				/* Class "active", marks an item menu when the user clicks on it */
			  	
			  	if (!(itemsxs[i].className.match("active"))) { /*If the user clicks a Primary nav item and its submenu is not being shown */
			  			/* */
			  			itemsxs[i].style.backgroundImage = "url(images/ic_arrow_up.svg)";
						itemsxs[i].className = "active fly link-subxs";
						submenuxs[i].style.display = "block";
					}
					else { /*Close the mobile submenu */
						itemsxs[i].className = "fly link-subxs";
			  			itemsxs[i].style.backgroundImage = "url(images/ic_arrow.svg)";
			  			submenuxs[i].style.display = "none";

					}
			}


		/* [Desktop] when user clicks a Primary Navigation item */

				/* The main behavior of the menu and submenu items in desktop, were developed with CSS rules.
				The following code are made for shown the translucent background when user clicks on a Primary menu item with submenu options */

			menuitems[i].onclick = function (){ 

				if (!(submenuitems[i].className.match("active"))) { 
			  			document.getElementById("backg").style.display = "block";		  			
					}
				else { document.getElementById("backg").style.display = "none";	}
			}		
		      
	})(i); /* Close the loop */ 


/*------- Events about the translucent background -------*/

document.getElementById("backg").onclick = function() {

  		/* [Desktop] When translucent background is being shown and user clicks on it */
  		document.getElementById("backg").style.display = "none";

  		/* [Mobile] When the sidenav is being shown and user clicks outside of the navigation, the nav closes  */
  		if (window.innerWidth < 768) {
			document.getElementById("hugenav").style.width = "0";
		    document.getElementById("content").style.marginLeft = "0";	    
		    document.body.style.overflow = "visible";
		    document.getElementById("ic-toggle").style.backgroundImage = "url(images/toggle-open.svg)";
			document.getElementById("ic-toggle").className = ""; /*Remove class close */
			document.getElementById("backg").style.display = "none"; 
		
		}
}

/*------- openNav Function -------*/
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

} /* Close openNav function*/


} /* Close readystate */

} /* Close onready */
  













