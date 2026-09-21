class Logo extends HTMLElement {

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
      img {
        width: 100%;
        object-fit: cover;
      }
      .logo img {
        height: 8vh;
      }
    </style>

    <div class="logo">
      <img src="./bike-repair-mallorca-logo-sin-fondo-HD.webp" alt="">
    </div>
    `
  }
}

customElements.define('logo-component', Logo);
