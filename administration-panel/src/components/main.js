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
        width:100%;
        height:85vh;
        background-color:#FBF4ED;
        padding-top:2rem;
      }

      .main-left{
        width:30%;
      }

      .main-right{
        width:70%;
      }
    </style>

    <main>
    <div class="main-left">
      <slot name="main-left"></slot>
    </div>
    <div class="main-right">
      <slot name="main-right"></slot>
    </div>
    </main>
    `

  }
}




customElements.define('main-component', Main);