import { LitElement, html, css } from 'lit';

export class NCTimeControlUserMobile extends LitElement {
  render() {
    return html` <h2>NC Time Control User Mobile</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}

customElements.define('nc-time-control-user-mobile', NCTimeControlUserMobile);
