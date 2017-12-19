/*
  JS for Main Functionality 
*/

(function(){
  // Get Elements via Id's set in HTML
  let navButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");
  let topButton = document.getElementById("top-button");
  let accordionOne = document.getElementById("accordion-one");
  let accordionTwo = document.getElementById("accordion-two");
  let headerText = document.getElementById("header-text");

  // Toggles for various functions
  let toggle = false; // hidden at first
  let moduleToggle1 = false; // hidden at first
  let moduleToggle2 = false; // hidden at first

  // Display Mobile Menu if Mobile screen and animate hamburger button
  function toggleMenu() {
    if (toggle) { // true: it's visible
      // Hide Navigation
      if (document.documentElement.clientWidth < 600) {
        navMenu.classList.remove("show-menu");
        navButton.classList.remove("rotate-button");
        toggle = false
      }
    }
    else { // false: it's hidden
      // Show Navigation
      if (document.documentElement.clientWidth < 600) {
        navMenu.classList.add("show-menu");
        navButton.classList.add("rotate-button");
        toggle = true
      }
    }
  }

  // Display Top Button if page scrolls down more than 100
  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          topButton.classList.remove("hide-top-button")
          topButton.classList.add("show-top-button");
      }
      else {
        topButton.classList.add("hide-top-button");
        topButton.classList.remove("show-top-button");
      }
  }

  // When Top Button pressed scroll to top
  function topFunction() {
    document.body.scrollTop = 0; // Chrome | Safari
    document.documentElement.scrollTop = 0; // IE | Firefox
  }

  // Year 1 Show Modules Functionality
  function accordionOneFunction() {
      let content = accordionOne.nextElementSibling;
      if (moduleToggle1) {
        content.classList.remove("show-module-content");
        accordionOne.innerHTML = "Show Modules";
        moduleToggle1 = false;
      }
      else {
        content.classList.add("show-module-content");
        accordionOne.innerHTML = "Hide Modules";
        moduleToggle1 = true;
      }
  }

  // Year 2 Show Modules Functionality
  function accordionTwoFunction() {
      let content = accordionTwo.nextElementSibling;
      if (moduleToggle2) {
        content.classList.remove("show-module-content");
        accordionTwo.innerHTML = "Show Modules";
        moduleToggle2 = false;
      }
      else {
        content.classList.add("show-module-content");
        accordionTwo.innerHTML = "Hide Modules";
        moduleToggle2 = true;
      }
  }

  /*
    3rd Party JS Typewriter
    Displays different text in header every 2 seconds
  */
  function displayHeaderText() {
    let typewriter = new Typewriter(headerText, {
      loop: true
    });

    typewriter.typeString('Java')
      .pauseFor(2000)
      .deleteAll()
      .typeString('SQL')
      .pauseFor(2000)
      .deleteAll()
      .typeString('Django Applications')
      .pauseFor(2000)
      .start();
  }

  // Event Listeners (Click, Scroll & Load)
  navButton.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", toggleMenu);
  document.addEventListener("scroll", scrollFunction);
  topButton.addEventListener("click", topFunction);
  accordionOne.addEventListener("click", accordionOneFunction);
  accordionTwo.addEventListener("click", accordionTwoFunction);
  window.addEventListener("load", displayHeaderText);

})();
