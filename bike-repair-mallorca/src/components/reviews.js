class Reviews extends HTMLElement {

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
      

img {
    width: 100%;
    object-fit: cover;
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

.customers {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding:10vh 10vh;
}

.customers-subtittle span {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1rem;
    color: #14A7DE;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
}

.customers-title {}

.customers-title h4 {
    font-family: "Saira Condensed", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 2.5rem;
}

.customers-percentage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

}

.customers-percentage span:last-child {
    position: relative;
    top: -2vh;
}

.customers-percentage :first-child {
    font-family: "Saira Condensed", sans-serif;
    font-size: 4rem;
    color: #14A7DE;
}

.customers-percentage :last-child {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1.3rem;
    color: #0D0F11;
}


.customers-review {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    gap: 3rem;
    padding: 5 0rem;
}

.customer-review {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #0D0F11;
    border-radius: 1rem;
    overflow: hidden;
    padding: 2rem;
    gap: 1rem;
    position: relative;
    width: 100%;
    left: 50%;
}

.customer-review-svg span {
    color: #14A7DE;
}

.customer-review-text span {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    color: hsl(0, 0%, 100%);
    width: 70%;
}

.customer-review-name {
    position: relative;
}

.customer-review-name span {
    font-family: "Saira Condensed", sans-serif;
    font-size: 1.2rem;
    color: #ffffff;
    position: relative;
    top: 1rem;

}

.customer-review-name::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10rem;
    height: 1px;
    background-color: #14A7DE;
}
    </style>

 <section>
      <div class="customers">
        <div class="customers-subtittle">
          <span>Nuestros clientes</span>
          <div class="customers-title">
            <h4>¿Que opinan los clientes sobre nosotros?</h4>
          </div>
        </div>
        <div class="customers-percentage">
          <span>100%</span>
          <span>de satisfacción</span>
        </div>

        <div class="customers-review">
          <div class="customer-review">
            <div class="customer-review-svg">
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div class="customer-review-text">
              <span>Trato cercano y precio
                justo. Ajustaron el cambio
                y los frenos en media hora.</span>
            </div>
            <div class="customer-review-name">
              <span>Marc T.</span>
            </div>
          </div>

          <div class="customer-review">
            <div class="customer-review-svg">
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div class="customer-review-text">
              <span>De vacaciones en Mallorca
                con una avería en el
                desviador. Me resolvieron
                rápido y seguí rodando.</span>
            </div>
            <div class="customer-review-name">
              <span>Tomas K.</span>
            </div>
          </div>

          <div class="customer-review">
            <div class="customer-review-svg">
              <span>★ ★ ★ ★ ★</span>
            </div>
            <div class="customer-review-text">
              <span>Llevé la horquilla sin rebote y me la dejaron como nueva el mismo día. Explican todo lo que
                hacen.</span>
            </div>
            <div class="customer-review-name">
              <span>Laura B.</span>
            </div>
          </div>
        </div>
    </section>
    `

  }
}
customElements.define('reviews-component', Reviews);
