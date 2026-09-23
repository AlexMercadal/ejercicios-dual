class Sidebar extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
    this.color = this.getAttribute('color')
    this.message = this.getAttribute('message')
    this.data = []
  }

  connectedCallback() {
    this.loadData()
    this.render()
  }

  loadData() {
    this.data = [
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },
      {
        name: 'Lorem',
        url: '#',
      },

    ]
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
          * {
            box-sizing: border-box;
          }


          body {
            margin: 0;
          }

          main {
            display: flex;
            flex-direction: column;
            gap: 10vh;
            padding-left: 5rem;
            padding-right: 5rem;
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
            color: white
          }

          ul,
          ol {
            margin: 0;
            padding: 0;
            list-style: none;
            color: white
          }

          span {
            color: white
          }

          svg {
            fill: white
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            all: unset;
            cursor: pointer;
          }


          aside {
            display: flex;
            flex-direction: column;
            width: 20%;
            z-index: 1001;
            background-color: hsl(0, 0%, 6%);
            height:100vh;
          }

          .aside-right {
            left: 0;
            position: fixed;
            top: 0;
            transition: all 1s ease;
            z-index:1001;
          }

          .aside-right.inactive {
            background-color: red;
          }

          .aside-left {
            width: 2%;
            position: fixed;
            left: -10%;
            height: 100%;
            overflow: hidden;
            transition: all 0.5s ease;
          }


          .aside-left.active {
            left: 0%;
          }

          .aside-right.inactive {
            left: -100%;
          }

          .sidebar-active::-webkit-scrollbar-thumb,
          .sidebar-active::-webkit-scrollbar-thumb {
            background-color: #181818;
          }

          .sidebar-active::-webkit-scrollbar,
          .sidebar-active::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background-color: white;
          }

          .sidebar-active::-webkit-scrollbar:horizontal,
          .sidebar-active::-webkit-scrollbar:horizontal {
            display: none;
          }

          .sidebar-active::-webkit-scrollbar-thumb:active,
          .sidebar-active::-webkit-scrollbar-thumb:active {
            background-color: #313131;
          }

          .sidebar-active::-webkit-scrollbar-thumb:hover,
          .sidebar-active::-webkit-scrollbar-thumb:hover {
            background-color: #313131;
          }


          .sidebar-left {
            cursor: pointer;
          }

          .sidebar-active {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            height:100vh;
            overflow:scroll;
          }

          .sidebar-top {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .sidebar-top h2 {
            font-family: "Google Sans", sans-serif;
            font-size: 1rem;
          }

          .sidebar-top-title {
            width: 60%;
          }

          .sidebar-top-icons {
            width: 40%;
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            cursor: pointer;
          }

          .sidebar-top-icons svg {
            width: 20%;
          }

          .sidebar-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: sticky;
            top: 0;
            left: 0;
            z-index: 1002;
            background-color: #181818;
            margin-bottom: 5vh;
          }

          .sidebar-main-menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 0.5rem 0.5rem 0.5rem 0;
            gap: 0.5rem;
          }

          .sidebar-main-menu:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .side-main-menu:active {
            background-color: rgba(255, 255, 255, 0.2);
          }


          .sidebar-main-menu span {
            width: 90%;
            font-family: "Google Sans", sans-serif;
            font-size: 1rem;
          }

          .sidebar-main-menu svg {
            width: 8%;
          }



          .sidebar-fixed {
            width: 100%;
            height: 20vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 0.2rem;
          }

          .sidebar-fixed-title {
            width: 100%;
          }

          .sidebar-fixed-title h3 {
            font-family: "Google Sans", sans-serif;
            font-size: 1.3rem;
            text-align: left;
          }

          .sidebar-folders {
            display: flex;
            flex-direction: column;

          }

          .sidebar-folder {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            cursor: pointer;
            padding: 0.5rem 0.5rem 0.5rem 0;
            gap: 0.5rem;
          }

          .sidebar-folder:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .sidebar-folder:active {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .sidebar-folder svg {
            width: 10%;
          }

          .sidebar-folder span {
            width: 90%;
            font-family: "Valley Sans", sans-serif;
          }

          .sidebar-bottom-title {
            padding-bottom: 1rem;
          }

          .sidebar-bottom-title h3 {
            font-family: "Google Sans", sans-serif;
            font-size: 1.3rem;
            text-align: left;
          }

          .sidebar-chat {
            cursor: pointer;
          }

          .sidebar-chat::after {
            content: "";
            height: 100%;
            width: 3vh;
            background: linear-gradient(90deg, rgba(15, 15, 15, 0.51) 0%, rgba(15, 15, 15, 1) 100%);
            position: absolute;
            margin: 10rem 0 0 0;
            right: 0;
            top: 0%;
            z-index: 1001;
          }

          .sidebar-chat li {
            font-family: "Valley Sans", sans-serif;
            font-size: 1rem;
          }

          .sidebar-chat ul {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

          }

          .sidebar-chat li {
            padding: 0.5rem 0.5rem 0.5rem 0;
          }

          .sidebar-chat li:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .sidebar-chat li:active {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .sidebar-footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
            position: absolute;
            z-index: 1001;
            flex-shrink: 0;
            bottom:0;
          }

          .sidebar-footer-user {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background-color: hsl(138, 74%, 39%);
            padding: 0.2rem;
          }

          .sidebar-user {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            padding-left: 1rem;
          }

          .sidebar-user svg {
            width: 10%;
          }

          .sidebar-user span {
            width: 90%;
            font-family: "Google Sans", sans-serif;
            font-size: 1rem;
          }


          .sidebar-inactive {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;

          }

          .sidebar-inactive svg {
            width: 100%;
          }

    </style>

  <aside class="aside-right">
    <div class="sidebar-active">
      <div class="sidebar-top">
        <div class="sidebar-top-title">
          <h2>Chat GPT</h2>
        </div>
        <div class="sidebar-top-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>magnify</title>
            <path
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
          <svg class="sidebar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>inbox</title>
            <path
              d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
          </svg>
        </div>
      </div>

      <div class="sidebar-main">
        <div class="sidebar-main-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>button-pointer</title>
            <path
              d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
          </svg>
          <span>Nuevo chat</span>
        </div>
      </div>

      <div class="sidebar-fixed">
        <div class="sidebar-fixed-title">
          <h3>Proyectos</h3>
        </div>

        <div class="sidebar-folders">
          <div class="sidebar-folder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>folder-outline</title>
              <path
                d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
            </svg>
            <span>Carpeta</span>
          </div>

          <div class="sidebar-folder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>folder-outline</title>
              <path
                d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
            </svg>
            <span>Carpeta</span>
          </div>

          <div class="sidebar-folder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>folder-outline</title>
              <path
                d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
            </svg>
            <span>Carpeta</span>
          </div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-bottom-title">
          <h3>Chats</h3>
        </div>
        <div class="sidebar-chat">
        <ul></ul>
        </div>
      </div>
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-footer-user">
        <div class="sidebar-user">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>account-outline</title>
            <path
              d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
          </svg>
          <span>Usuario</span>
        </div>

      </div>
    </div>
  </aside>


  <aside class="aside-left">
    <div class="sidebar-inactive">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
      <svg class="sidebar-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>inbox</title>
        <path
          d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>folder-outline</title>
        <path
          d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
      </svg>

    </div>
  </aside>
    `

    const ul = this.shadow.querySelector('ul')

    this.data.forEach(chat => {
      const link = document.createElement('li')
      link.ul = chat.url
      link.textContent = chat.name
      ul.appendChild(link)
    })

    this.shadow.querySelector('.sidebar').addEventListener("click", () => {
      this.shadow.querySelector('.aside-right').classList.toggle('inactive');
      this.shadow.querySelector('.aside-left').classList.toggle('active');
      this.shadow.querySelector('main').classList.toggle('active');
    })

    this.shadow.querySelector('.sidebar-left').addEventListener("click", () => {
      this.shadow.querySelector('.aside-right').classList.toggle('inactive');
      this.shadow.querySelector('.aside-left').classList.toggle('active');
      this.shadow.querySelector('main').classList.toggle('active');
    })
  }
}

customElements.define('sidebar-component', Sidebar);
