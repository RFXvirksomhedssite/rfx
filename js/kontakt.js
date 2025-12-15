const form = document.querySelector("form");

const navnOutput = document.querySelector("#navn_output");
const virksomhed_navnOutput = document.querySelector("#virksomhed_navn_output");
const emailOutput = document.querySelector("#email_output");
const telefonOutput = document.querySelector("#telefon_output");
const deltagerOutput = document.querySelector("#deltagere_output");
const produkterOutput = document.querySelector("#produkter_output");
const beskedOutput = document.querySelector("#besked_output");
const betingelserOutput = document.querySelector("#betingelser_output");

// når man har lavet fejlbeskrivelse til required formularer, skal den orange pop up - (browserens orange standard box) blokeres.
form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// Tilføj event listener, der lytter efter 'submit' eventet (submit indstiller til reset af formular se slide 33)
form.addEventListener("submit", handleSubmit);

// Lav en funktion, der stopper refresh og nulstiller formularen
function handleSubmit(event) {
  console.log("handleSubmit");
  //   // 1. undgå refresh
  event.preventDefault();

  // 2. Saml værdierne fra formularen først hentes alt formdata, herefter specifikke input-"name"s (lav én ad gangen og tjek etc.)
  const formData = new FormData(form);
  const navn = formData.get("navn");
  const virksomhedNavn = formData.get("virksomhed_navn");
  const email = formData.get("email");
  const telefon = formData.get("telefon");
  const deltagere = formData.get("deltagere");
  const produkter = formData.getAll("produkter");
  const besked = form.elements["besked"];
  const betingelser = formData.get("betingelser");

  // 3. Vis værdierne i de rigtige output-felter
  // Sæt værdier ind i output-elementer
  navnOutput.textContent = navn;
  virksomhed_navnOutput.textContent = virksomhedNavn;
  emailOutput.textContent = email;
  telefonOutput.textContent = telefon;
  deltagerOutput.textContent = deltagere;
  produkterOutput.textContent = produkter.join(", ");
  beskedOutput.textContent = besked.value;
  betingelserOutput.textContent = betingelser;

  //   // 4. evt. nustil formular
  form.reset();
}
