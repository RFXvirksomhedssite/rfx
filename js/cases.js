const swipefor = document.getElementById("swipefor");
const swipeforbilleder = swipefor.querySelectorAll(".swipeforbilleder");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

swipeforbilleder.forEach((billede) => {
  billede.addEventListener("click", () => {
    lightboxImg.src = billede.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/**Leas mere funktion**/

const laesMereKnap = document.querySelector(".caseknap");
const mereTekst = document.querySelector(".mere-tekst");

laesMereKnap.addEventListener("click", (e) => {
  e.preventDefault();

  if (mereTekst.style.display === "block") {
    mereTekst.style.display = "none";
    laesMereKnap.textContent = "Læs mere";
  } else {
    mereTekst.style.display = "block";
    laesMereKnap.textContent = "Læs mindre";
  }
});