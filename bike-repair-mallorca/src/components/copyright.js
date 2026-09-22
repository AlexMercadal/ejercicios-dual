class Copyright extends HTMLElement {

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
     .footer-content-copy {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10rem;
    height: 5vh;
    overflow: hidden;
    background-color: #0000001a;
}

.footer-content-copy p {
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    color: white;
}
    </style>

    <div class="footer-content-copy">
      <p>Copyright © 2026 Bike Repair Mallorca. Todos los derechos reservados.</p>
    </div>
    `
  }
}

customElements.define('copyright-component', Copyright);