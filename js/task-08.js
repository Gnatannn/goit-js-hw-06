const refs = {
  form: document.querySelector(".login-form"),
};

const handleSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  const emailValue = email.value;
  const passwordValue = password.value;
  const user = {
    emailValue,
    passwordValue,
  };

  if (emailValue === "" || passwordValue === "") {
    window.alert("Please fill the form!");
  } else {
    console.log(user);
    refs.form.reset();
  }
};

refs.form.addEventListener("submit", handleSubmit);
