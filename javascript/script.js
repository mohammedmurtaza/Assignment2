(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
		console.log("inside function");
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();

/* This javascript function helps make the website more responsive. I used this lab work from the lab session we did in week 4. 
This helps make my CV responsive from a mobile first vuew as as making it suitable to tablet and desktop view. 
This js code changes the menu (navbar) depending on which view the CV is at. 
At mobile first - it allows the user to click on the menu button to bring up my navbar in a list format
The navbar expands as the pixel size gets bigger making it suitable to tablet and desktop version.  