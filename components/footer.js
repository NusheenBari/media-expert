class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
    this.innerHTML = `
    <footer>
    <section class="footer">
     <div class="footer-logo">
         <h3 class="logo">Media Expert</h3>
         <p>Simple way to manage all your social media under one roof</p>
     </div>
     <div class="footer-menu-1">
         <ul>
             <li>Home</li>
             <li>About us</li>
             <li>Services</li>
             <li>Blog</li>
             <li>Help</li>
         </ul>
     </div>
     <div class="footer-menu-2">
         <ul>
             <li>Contact</li>
             <li>FAQ</li>
             <li>Our team</li>
             <li>Terms of use</li>
         </ul>
     </div>        
     <div class="contact">
         <p><a href="mailto:info@emaikl.com">info@emaikl.com</a></p>
         <p><a href="tel:+33-687-7793">+33-687-7793</a></p>
         <p>123 fake st, New City, New Country<br>012 ABC</p>
     </div>
    </section>
    <section class="footer-bottom">
        <div class="social">
            <ul>
                <li class="copy"><span>&#169;</span> 2021 All Rights Reserved</li>
                <li><a href=#>F</a></li>
                <li><a href=#>Instagram</a></li>
                <li><a href=#>Twitter</a></li>
                <li><a href=#>in</a></li>
                <li class="lang">EN</li>
            </ul>
        </div>
    </section>
</footer>
    `
  }
  }



  customElements.define('footer-component', Footer);  