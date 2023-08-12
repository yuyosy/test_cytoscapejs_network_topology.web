import { initCytoscape } from './cytoscape/init.js';
// import { elements1 } from './elements/elements1.js';
import { updateConnectedEdgesStatus } from './cytoscape/elementsActions.js';

const loadCytoscape = (dataName) => {
  /**
   * @type {import('./cytoscape/types').Core}
   */
  const cy = initCytoscape();
  fetch(`data/${dataName}.json`)
    .then((response) => response.json())
    .then((data) => {
      cy.add(data);
      cy.nodes().forEach(updateConnectedEdgesStatus);
      cy.center();
    })
    .catch((error) => {
      console.error(error);
    });
};

document.addEventListener('DOMContentLoaded', () => {
  loadCytoscape('elements1');
  console.log('Loaded');
});
