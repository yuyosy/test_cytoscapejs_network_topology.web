const cssStyle = `
p {
  margin: 8px;
}
#title {
    font-weight: 600;
}
`;

export class Popover extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const styleElement = document.createElement('style');
    styleElement.textContent = cssStyle;
    const header = document.createElement('div');
    header.id = 'header';
    const span = document.createElement('span');
    span.id = 'title';
    header.appendChild(span);
    const body = document.createElement('div');
    body.id = 'body';
    this.shadowRoot.appendChild(styleElement);
    this.shadowRoot.appendChild(header);
    this.shadowRoot.appendChild(body);
  }

  /**
   * @param {import('../cytoscape/types').EventObject} event
   */
  setValue(event) {
    const titleElement = this.shadowRoot.getElementById('title');
    const bodyElement = this.shadowRoot.getElementById('body');
    titleElement.innerText = event.target.data('label');
    bodyElement.innerHTML = `
    <p>ID: ${event.target.data('id')}</p>
    ${event.target.data('parent') ? `<p>Parent: ${event.target.data('parent')}</p>` : ''}
    ${
      event.target.data('position')
        ? `<p>Position: ${JSON.stringify(event.target.data('position'))}</p>`
        : ''
    }
    `;
  }
}
