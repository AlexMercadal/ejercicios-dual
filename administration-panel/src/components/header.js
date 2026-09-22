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
      * {
        box-sizing: border-box;
      }

      header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 0 2rem;
        background-color:#AB2309;
      }
    </style>

    <header>
      <div class="title">
        <slot name="header-left">
        </slot>
      </div>
      <div class="bar-icon">
        <slot name="header-right">
        </slot>
      </div>
    </header>
    `

    this.shadow.querySelector('.bar-icon').addEventListener('click', () => {
    })

  }
}




customElements.define('header-component', Header);