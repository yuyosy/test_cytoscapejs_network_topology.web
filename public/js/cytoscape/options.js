import { cytoscapeStyles } from './styles.js';

/**
 * @type {import('./types').CytoscapeOptions}
 */
export const cytoscapeOptions = {
  container: document.getElementById('cytoscapeContainer'),
  style: cytoscapeStyles,
  layout: {
    name: 'preset',
    fit: true,
  },
  minZoom: 0.5,
  maxZoom: 5,
};
