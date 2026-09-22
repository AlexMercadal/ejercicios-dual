class Form extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
    this.tabs()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      
      button {
        all: unset;
        cursor: pointer;
      }
      
      .form{
        padding:0 2rem;
        height:100%;
        display:flex;
        flex-direction:column;
      }

      .toolbar{
          display:flex;
          gap:5rem;
          align-items:center;
          border-bottom:1px solid #AB2309;
          justify-content:space-between;
          width:100%;
      }

      .toolbar-left{
        display:flex;
        gap:1.3rem;
      }

      .toolbar-left button{
        font-size:1.2rem;
        background-color:#AB2309;
        color:white;
        padding: 0.7rem 1rem;
      }

      .toolbar-right{
        display:flex;
        gap:1.5rem;
        background-color:#AB2309;
        padding: 0.5rem 1rem;
        color:white;
        
      }
      .toolbar-right-icon svg{
        height:1.5rem;
        fill:white;
        cursor:pointer;
      }

      .content{
        width:100%;
        background-color:white;
        padding: 1rem 0rem;
      }

      .data{
        width:100%;
        display:none;
        gap:1rem;
        padding:1rem;
      }

      .data.active{
        display:flex;
      }

      .form-data{
        display:grid;
        grid-template-columns:1fr 1fr;
        width:95%;
        gap:1rem;
      }

      .data-form{
        display:flex;
        flex-direction:column;
        gap:0.5rem;
      }

      .data-form label{
        font-family: 'Valley Sans', sans-serif;
        font-size: 0.9rem;
      }

      .data-form input{
        padding: 0.5rem;
        font-family:'Arimo';
        font-size: 0.8rem;
        font-weight:400;
      }




    </style>

    <div class="form">
      <div class="toolbar">
        <div class="toolbar-left">
          <button class="tab active" data-tab="General">General</button>
          <button class="tab" data-tab="Contacto">Contacto</button>
        </div>

        <div class="toolbar-right">
          <div class="toolbar-right-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
          </div>
          <div class="toolbar-right-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save-outline</title><path d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" /></svg>
          </div>
        </div>
      </div>
      
      <div class="content">
        <div class="data active" data-content="General">
          <form action="" class="form-data">

            <div class="data-form">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" >
            </div>

            <div class="data-form">
              <label for="email">Email</label>
              <input type="text" id="email" name="email">
            </div>
          </form>  
        </div>

        <div class="data" data-content="Contacto">
          <form action="" class="form-data">

            <div class="data-form">
              <label for="phone">Teléfono</label>
              <input type="text" id="phone" name="phone">
            </div>
            
            <div class="data-form">
              <label for="address">Dirección</label>
              <input type="text" id="address" name="address">
            </div>
          </form>
        </div>

      </div>
    </div>
    `
  }

  tabs() {
    const tabButtons = this.shadow.querySelector(".toolbar-left")

    tabButtons.addEventListener("click", event => {
      const tab = event.target.closest(".tab")

      if (tab) {

        this.shadow.querySelector(".tab.active").classList.remove("active")
        tab.classList.add("active")

        this.shadow.querySelector(".data.active").classList.remove("active")

        this.shadow
          .querySelector(`.data[data-content="${tab.dataset.tab}"]`)
          .classList.add("active")
      }
    })
  }
}

customElements.define('form-component', Form);