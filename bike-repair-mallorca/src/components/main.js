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
      <slot></slot>
    </main>
    `

  }
}




customElements.define('main-component', Main);