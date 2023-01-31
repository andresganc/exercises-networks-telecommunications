import { LitElement, html, css } from 'lit';

// Components
import './NCTimeControlUserDesktop.js';
import './NCTimeControlUserMobile.js';

export class Index extends LitElement {
  render() {
    if (window.screen.width > 768) {
      return html`<nc-time-control-user-desktop></nc-time-control-user-desktop>`;
    }
    if (
      window.screen.width <= 768 ||
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<nc-time-control-user-mobile></nc-time-control-user-mobile>`;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

customElements.define('index-nc-time-control-user', Index);
