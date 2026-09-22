class Contact extends HTMLElement {

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
      * {
          box-sizing: border-box;
      }

      img {
          width: 100%;
          object-fit: cover;
      }

      body {
          margin: 0;
      }

      main {
          display: flex;
          flex-direction: column;
          gap: 10vh;
          padding-left: 5rem;
          padding-right: 5rem;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      a {
          margin: 0;
      }

      ul,
      ol {
          margin: 0;
          padding: 0;
          list-style: none;
      }

      a {
          color: inherit;
          text-decoration: none;
      }

      button {
          all: unset;
          cursor: pointer;
      }

      .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
      }

      .contact-left {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          width: 70%;
          position: relative;
          gap: 1rem;
          padding: 5rem 5rem 3rem 5rem;
          background-color: #0D0F11;
          border-radius: 10px;
          left: 30%;
      }

      .contact-left-row-together {
          display: flex;
          gap: 1rem;
      }

      .contact-left-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
      }

      .contact-left-row-name {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
      }

      .contact-left-rows label {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.2rem;
          color: #ffffff;
          text-transform: uppercase;
      }

      .contact-left-rows input {
          width: 100%;
          background-color: #ffffff;
          border: 1px solid #14A7DE;
          padding: 0.5rem 1rem;
      }

      .contact-left-rows input::placeholder {
          color: #434445;
          font-family: "Montserrat", sans-serif;
          font-size: 0.8rem;
      }

      .contact-left-rows textarea::placeholder {
          color: #434445;
          font-family: "Montserrat", sans-serif;
          font-size: 0.8rem;
      }

      .contact-left-rows textarea {
          width: 100%;
          height: 15vh;
          background-color: #ffffff;
          border: 1px solid #14A7DE;
          padding: 0.5rem 1rem;
      }

      .contact-left-button button {
          background-color: #14A7DE;
          color: white;
          padding: 0.5rem 2rem;
          border-radius: 2rem;
      }

      .contact-left-button button a {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.3rem;
          color: white;
      }

      .contact-left-button button:hover {
          background-color: #000000;
          color: white;
      }

      .contact-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
      }

      .contact-right-subtitle span {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1rem;
          color: #14A7DE;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
      }

      .contact-right-title h3 {
          font-family: "Saira Condensed", sans-serif;
          color: rgb(0, 0, 0);
          font-size: 2.5rem;
      }

      .contact-right-description p {
          font-family: "Montserrat", sans-serif;
          font-size: 1rem;
          color: hsl(0, 0%, 0%);
          width: 70%;
      }

      .contact-right-icon svg {
          width: 2rem;
      }

      .contact-right-card {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
      }

      .contact-right-card-content {
          padding: 6rem 1rem;
          height: 15vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 50%;
          border: 1px solid black;
          margin-top: 2rem;
          border-radius: 1rem;
          gap: 1rem;
      }

      .contact-right-icon svg {
          fill: #14A7DE;
      }

      .contact-right-card-text span {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.2rem;
          color: #ffffff;
      }


      .contact-right-button {
          background-color: #ffffff;
          color: black;
          border: 1px solid rgba(0, 0, 0, 0.205);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30%;
          margin-top: 2rem;
      }

      .contact-right-button:hover {
          border: 1px solid black;
      }

      .contact-right-button a {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.1rem;
      }

      .contact-right-button svg {
          margin-right: 0.5rem;
          width: 1rem;
      }
    </style>

    <section>
      <div class="contact">
        <div class="contact-left">
          <form action="">
            <div class="contact-left-row">
              <div class="contact-left-row-together">
                <div class="contact-left-rows">
                  <label for="name">Nombre</label>
                  <input type="text" id="name" name="name" placeholder="Nombre">
                </div>
                <div class="contact-left-rows">
                  <label for="phone">Teléfono</label>
                  <input type="phone" id="phone" name="phone" placeholder="Teléfono">
                </div>
              </div>
              <div class="contact-left-rows">
                <label for="email">Correo electrónico</label>
                <input type="email" id="email" name="email" placeholder="Coreo electrónico">
              </div>
              <div class="contact-left-rows">
                <label for="email">Mensaje</label>
                <textarea id="message" name="message" placeholder="Mensaje"></textarea>
              </div>
            </div>
          </form>
          <div class="contact-left-button">
            <button><a href="">Enviar mensaje</a></button>
          </div>
        </div>

        <div class="contact-right">
          <div class="contact-right-subtitle">
            <span>Empecemos una conversación</span>
          </div>
          <div class="contact-right-title">
            <h3>Hablemos de tu proyecto</h3>
          </div>
          <div class="contact-right-description">
            <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
          </div>
          <div class="contact-right-card-content">
            <div class="contact-right-card">
              <div class="contact-right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>phone-outline</title>
                  <path
                    d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
                </svg>
              </div>
              <div class="contact-right-text">
                <span>Teléfono: +34 666 666 666</span>
              </div>
            </div>
            <div class="contact-right-card">
              <div class="contact-right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>clock-outline</title>
                  <path
                    d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <div class="contact-right-text">
                <span>Lunes a Sábado: 9:00 - 18:00</span>
              </div>
            </div>
            <div class="contact-right-card">
              <div class="contact-right-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>map-marker-outline</title>
                  <path
                    d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                </svg>
              </div>
              <div class="contact-right-text">
                <span>Dirección: Ctra. Sóller, 21, 07300 Inca, Illes Balears</span>
              </div>
            </div>
          </div>
          <div class="contact-right-button">
            <button><a href=""><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                      fill="#0F0F0F"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                      fill="#0F0F0F"></path>
                  </g>
                </svg>Escribir por WhatsApp</a></button>
          </div>
        </div>
    `
  }
}

customElements.define('contact-component', Contact);
