const form = document.getElementById("form");
let email1 = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmpty();
  setSubmit();
});

function checkEmpty() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (firstName.value.length == 0) {
    const fError = document.getElementById("first-name-error");
    fError.style.display = "flex";
    firstName.className = "error";
  } else {
    const fError = document.getElementById("first-name-error");
    fError.style.display = "none";
    firstName.className = "";
  }

  if (lastName.value.length == 0) {
    const lError = document.getElementById("last-name-error");
    lError.style.display = "flex";
    lastName.className = "error";
  } else {
    const lError = document.getElementById("last-name-error");
    lError.style.display = "none";
    lastName.className = "";
  }

  if (email.value.length == 0) {
    const eError = document.getElementById("email-error");
    const vError = document.getElementById("invalid-email");
    eError.style.display = "flex";
    vError.style.display = "none";
    email.className = "error";
    email.setAttribute("placeholder", "");
  } else if (email.value.length != 0) {
    const emailValue = email1.value.trim();
    if (!isEmail(emailValue)) {
      const vError = document.getElementById("invalid-email");
      const eError = document.getElementById("email-error");
      vError.style.display = "flex";
      eError.style.display = "none";
      email.className = "error red-placeholder";
      email.value = "";
      email.setAttribute("placeholder", "email@example.com");
    } else {
      const eError = document.getElementById("email-error");
      const vError = document.getElementById("invalid-email");
      eError.style.display = "none";
      vError.style.display = "none";
      email.className = "";
    }
  }

  if (password.value.length == 0) {
    const pError = document.getElementById("password-error");
    pError.style.display = "flex";
    password.className = "error";
  } else {
    const pError = document.getElementById("password-error");
    pError.style.display = "none";
    password.className = "";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setSubmit() {
  const errors = document.getElementsByClassName("error");
  if (errors.length == 0) {
    document.form.submit();
  }
}
