class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar">
            <ul>
                <li><a href="./home.html">Accueil</a></li>
                <li><a href="./home.html#stats">Statistiques</a></li>
                <li><a href="./player.html">Musiques</a></li>
            </ul>
        </div>
        `;
  }
}

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <h6>
            © Copyright 2024-2040, AGIUS Angelo<br>
            Source code by <a href="https://www.instagram.com/angelochezinsta/" target="_blank">AGIUS Angelo</a><br>
            Powered by <a href="https://github.com" target="_blank">GitHub</a>
        </h6>
        `;
  }
}

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
