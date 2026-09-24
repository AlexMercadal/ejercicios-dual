class Aside extends HTMLElement {

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
      aside{
        border:1px solid black;
        width:25%;
        height:100vh;
        background-color:#E6F4FE;
        position:fixed;
      }

      .menu{
        display:flex;
        flex-direction:column;
        padding:3rem;
      }

      .titles{
        display:flex;
        flex-direction:column;
        width:100%;
      }

      .subtitle{
        margin-bottom:-3rem;
      }

      .titles h3{
        font-size:1.2rem;
        color:gray;
      }

      .titles h2{
        font-size:4rem;
        font-weight:800;
      }
      
      .titles span{
        color:red;
      }

      .titles p{
        font-size:1rem;
      }



    </style>

    <aside>
      <div class="menu">
        <div class="titles">
          <div class="subtitle">
            <h3>alexmercadal.dev</h3>
          </div>
          <h2>Alex Mercadal<span>.</span>
          <p>Desarrollo frontend & diseño web<p>
        </div>
        <nav class="nav">
            <ul role="list">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Sobre mí</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <div class="img">
          <img src="" alt="">
        </div>
        <div class="social-media">
          <a href="#"><svg></svg></a>
          <a href="#"><svg></svg></a>
          <a href="#"><svg></svg></a>
        </div>
      </div>
    </aside>
    `
  }
}

customElements.define('aside-component', Aside);
