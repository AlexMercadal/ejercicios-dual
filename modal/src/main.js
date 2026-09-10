export default (() => {

  const modalBackground = document.querySelector('.modal-background');
  const modalButton = document.querySelector('.modal');
  const modalBox = document.querySelector('.modal-box');
  const modalButtonAccept = document.querySelector('.abrir');
  const modalButtonCancel = document.querySelector('.cerrar');

  modalButton.addEventListener("click", () => {
    modalButton.classList.toggle('inactive');
    modalBox.classList.toggle('active');
    modalButtonAccept.classList.toggle('active');
    modalButtonCancel.classList.toggle('active');
    modalBackground.classList.toggle('active');
  })

  modalButtonAccept.addEventListener("click", () => {
    modalButton.classList.toggle('inactive');
    modalBox.classList.toggle('active');
    modalButtonAccept.classList.toggle('inactive');
    modalButtonCancel.classList.toggle('inactive');
    modalBackground.classList.toggle('active');
  })

  modalButtonCancel.addEventListener("click", () => {
    modalButton.classList.toggle('inactive');
    modalBox.classList.toggle('active');
    modalButtonAccept.classList.toggle('inactive');
    modalButtonCancel.classList.toggle('inactive');
    modalBackground.classList.toggle('active');
  })

})();
