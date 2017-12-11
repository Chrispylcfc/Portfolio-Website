/*
  This will include the main JS functionality.
*/

(function(){
  let navButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");
  let topButton = document.getElementById("top-button");
  let accordionOne = document.getElementById("accordion-one");
  let accordionTwo = document.getElementById("accordion-two");
  let headerText = document.getElementById("header-text");

  let toggle = false; // hidden at first
  let moduleToggle1 = false; // hidden at first
  let moduleToggle2 = false; // hidden at first

  function toggleMenu(){
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

  function navFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navMenu.classList.add("nav-background");
    }
    else {
      navMenu.classList.remove("nav-background");
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

  function accordionOneFunction(){
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

  function accordionTwoFunction(){
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

  // 3rd Party Js Typewriter
  function displayHeaderText(){
    let typewriter = new Typewriter(headerText, {
      loop: false
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

  navButton.addEventListener("click", toggleMenu);
  navMenu.addEventListener("click", toggleMenu);
  document.addEventListener("scroll", scrollFunction);
  document.addEventListener("scroll", navFunction);
  topButton.addEventListener("click", topFunction);
  accordionOne.addEventListener("click", accordionOneFunction);
  accordionTwo.addEventListener("click", accordionTwoFunction);
  window.addEventListener("load", displayHeaderText);

})();
