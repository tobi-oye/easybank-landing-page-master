let modal = document.querySelector(".modal");
let headerBtn = document.querySelector(".header-btn");

let btn = document.querySelector(".btn-hamburger");

/**
 * function to display modal
 */
function displayModal() {
  if (modal.style.display == "none") {
    modal.style.display = "block";
    headerBtn.style.display = "none";
  } else {
    modal.style.display = "none";
  }
}

btn.addEventListener("click", displayModal);
