import { initCytoscape } from './cytoscape/init.js';
// import { elements1 } from './elements/elements1.js';
import { updateConnectedEdgesStatus } from './cytoscape/elementsActions.js';
import { siteInfo } from './siteInfo.js';
import { Popover } from './custom-elements/popover.js';

const calculateNodePosition = (node, siteMap, orderCountMap) => {
  const baseGapX = 200;
  const baseGapY = 100;
  if (node.data.position && node.data.position.site) {
    const site = siteMap.get(node.data.position.site);
    if (orderCountMap.has(site.order)) {
      orderCountMap.set(site.order, orderCountMap.get(site.order) + 1);
    } else {
      orderCountMap.set(site.order, 1);
    }
    return {
      x: baseGapX * site.order,
      y: baseGapY * orderCountMap.get(site.order),
    };
  }
  return { x: 0, y: 0 };
};

const makeUniqueSiteMap = (data) => {
  const uniqueSites = [
    ...new Set(data.nodes.map((node) => node.data.position?.site).filter(Boolean)),
  ];

  const siteMap = new Map();
  let currentOrder = null;
  let currentIndex = 0;
  uniqueSites
    .sort((a, b) => {
      if (siteInfo[a].order !== siteInfo[b].order) {
        return siteInfo[a].order - siteInfo[b].order;
      }
      return siteInfo[a].priority - siteInfo[b].priority;
    })
    .forEach((siteKey) => {
      const site = siteInfo[siteKey];
      if (site.order !== currentOrder) {
        currentOrder = site.order;
        currentIndex = 1;
      }
      siteMap.set(siteKey, { ...site, index: currentIndex });
      currentIndex++;
    });
  return siteMap;
};

const updateNodeInfomation = (data) => {
  const siteMap = makeUniqueSiteMap(data);
  const orderCountMap = new Map();
  const calculatedData = { nodes: [], edges: data.edges ? data.edges : [] };
  calculatedData.nodes.push(
    ...Array.from(siteMap, ([key, value]) => {
      return { data: { id: key, label: value.name } };
    })
  );
  calculatedData.nodes.push(
    ...data.nodes.map((node) => {
      node.position = calculateNodePosition(node, siteMap, orderCountMap);
      if (node.data.position && node.data.position.site) {
        node.data.parent = node.data.position.site;
      }
      return node;
    })
  );
  console.log(calculatedData);
  return calculatedData;
};

const loadCytoscape = (dataName) => {
  /**
   * @type {import('./cytoscape/types').Core}
   */
  const cy = initCytoscape();
  fetch(`data/${dataName}.json`)
    .then((response) => response.json())
    .then((data) => {
      const calculatedData = updateNodeInfomation(data);
      cy.add(calculatedData);
      cy.nodes().forEach(updateConnectedEdgesStatus);
      cy.center();
    })
    .catch((error) => {
      console.error(error);
    });
};

customElements.define('node-info-popover', Popover);
document.addEventListener('DOMContentLoaded', () => {
  loadCytoscape('elements2');
  console.log('Loaded');
});
