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

        .about-us {
            background-color: #0D0F11;
            padding: 5rem 0;
            width:100%;
        }

        .about-us-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5vh;
            padding: 0 5rem;
        }

        .about-us-content-left {
            position: relative;
            width: 100%;
            height: 60vh;
        }

        .about-us-content-left-image img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .about-us-content-right {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1rem;
        }

        .about-us-content-right-subtitle span {
            color: #14A7DE;
            text-transform: uppercase;
            font-family: "Saira Condensed", sans-serif;
            font-size: 1rem;
            letter-spacing: 0.15rem;
        }

        .about-us-content-right-title {
            width: 70%;
        }

        .about-us-content-right-title h3 {
            font-family: "Saira Condensed", sans-serif;
            color: white;
            font-size: 4rem;
            line-height: 1.1;
        }

        .about-us-content-right-description {}

        .about-us-content-right-description p {
            font-family: "Montserrat", sans-serif;
            font-size: 1.5rem;
            color: hsl(0, 0%, 75%);
            line-height: 1.7;
        }

        .about-us-content-right-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 60%;
            padding-top: 1.5rem;
        }

        .about-us-content-right-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            border: 0.1rem solid #707679;
            padding: 0.7rem;
            background-color: #08090A;
        }

        .about-us-content-right-card-title h4 {
            font-family: "Saira Condensed", sans-serif;
            color: #14A7DE;
            font-size: 1.3rem;
        }

        .about-us-content-right-card-description p {
            font-family: "Montserrat", sans-serif;
            font-size: 1rem;
            color: hsl(0, 0%, 75%);
            text-align: center;
        }
    </style>

        <section class="about-us">
      <div class="about-us-content">
        <div class="about-us-content-left">
          <div class="about-us-content-left-image">
            <img src="https://www.baleares-sinfronteras.com/wp-content/uploads/2022/04/bicis1.jpg" alt="">
          </div>
        </div>
        <div class="about-us-content-right">
          <div class="about-us-content-right-subtitle">
            <span>Sobre nosotros</span>
          </div>
          <div class="about-us-content-right-title">
            <h3>Un taller de barrio con nivel de taller de carrera.</h3>
          </div>
          <div class="about-us-content-right-description">
            <p>En Bike Repair Mallorca ofrecemos un servicio profesional de reparación, mantenimiento y puesta a punto
              de
              bicicletas en Mallorca. Revisamos cada bicicleta de forma personalizada para detectar posibles problemas y
              conseguir que vuelva a funcionar de manera segura, suave y fiable.</p>
          </div>
          <div class="about-us-content-right-cards">
            <div class="about-us-content-right-card">
              <div class="about-us-content-right-card-title">
                <h4>Diagnóstico sin coste</h4>
              </div>
              <div class="about-us-content-right-card-description">
                <p>Te decimos qué le pasa antes de tocar nada.</p>
              </div>
            </div>
            <div class="about-us-content-right-card">
              <div class="about-us-content-right-card-title">
                <h4>Recambio original</h4>
              </div>
              <div class="about-us-content-right-card-description">
                <p>Marcas de confianza, nunca genéricos dudosos.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    `
  }
}
customElements.define('about-us-component', Logo);