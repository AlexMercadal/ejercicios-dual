class HeroTimeline extends HTMLElement {

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

    .hero-timeline-services{
      padding:10vh 10vh;
    }
        .hero-timeline-services-top {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .hero-timeline-services-top-subtitle span {
        font-family: "Saira Condensed", sans-serif;
        font-size: 1rem;
        color: #14A7DE;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
    }

    .hero-timeline-services-title {
        font-family: "Saira Condensed", sans-serif;
        color: rgb(0, 0, 0);
        font-size: 4rem;
        line-height: 1.1;
        padding-bottom: 5rem;
    }


    .hero-timeline-services-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0.5rem;
    }

    .hero-timeline-service::before {
        content: '';
        background-color: #14A7DE;
        width: 90%;
        height: 2px;
        margin-bottom: 1rem;
    }

    .hero-timeline-service {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        align-items: flex-start;
    }

    .hero-timeline-service-subtitle {
        margin: -3vh 0;
    }

    .hero-timeline-service-subtitle span {
        font-family: "Saira Condensed", sans-serif;
        font-size: 4rem;
        color: #2674b446;
    }

    .hero-timeline-service-title h3 {
        font-family: "Saira Condensed", sans-serif;
        color: rgb(0, 0, 0);
        font-size: 2.5rem;
    }

    .hero-timeline-service-descrption p {
        font-family: "Montserrat", sans-serif;
        font-size: 1rem;
        color: hsl(0, 0%, 0%);
        width: 70%;
    }

    .hero-timeline-service:hover {
        background-color: #f4f4f4;
    }

    </style>

    <section class="hero-timeline-services">
      <div class="hero-timeline-services-top">
        <div class="hero-timeline-services-top-subtitle">
          <span>cómo trabajamos</span>
        </div>
        <div class="hero-timeline-services-title">
          <h3>Cuatro pasos, un mismo día.</h3>
        </div>
      </div>
      <div class="hero-timeline-services-cards">
        <div class="hero-timeline-service">
          <div class="hero-timeline-service-subtitle">
            <span>01</span>
          </div>
          <div class="hero-timeline-service-title">
            <h3>Recepción</h3>
          </div>
          <div class="hero-timeline-service-descrption">
            <p>Nos cuentas el problema o lo detectamos en revisión. Sin cita previa para urgencias.</p>
          </div>
        </div>

        <div class="hero-timeline-service">
          <div class="hero-timeline-service-subtitle">
            <span>02</span>
          </div>
          <div class="hero-timeline-service-title">
            <h3>Diagnóstico</h3>
          </div>
          <div class="hero-timeline-service-descrption">
            <p>Identificamos la avería exacta, en suspensión, transmisión, frenos o cualquier otro componente.</p>
          </div>
        </div>

        <div class="hero-timeline-service">
          <div class="hero-timeline-service-subtitle">
            <span>03</span>
          </div>
          <div class="hero-timeline-service-title">
            <h3>Reparación</h3>
          </div>
          <div class="hero-timeline-service-descrption">
            <p>Trabajo mecánico con recambios de marcas de confianza. Taller limpio y organizado.</p>
          </div>
        </div>

        <div class="hero-timeline-service">
          <div class="hero-timeline-service-subtitle">
            <span>04</span>
          </div>
          <div class="hero-timeline-service-title">
            <h3>Entrega</h3>
          </div>
          <div class="hero-timeline-service-descrption">
            <p>Tu bici sale limpia y en perfectas condiciones, lista para la Serra de Tramuntana.</p>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

customElements.define('hero-timeline-component', HeroTimeline);