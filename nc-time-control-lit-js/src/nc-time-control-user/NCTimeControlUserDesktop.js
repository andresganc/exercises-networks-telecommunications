import { LitElement, html, css } from 'lit';

export class NCTimeControlUserDesktop extends LitElement {
  static properties = {
    timeTemp: Date,
    time: String,
  };

  constructor() {
    super();
    this.timeTemp = new Date();
    this.time = '';
  }

  connectedCallback() {
    super.connectedCallback();
    setInterval(() => {
      this.time = this.timeTemp.toLocaleTimeString();
    }, 1000);
  }

  attributeChangedCallback() {
    super.attributeChangedCallback();
    setInterval(() => {
      this.time = this.timeTemp.toLocaleTimeString();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timeTemp);
  }

  render() {
    return html`
      <main>
        <header>
          <h4>CONTROL DE TIEMPO</h4>
          <h5>Newsoft Computer</h5>
        </header>
        <section>
          <form>
            <div>
              <h2>HORA: ${this.time}</h2>
            </div>
            <div>
              <label for="inputUser">Usuario</label>
              <input type="text" id="inputUser" />
            </div>
            <div>
              <label for="inputPassword">Contraseña</label>
              <input type="password" id="inputPassword" />
            </div>
            <div>
              <button type="button">Registrar entrada</button>
            </div>
          </form>
        </section>
        <footer>
          <small>Newsoft Computer</small>
        </footer>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}

customElements.define('nc-time-control-user-desktop', NCTimeControlUserDesktop);
