export default (() => {
  const submit = document.querySelector(".submit-button")
  const notification = document.querySelector(".notification")

  submit.addEventListener("click", (event) => {
    event.preventDefault()
    notification.classList.toggle("active")
    submit.classList.toggle("active");
  });

})();