export default (() => {
  const sidebar = document.querySelector('.sidebar')
  const asideRight = document.querySelector('.aside-right')
  const asideLeft = document.querySelector('.aside-left')
  const sidebarLeft = document.querySelector('.sidebar-left')
  const main = document.querySelector('main')


  sidebar.addEventListener("click", () => {
    asideRight.classList.toggle('inactive');
    asideLeft.classList.toggle('active');
    main.classList.toggle('active');
  })

  sidebarLeft.addEventListener("click", () => {
    asideRight.classList.toggle('inactive');
    asideLeft.classList.toggle('active');
    main.classList.toggle('active');
  })
})();


// alert('Hola')