import { LitElement, html, css } from 'lit';

// Components
import './nc-time-control-user/index.js';

export class NcTimeControlLitJs extends LitElement {
  render() {
    return html` <index-nc-time-control-user></index-nc-time-control-user> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
