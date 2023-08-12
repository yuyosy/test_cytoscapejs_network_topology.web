import * as actions from './eventActions.js';

/**
 * @type {import('./types').EventHandler}
 */
export const selectNodeHandler = (event) => {
  // console.log(event);
  actions.showPopover(event);
};

/**
 * @type {import('./types').EventHandler}
 */
export const unselectNodeHandler = (event) => {
  // console.log(event);
  actions.hidePopover(event);
};

/**
 * @type {import('./types').EventHandler}
 */
export const mouseoverNodeHandler = (event) => {
  // console.log(event);
  if (event.target.isNode()) {
    actions.setCursor('pointer', event);
  }
  actions.setNodeAndConnectedEdgesStyle(event);
};

/**
 * @type {import('./types').EventHandler}
 */
export const mouseoutNodeHandler = (event) => {
  // console.log(event);
  if (event.target.isNode()) {
    actions.setCursor('default', event);
  }
  actions.resetNodeAndConnectedEdgesStyle(event);
};

export const scrollZoomHandler = (event) => {
  // console.log(event);
  if (actions.isPopoverEnabled) {
    actions.hidePopover(event);
  }
};
