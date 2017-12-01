/*
  JS for Modal Functionality
*/

(function(){
  let modal = document.getElementById('contact-modal');
  let button = document.getElementById("contact-button");
  let close = document.getElementById("close-icon");

  function displayModal() {
    modal.classList.add("show-modal");
  }

  function hideModal() {
    modal.classList.remove("show-modal");
  }

  button.addEventListener("click", displayModal);
  close.addEventListener("click", hideModal);

})();
