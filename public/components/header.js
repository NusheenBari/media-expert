class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
    this.innerHTML = `
        <div class="navbar">
        <!--Navigation Bar-->
        <nav>
            <h3><a href="/">Media Expert</a></h3>
            <ul class="nav-menu">
                <li><a href="#">about us</a></li>
                <li><a href="#">service</a></li>
                <li><a href="/blog.html">blog</a></li>
                <li><a href="#">help</a></li>
            </ul>
        </nav>
        </div> 
    `
  }
  }

customElements.define('header-component', Header);  

