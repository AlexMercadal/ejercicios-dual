class Main extends HTMLElement {

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
      main{
        display:flex;
        flex-direction:column;
        gap:1rem;
        width:100%;
      }
    </style>

    <main>
      <hero-component></hero-component>
      <hero-bottom-component></hero-bottom-component>
      <slider-brands-component></slider-brands-component>
      <hero-services-component></hero-services-component>
      <about-us-component></about-us-component>
      <hero-timeline-component></hero-timeline-component>
      <banner-component></banner-component>
      <reviews-component></reviews-component>
      <contact-component></contact-component>
      <contact-map-component></contact-map-component>
    </main>
    `

  }
}




customElements.define('main-component', Main);