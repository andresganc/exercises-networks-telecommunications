import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nc-time-control-mobile')
export class NCTimeControlMobile extends LitElement {
  render() {
    return html` <h2>NC Time Control Mobile</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
