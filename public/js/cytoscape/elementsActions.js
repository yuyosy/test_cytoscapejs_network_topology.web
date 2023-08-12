/**
 * @param {import('./types').NodeSingular} node
 */
export const updateConnectedEdgesStatus = (node) => {
  if (node.data('status') === 'failed') {
    node.connectedEdges().data('status', 'failed');
  }
};
