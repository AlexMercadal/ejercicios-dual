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
      button {
        all: unset;
        cursor: pointer;
      }

     .button button {
        background-color: #14A7DE;
        padding: 0.5rem 2rem;
        border-radius: 2rem;
      }

      .button button a {
        font-family: "Saira Condensed", sans-serif;
        font-size: 1.3rem;
        text-decoration: none;
        color:white;
      }

      .button button:hover {
        background-color: #000000;
      }

      .button button:hover a {
        color: hsla(0, 0%, 100%, 1.00);
      }
    </style>

    <div class="button">
      <button><a href="">Reservar cita</a></button>
    </div>
    `
  }
}

customElements.define('reservation-component', Reservation);