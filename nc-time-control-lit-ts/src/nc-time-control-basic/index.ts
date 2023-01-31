import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './NCTimeControlDesktop.js';
import './NCTimeControlMobile.js';

@customElement('index-nc-time-control')
export class IndexNav extends LitElement {
  render() {
    if (window.screen.width > 425) {
      return html`<nc-time-control-desktop></nc-time-control-desktop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<nc-time-control-mobile></nc-time-control-mobile>`;
    }
    return html`Error al cargar el menu`;
  }
}
