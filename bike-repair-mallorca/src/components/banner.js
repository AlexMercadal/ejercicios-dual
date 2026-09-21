class Banner extends HTMLElement {

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
              .banner-call-to-action {
              background-color: #0D0F11;
              position: relative;
              height: 30vh;
              margin-left: -5rem;
              margin-right: -5rem;
              overflow: hidden;
              display: flex;
              justify-content: space-around;
              align-items: center;
          }

          .banner-call-to-action-content-elements {
              padding: 1rem 5rem;
              width: 100%;
              text-align: center;
              position: relative;
          }

          .banner-call-to-action-content-elements::after {
              content: "";
              position: absolute;
              background-color: white;
              width: 1px;
              height: 5rem;
              top: 3.5vh;
              right: 0;
          }

          .banner-call-to-action-content-elements:last-child::after {
              display: none;
          }

          .banner-call-to-action-content {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
          }


          .banner-call-to-action-content-svg svg {
              width: 25px;
              fill: #14A7DE;
          }

          .banner-call-to-action-content-title span {
              font-family: "Saira Condensed", sans-serif;
              color: rgb(255, 255, 255);
              font-size: 2.5rem;
          }

          .banner-call-to-action-content-description span {
              font-family: "Montserrat", sans-serif;
              font-size: 1rem;
              color: hsl(0, 0%, 100%);
              width: 70%;
          }

          .banner-call-to-action-content-element-button {
              display: flex;
              justify-content: center;
              align-items: center;

          }

          .banner-call-to-action-content-element-button a {
              color: white;
          }
    </style>

  <section class="banner-call-to-action">
      <div class="banner-call-to-action-content">
        <div class="banner-call-to-action-content-elements">
          <div class="banner-call-to-action-content-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>wrench-outline</title>
              <path
                d="M22.61,19L13.53,9.91C14.46,7.57 14,4.81 12.09,2.91C9.79,0.61 6.21,0.4 3.66,2.26L7.5,6.11L6.08,7.5L2.25,3.69C0.39,6.23 0.6,9.82 2.9,12.11C4.76,13.97 7.47,14.46 9.79,13.59L18.9,22.7C19.29,23.09 19.92,23.09 20.31,22.7L22.61,20.4C23,20 23,19.39 22.61,19M19.61,20.59L10.15,11.13C9.54,11.58 8.86,11.85 8.15,11.95C6.79,12.15 5.36,11.74 4.32,10.7C3.37,9.76 2.93,8.5 3,7.26L6.09,10.35L10.33,6.11L7.24,3C8.5,2.95 9.73,3.39 10.68,4.33C11.76,5.41 12.17,6.9 11.92,8.29C11.8,9 11.5,9.66 11.04,10.25L20.5,19.7L19.61,20.59Z" />
            </svg>
          </div>
          <div class="banner-call-to-action-content-title">
            <span>12+</span>
          </div>
          <div class="banner-call-to-action-content-description">
            <span>años de experiencia</span>
          </div>
        </div>

        <div class="banner-call-to-action-content-elements">
          <div class="banner-call-to-action-content-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>bike</title>
              <path
                d="M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z" />
            </svg>
          </div>
          <div class="banner-call-to-action-content-title">
            <span>3.400</span>
          </div>
          <div class="banner-call-to-action-content-description">
            <span>bicicletas revisadas</span>
          </div>
        </div>

        <div class="banner-call-to-action-content-elements">
          <div class="banner-call-to-action-content-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>star-outline</title>
              <path
                d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
            </svg>
          </div>
          <div class="banner-call-to-action-content-title">
            <span>4.9/5</span>
          </div>
          <div class="banner-call-to-action-content-description">
            <span>valoración media</span>
          </div>
        </div>
      </div>


    </section>

    `
  }
}

customElements.define('banner-component', Banner);
