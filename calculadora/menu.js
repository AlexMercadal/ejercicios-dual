export default (() => {
    const button = document.querySelector('.button-number')


    button.addEventListener('click', () => {
        button.classList.toggle("active")
    })
})();