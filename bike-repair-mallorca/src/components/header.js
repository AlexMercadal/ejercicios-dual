class Header extends HTMLElement {

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

      header {
        background-color: hsla(0, 0%, 97%, 1.00);
        height: 15vh;
        position: sticky;
        top: 0;
        z-index: 1003;
      }

      .top-bar {
        align-items: center;
        display: flex;
        gap: 3rem;
        justify-content: space-between;
        padding:  0.5rem 2rem;
      }

      .top-bar-right, .top-bar-left {
        align-items: center;
        display: flex;
        gap: 2rem;
      }

      .main-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0.35rem 0.5rem -0.3rem rgba(0, 0, 0, 0.18);
        padding: 0.5rem 2rem;
      }
    </style>

    <header>
      <div class="top-bar">
        <div class="top-bar-left">
          <slot name="topbar-left"></slot>
        </div>
        <div class="top-bar-right">
          <slot name="topbar-right"></slot>
        </div>
      </div>
      <div class="main-bar">
        <slot name="main"></slot>
      </div>
    </header>
    `
  }
}

customElements.define('header-component', Header);
