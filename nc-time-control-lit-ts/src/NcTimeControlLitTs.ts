import { html, css, LitElement } from 'lit';

export class NcTimeControlLitTs extends LitElement {
  render() {
    return html` <h2>My App</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
