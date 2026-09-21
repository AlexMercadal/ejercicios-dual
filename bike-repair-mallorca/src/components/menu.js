class Menu extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      nav ul {
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        list-style: none;
      }

      nav ul li a {
        font-family: "Saira Condensed", sans-serif;
        font-size: 1.5rem;
        color: hsl(195, 87%, 20%);
        text-decoration: none;
      }

      nav ul li a:active {
        color: black;
      }

      nav ul li a:hover {
        text-decoration: underline;
        text-decoration-color: #14A7DE;
        text-underline-offset: 0.1rem;
      }
    </style>

    <nav>
      <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">El taller</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Opiniones</a></li>
        <li><a href="">Contacto</a></li>
      </ul>
    </nav>
    `
  }
}

customElements.define('menu-component', Menu);
