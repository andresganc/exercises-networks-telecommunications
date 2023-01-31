import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nc-time-control-desktop')
export class NCTimeControlDesktop extends LitElement {
  render() {
    return html` <h2>NC Time Control Desktop</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
