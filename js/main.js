/*
  This will include the main JS fucntionality.
*/

(function(){
  let navButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

  navButton.addEventListener("click", toggleMenu);

})();
