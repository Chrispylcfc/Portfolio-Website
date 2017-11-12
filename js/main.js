/*
  This will include the main JS fucntionality.
*/

(function(){
  let navButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");
  let topButton = document.getElementById("top-button")

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

  function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
  }

  function topFunction(){
    document.body.scrollTop = 0; // Chrome | Safari
    document.documentElement.scrollTop = 0; // IE | Firefox
  }

  navButton.addEventListener("click", toggleMenu);
  document.addEventListener("scroll", scrollFunction);
  topButton.addEventListener("click", topFunction);

})();
