class Jumbotron extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="banner">
      <img src="/images/heros/jacek-dylag-kH3Sr9K8EBA-unsplash (1).jpg" alt="banner" />
    </div>
    `;
    }
  }
  
  customElements.define('jumbotron-element', Jumbotron);
  