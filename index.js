let modal = document.querySelector("nav");
let headerBtn = document.querySelector(".header-btn");
let modalContent = document.querySelector("#modal-content");
let btn = document.querySelector(".btn-hamburger");

/**
 * function to display modal
 */
function displayModal() {
  if (modal.className == "") {
    modal.className = "modal";
    modalContent.className = "modal-content";
    headerBtn.style.display = "none";
  } else {
    modal.className = "";
    modalContent.className = "";
  }
}

btn.addEventListener("click", displayModal);
