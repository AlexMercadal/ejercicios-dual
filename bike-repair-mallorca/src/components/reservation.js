class Reservation extends HTMLElement {

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
     .main-bar-button button {
        background-color: #14A7DE;
        color: white;
        padding: 0.5rem 2rem;
        border-radius: 2rem;
      }

      .main-bar-button button a {
        font-family: "Saira Condensed", sans-serif;
        font-size: 1.3rem;
        text-decoration: none;
      }

      .main-bar-button button:hover {
        background-color: #000000;
      }

      .main-bar-button button:hover a {
        color: hsla(0, 0%, 100%, 1.00);
      }
    </style>

    <div class="main-bar-button">
      <button><a href="">Reservar cita</a></button>
    </div>
    `
  }
}

customElements.define('reservation-component', Reservation);