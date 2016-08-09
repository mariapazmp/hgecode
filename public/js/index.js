document.onreadystatechange = () => {

  if (document.readyState === 'complete') {

/*------- [Mobile], when user clicks on the hamburger menu, calls the openNav function */
	document.getElementById("ic-toggle").addEventListener("click", openNav);	
    

/*------- Desktop and mobile navigation events -------*/

  	/* [Mobile] Two variables for save the main menu items and the submenu lists  */
  	let itemsxs = document.getElementsByClassName('link-subxs');
  	let submenuxs = document.getElementsByClassName('submenuxs');

  	/* [Desktop] */
  	let menuitems = document.getElementsByClassName('menu-a');
  	let submenuitems = document.getElementsByClassName('submenu');



  	for ( var i = 0; i < itemsxs.length; i++ ) (function(i){ /* PASAR A UNA FUNCIÓN*/
  		
  		/* [Mobile] when user clicks a Primary Navigation item */
			itemsxs[i].onclick = function() {
			  	
			  	let active = "fly link-subxs";
		  		let arrow = "url(images/ic_arrow.svg)";
		  		let display = "none";

			  	if (!(itemsxs[i].className.match("active"))) { //If the user clicks a Primary nav item and its submenu is not being shown 
		  			active = "active fly link-subxs";
					arrow = "url(images/ic_arrow_up.svg)";
					display = "block";
				}

				itemsxs[i].className = active;
	  			itemsxs[i].style.backgroundImage = arrow;
	  			submenuxs[i].style.display = display

				
			}


			menuitems[i].onclick = function (){ 
				let display = "none";
				if (!(submenuitems[i].className.match("active"))) { 
			  		display = "block";  			
				}
				document.getElementById("backg").style.display = display;
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
  













