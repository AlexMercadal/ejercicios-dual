class Hero extends HTMLElement {

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

    .hero {
    display: flex;
    padding: 10vh 10vh;
    height: 65vh;
    overflow: hidden;
}


.hero-content {
    display: flex;
    gap: 2rem;
}

.hero-content-left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    gap: 1rem;
    height: 65vh;
}

.hero-content-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10vh;
    width: 40%;
    height: 65vh;
    gap: 1rem;
    padding-top: 26.5vh;
}

.hero-content-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}


  .hero-content-title h1 {
        font-family: "Saira Condensed", sans-serif;
        font-size: 6rem;
        line-height: 1.1;
      }

      .hero-content-title span {
        color: #14A7DE;
      }

      .hero-content-subtitle span {
      color: #14A7DE;
      text-transform: uppercase;
      font-family: "Saira Condensed", sans-serif;
      font-size: 1rem;
      letter-spacing: 0.15rem;
}

 .hero-content-description p {
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
      color: hsl(195, 32%, 25%);
      line-height: 1.5;
    }

      .hero-content-button-left {
      background-color: #14A7DE;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 2rem;
    }

    .hero-content-button-left a {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1.1rem;
}

    .hero-content-button-left:hover {
      background-color: #000000;
      color: white;
  }

      .hero-content-button-right {
    background-color: #ffffff;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.205);
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content-button-right:hover {
    border: 1px solid black;
}

.hero-content-button-right a {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1.1rem;
}

.hero-content-button-right svg {
    margin-right: 0.5rem;
    width: 1rem;
}

    </style>

    <section class="hero">

      <div class="hero-content">
        <div class="hero-content-left">
           <div class="hero-content-subtitle">
      <span>taller de bicicletas · sa cabana, marratxí</span>
    </div>
            <div class="hero-content-title">
      <h1>Tu horquilla no <span class="title-highlight">flota</span> como debería. Nosotros la afinamos.</h1>
    </div>
        </div>

        <div class="hero-content-right">
          <div class="hero-content-description">
      <p>Especialistas en suspensión Fox, RockShox y Lefty, además de mecánica completa: cambios,frenos,ruedas y transmisión. Entra hoy, sal rodando hoy.</p>
    </div>
          <div class="hero-content-buttons">
               <div class="hero-content-button-left">
      <button><a href="">Reservar revisión</a></button>
    </div>
               <div class="hero-content-button-right">
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
        </div>
      </div>
    </section>
    `
  }
}


customElements.define('hero-component', Hero);
