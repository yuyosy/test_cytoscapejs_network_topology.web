const compactShapes = ['diamond', 'hexagon'];

/**
 * @type {import('../types/cytoscapejs.types').Stylesheet[]}
 */
export const cytoscapeStyles = [
  {
    selector: 'node',
    style: {
      label: 'data(label)',
      'background-color': '#ffffff',
      'border-color': 'gray',
      'border-style': 'solid',
      'border-width': '1px',
    },
  },
  {
    selector: 'node.hover',
    style: {
      'border-width': '2px',
    },
  },
  {
    selector: 'node[bg]',
    style: {
      'background-color': 'data(bg)',
    },
  },
  {
    selector: 'node[shape]',
    style: {
      shape: 'data(shape)',
    },
  },
  {
    selector: 'node[icon]',
    style: {
      'background-image': (el) => `images/cytoscape-icons/${el.data('icon')}.svg`,
      'background-height': (el) => (compactShapes.includes(el.data('shape')) ? '60%' : '80%'),
      'background-width': (el) => (compactShapes.includes(el.data('shape')) ? '60%' : '80%'),
    },
  },
  {
    selector: ':parent',
    style: {
      'background-color': '#eceff1',
    },
  },
  {
    selector: 'edge',
    style: {
      width: 3,
      lineColor: '#78909c',
      label: 'data(label)',
      'font-size': '.8em',
      'source-label': 'data(source_label)',
      'target-label': 'data(target_label)',
      'text-rotation': 'none',
      'text-margin-x': '0px',
      'text-margin-y': '-10px',
      'source-text-offset': 40,
      'target-text-offset': 40,
    },
  },
  {
    selector: 'edge.nodeHover',
    style: {
      lineColor: '#26a69a',
    },
  },
  {
    selector: 'node[status="failed"]',
    style: {
      'background-color': '#ffcss2',
      'border-color': '#e57373',
    },
  },
  {
    selector: 'edge[status="failed"]',
    style: {
      lineColor: '#e57373',
      lineStyle: 'dashed',
    },
  },
];
