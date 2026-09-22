class Table extends HTMLElement {

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
    .table{
      display:flex;
      flex-direction:column;
      padding:0 2rem;
    }

    .toolbar{
        display:flex;
        align-items:center;
        border-bottom:1px solid #AB2309;
        justify-content:space-between;
        width:100%;
        align-items:center;
      }

      .toolbar-left{
        cursor:pointer;
        background-color:#AB2309;
        fill:white;
        padding: 0.5rem 1rem;

      }

      .toolbar-left svg{
        height: 1.5rem;
      }

      .toolbar-right{
        display:flex;
        gap:1rem;
        background-color:#AB2309;
        padding: 0.8rem 1rem;
        color:white;
      }

      .toolbar-right-arrow{
        display:flex;
        align-items:center;
      }

      .toolbar-right-arrow svg{
        height:1rem;
        fill:white;
        cursor:pointer;
      }

      .content{
        margin-top:1rem;
        border:1px solid #AB2309;
        background-color:white;
      }

      .data{
        display:flex;
        flex-direction:column;
        gap:1rem;
      }

      .data ul li{
        font-family:'Valley Sans', sans-serif;
        list-style:none;
        font-size: 0.9rem;
      }

      .data ul li span{
        font-family:'Arimo';
        font-weight:400;
      }

    </style>
    <div class="table">
      <div class="toolbar">
        <div class="toolbar-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-outline</title><path d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z" /></svg>
        </div>
        <div class="toolbar-right">
          <div class="toolbar-right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold-outline</title><path d="M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z" /></svg>
          </div>
          <div class="toolbar-right-center">
            <span>1/1</span>
          </div>
          <div class="toolbar-right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-bold-outline</title><path d="M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z" /></svg>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="data">
          <ul>
            <li>Nombre: <span>Carlos</span></li>
            <li>Email: <span>carlossedagambin@gmail.com</span></li>
            <li>Fecha de <span>creación: 2026-09-22</span></li>
            <li>Fecha de actualización: <span>2026-09-22</span></li>
          </ul>
        </div>
      </div>
    </div>  
    `

  }
}




customElements.define('table-component', Table);