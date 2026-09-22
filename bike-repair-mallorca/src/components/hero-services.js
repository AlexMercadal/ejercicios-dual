class HeroServices extends HTMLElement {

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
          .hero-services {
          display: flex;
          flex-direction: column;
          padding:10vh 10vh;
      }

      .hero-services-titles {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 5vh;
      }

      .hero-services-title {
          width: 50%;
      }

      .hero-services-title h3 {
          font-family: "Saira Condensed", sans-serif;
          font-size: 5rem;
          width: 100%;
      }

      .hero-services-description {
          width: 60%;
      }


      .hero-services-description p {
          font-family: "Montserrat", sans-serif;
          font-size: 1.2rem;
          color: hsl(195, 32%, 25%);
          line-height: 1.5;
      }

      .hero-services-cards {
          display: flex;
          flex-direction: column;
      }


      .hero-services-card {
          display: grid;
          grid-template-columns: 0.2fr 2fr 2fr;
          padding-top: 3vh;
          height: 20vh;
          border: 1px solid black;
          align-items: center;

      }


      .hero-services-card-number {
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .hero-services-card-number span {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1rem;
          color: #14A7DE;
      }

      .hero-services-card-title h4 {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.5rem;
      }

      .service-row {
          display: grid;
          grid-template-columns: 0.2fr 2fr 2fr;
          padding-top: 3vh;
          height: 20vh;
          border-bottom: 1px solid hsl(195, 32%, 25%);
          gap: 10vh;
      }

      .hero-services-titles+.service-row {
          border-top: 1px solid hsl(195, 32%, 25%);

      }

      .service-index {
          padding-left: 2vh;
          color: #14A7DE;
          font-size: 2vh;
      }

      .service-title {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.8rem;
      }

      .service-body {
          display: flex;
          flex-direction: column;
          gap: 1.5vh;
      }

      .service-body p {
          font-family: "Montserrat", sans-serif;
          font-size: 1.3rem;
          color: hsl(195, 32%, 25%);
          width: 80%;
      }

      .tags {
          display: flex;
          gap: 2vh;
          width: 100%;
      }

      .tags span {
          background-color: white;
          color: black;
          padding: 0.5vh 1vh;
          border-radius: 1rem;
          border: 0.1vh solid rgba(0, 0, 0, 0.329);
          font-family: "Montserrat", sans-serif;
          font-size: 0.9rem;
      }

      .service-row:hover {
          background-color: #f8f8f8;
      }

      .hero-services-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1vh;
          padding-top: 1rem;
          cursor: pointer;
      }

      .hero-services-button::after {
          content: '';
          position: absolute;
          background-color: black;
          width: 5.9%;
          height: 1px;
          bottom: 1px;
      }

      .hero-services-button:hover::after {
          background-color: #14A7DE;
      }

      .hero-services-button:hover button {
          color: #14A7DE;
      }

      .hero-services-button:hover svg {
          fill: #14A7DE;
      }

      .hero-services-button svg {}

      .hero-services-button button {
          color: black;
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.2rem;
      }

      .hero-services-button svg {
          width: 2rem;
      }
    </style>

    <section class="hero-services">
      <div class="hero-services-titles">
        <div class="hero-services-title">
          <h3>De la horquilla a la última eslabón de cadena.</h3>
        </div>
        <div class="hero-services-description">
          <p>En Bike Repair Mallorca ofrecemos un servicio profesional de reparación, mantenimiento y puesta a punto de
            bicicletas en Mallorca. Revisamos cada bicicleta de forma personalizada para detectar posibles problemas y
            conseguir que vuelva a funcionar de manera segura, suave y fiable.</p>
          <br>
          <p> Tanto si necesitas solucionar una avería como realizar el mantenimiento habitual de tu bicicleta, en
            nuestro
            taller encontrarás un servicio cercano, profesional y adaptado a las necesidades de cada ciclista.</p>
        </div>
      </div>

      <div class="service-row">
        <div class="service-index">
          <span>01</span>
        </div>
        <div class="service-title">
          <h3>Suspensión</h3>
        </div>
        <div class="service-body">
          <p>Nuestra especialidad: horquillas y amortiguadores puestos a punto para tu peso y tu terreno.</p>
          <div class="tags">
            <span class="tag">FOX, ROCKSHOX Y LEFTY</span>
            <span class="tag">RETENES Y ACEITE</span>
            <span class="tag">AJUSTE DE SAG Y REBOTE</span>
          </div>
        </div>
      </div>

      <div class="service-row">
        <div class="service-index">
          <span>02</span>
        </div>
        <div class="service-title">
          <h3>Transmisión</h3>
        </div>
        <div class="service-body">
          <p>Cambios precisos y silenciosos, con desgaste medido antes de sustituir piezas.</p>
          <div class="tags">
            <span class="tag">AJUSTE DE CAMBIO</span>
            <span class="tag">CADENA, CASETE Y PLATOS</span>
            <span class="tag">GRUPOS ELECTRÓNICOS</span>
          </div>
        </div>
      </div>

      <div class="service-row">
        <div class="service-index"><span>03</span></div>
        <div class="service-title">
          <h3>Frenos y ruedas</h3>
        </div>
        <div class="service-body">
          <p>Frenada segura y ruedas centradas para bajar la Tramuntana sin sustos.</p>
          <div class="tags">
            <span class="tag">PURGADO HIDRÁULICO</span>
            <span class="tag">PASTILLAS Y DISCOS</span>
            <span class="tag">CENTRADO Y RADIOS</span>
          </div>
        </div>
      </div>

      <div class="service-row">
        <div class="service-index"><span>04</span></div>
        <div class="service-title">
          <h3>Mantenimiento preventivo</h3>
        </div>
        <div class="service-body">
          <p>Revisamos tu bicicleta de forma periódica para prevenir averías y alargar la vida de cada componente.</p>
          <div class="tags">
            <span class="tag">REVISIÓN GENERAL</span>
            <span class="tag">PAR DE APRIETE</span>
            <span class="tag">PUESTA A PUNTO</span>
          </div>
        </div>
      </div>

      <div class="hero-services-button">
        <button><a href="">Hablemos</a></button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>arrow-right-thin</title>
          <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
        </svg>
      </div>
    </section>

    `

  }
}

customElements.define('hero-services-component', HeroServices);