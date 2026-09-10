export default (() => {
  const submit = document.querySelector(".submit-button")

  submit.addEventListener("click", (event) => {
    event.preventDefault()
    alert("se ha enviado el formulario")
    submit.classList.toggle("active");
  });



})();