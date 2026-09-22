class ContactMap extends HTMLElement {

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
     .contact-map {
        width: 100%;
        overflow: hidden;
        padding-top:5rem;
        margin:0;
    }

    </style>

       <section class="contact-map">
      <div class="contact-map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6148.059391694572!2d2.683803376371407!3d39.604013504702145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297933625b16045%3A0xf942fc4b8ac9872a!2sBike%20Repair%20Mallorca!5e0!3m2!1ses!2ses!4v1788720413626!5m2!1ses!2ses"
          width="100%" height="400vh" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>
    `

  }
}

customElements.define('contact-map-component', ContactMap);
