class Footer extends HTMLElement {

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
    footer {
      width: 100%;
      background-color: #0D0F11;
      padding-top: 2rem;
    }

    .footer-top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 10rem;
      overflow:hidden;
      background-color: #0000001a;
    }

    </style>

   <footer>
    <div class="footer-top">
      <div class="footer-content-left">
        <slot name="footer-left"></slot>
      </div>

      <div class="footer-content-middle">
        <slot name="footer-middle"></slot>
      </div>

      <div class="footer-content-right">
        <slot name="footer-right"></slot>
      </div>
    </div>

    <div class="footer-bottom">
      <slot name="footer-bottom"></slot>
    </div>
  </footer>
    `
  }
}

customElements.define('footer-component', Footer);
