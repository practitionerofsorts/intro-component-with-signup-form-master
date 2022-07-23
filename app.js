const claimButton = document.querySelector(".form-cta");
const error = document.getElementsByClassName("error");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const password = document.querySelector("password");
const email = document.querySelector("email");

claimButton.addEventListener("click", () => {
  if (firstName.value == "") {
    if (firstName.value == "") {
      error[0].style.display == "block";
    } else {
      error[0].style.display == "none";
    }
  } else {
    alert("helllo meow");
  }
});
