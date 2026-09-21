class HeroBottom extends HTMLElement {

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

      .hero-post-background-content {}

      .hero-post-background {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50vh;
          overflow: hidden;
          z-index: 1001;
      }

      .hero-post-background img {
          position: relative;
          width: 70%;
          height: 100%;
          object-fit: cover;
          border-radius: 2rem;
          z-index: 1000;
      }

      .hero-image-top {
          position: relative;
          z-index: 1001;
          width: 20%;
          border-radius: 1rem;
          background-color: white;
          left: 40vh;
          top: -12vh;
      }

      .hero-image-text {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
      }

      .hero-image {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          position: relative;
          z-index: 1001;
      }

      .hero-image-middle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          position: relative;
          z-index: 1001;
      }

      .hero-image-middle::after {
          content: '';
          position: absolute;
          width: 0.1vh;
          height: 5vh;
          background-color: hsla(0, 0%, 50%, 0.582);
          right: -2.5vh;
          z-index: 1000;
      }

      .hero-image-middle::before {
          content: '';
          position: absolute;
          width: 0.1vh;
          height: 5vh;
          background-color: hsla(0, 0%, 50%, 0.582);
          left: -2.5vh;
          z-index: 1000;
      }

      .hero-image span:first-child {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.3rem;
      }

      .hero-image span:last-child {
          font-family: "Roboto Mono", monospace;
          font-size: 0.7rem;
          color: hsl(195, 32%, 25%);
          text-transform: uppercase;
      }

      .hero-image-middle span:first-child {
          font-family: "Saira Condensed", sans-serif;
          font-size: 1.3rem;
      }

      .hero-image-middle span:last-child {
          font-family: "Roboto Mono", monospace;
          font-size: 0.7rem;
          color: hsl(195, 32%, 25%);
          text-transform: uppercase;
      }
    </style>

    
    <section class="hero-post-background-content">
      <div class="hero-post-background">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5Gwzfo9sdvbPz2aZtzrUjqG9BASGpiHKYBmTA-iPickjgs5nOzgYNw1u&s=10"
          alt="bike-repair-mallorca">
      </div>
      <div class="hero-image-top">
        <div class="hero-image-text">
          <div class="hero-image">
            <span>24h</span>
            <span>express</span>
          </div>
          <div class="hero-image-middle">
            <span>100%</span>
            <span>reseñas 5★</span>
          </div>
          <div class="hero-image">
            <span>MTB · Road</span>
            <span>Gravel y e-bike</span>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('hero-bottom-component', HeroBottom);
