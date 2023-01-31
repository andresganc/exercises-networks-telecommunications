import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Utils
// import {hourCurrent} from '../../assets/utils/hourCurrent.js'

@customElement('nc-time-control-desktop')
export class NCTimeControlDesktop extends LitElement {

    @property()
    timeTemp: Date = new Date();

    @property()
    time: string = '';

    /*
    connectedCallback() {
        super.connectedCallback();
        // this._timerInterval = setInterval(() => this.requestUpdate(), 1000);
        this.time = setInterval(() => this.timeTemp.toLocaleTimeString(), 1000 ) 
    }
      
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.time);
    }
    */

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
                            ${this.time}
                        </div>
                        <div>
                            <label for='inputUser'>Usuario</label>
                            <input type="text" id='inputUser' />
                        </div>
                        <div>
                            <label for='inputPassword'>Contraseña</label>
                            <input type="password" id='inputPassword' />
                        </div>
                        <div>
                            <button @click=${this.handleHour} type="button">Registrar</button>
                        </div>
                    </form>
                </section>
                <footer>
                    <small>Newsoft Computer</small>
                </footer>
            </main>
        `;
  }

  handleHour() {
    setInterval(() => {
        this.time = this.timeTemp.toLocaleTimeString()
    }, 1000) 
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
