class SliderBrands extends HTMLElement {

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
     .slider-brands {
    overflow: hidden;
    width: 100%;
    background: white;
    white-space: nowrap;
}

.slider-brand {
    display: inline-flex;
    align-items: center;
    animation: scroll 20s linear infinite;
}

.logo-item {
    display: inline-flex;
    align-items: center;
}

.logo-item img {
    width: auto;
    max-height: 10vh;
    margin: 0 5vh;
    transition: transform 0.5s ease-in-out;
}

.logo-item::after {
    content: "·";
    font-size: 5vh;
    color: hsl(195, 32%, 25%);
    margin: 0;
}


.slider-brand img {
    width: 10vh;
    margin: 0 10vh;
    transition: transform 0.5s ease-in-out;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
    </style>

    
    <section class="slider-brands">
      <div class="slider-brand">
        <span class="logo-item"><img
            src="https://www.santabikes.es/web/image/product.template/8919/image_1024?unique=a295247"
            alt="fox-bike"></span>
        <span class="logo-item"><img src="https://cdn.worldvectorlogo.com/logos/shimano.svg" alt="shimano-bike"></span>
        <span class="logo-item"><img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Magura_2010_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
            alt="magura-bike"></span>
        <span class="logo-item"><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM2ytfmZcUVjojfwHrqiim6SPB4DFj3gF_35yWYYm_g&s=10"
            alt="rockshox-bike"></span>
        <span class="logo-item"><img src="https://www.sram.com/globalassets/publicsites/brand-logos/sram-logo.png"
            alt="sram-bike"></span>
        <span class="logo-item"><img
            src="https://www.santabikes.es/web/image/product.template/8919/image_1024?unique=a295247"
            alt="fox-bike"></span>
        <span class="logo-item"> <img src="https://cdn.worldvectorlogo.com/logos/shimano.svg" alt="shimano-bike"></span>
        <span class="logo-item"> <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Magura_2010_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
            alt="magura-bike"></span>
        <span class="logo-item"> <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM2ytfmZcUVjojfwHrqiim6SPB4DFj3gF_35yWYYm_g&s=10"
            alt="rockshox-bike"></span>
        <span class="logo-item"><img src="https://www.sram.com/globalassets/publicsites/brand-logos/sram-logo.png"
            alt="sram-bike"></span>
      </div>

    </section>
    `

  }
}

customElements.define('slider-brands-component', SliderBrands);