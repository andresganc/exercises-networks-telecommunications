import { html, css, LitElement } from 'lit';

// Components
import './nc-time-control-basic/index.js';

export class NcTimeControlLitTs extends LitElement {
  render() {
    return html` <index-nc-time-control></index-nc-time-control> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
