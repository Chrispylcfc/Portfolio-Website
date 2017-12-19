/*
  JS for Modal Functionality
*/

(function(){
  // Get Elements via Id's set in HTML
  let modal = document.getElementById('contact-modal');
  let button = document.getElementById("contact-button");
  let close = document.getElementById("close-icon");

  // Display the Modal when Button Pressed
  function displayModal() {
    modal.classList.add("show-modal");
  }

  // Hide the Modal when Button Pressed
  function hideModal() {
    modal.classList.remove("show-modal");
  }

  // Event Listeners (Click)
  button.addEventListener("click", displayModal);
  close.addEventListener("click", hideModal);

})();
