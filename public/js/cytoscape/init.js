import cytoscape from 'https://cdn.jsdelivr.net/npm/cytoscape@3.26.0/+esm';
import { cytoscapeOptions } from './options.js';
import * as handlers from './eventHandlers.js';

/**
 * @returns {import('./types').Core} Cytoscape entry point
 */
export const initCytoscape = () => {
  /**
   * @type {import('./types').Core}
   */
  const cy = cytoscape(cytoscapeOptions);
  cy.on('select', 'node', handlers.selectNodeHandler);
  cy.on('unselect', 'node', handlers.unselectNodeHandler);
  cy.on('mouseover', 'node:child', handlers.mouseoverNodeHandler);
  cy.on('mouseout', 'node:child', handlers.mouseoutNodeHandler);
  cy.on('scrollzoom', handlers.scrollZoomHandler);
  return cy;
};
