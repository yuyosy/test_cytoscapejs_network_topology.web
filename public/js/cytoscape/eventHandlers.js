import * as actions from './eventActions.js';

/**
 * @param {import('./types').EventHandler}
 */
export const selectNodeHandler = (event) => {
  // console.log(event);
  actions.showPopover(event);
};

/**
 * @param {import('./types').EventHandler}
 */
export const unselectNodeHandler = (event) => {
  // console.log(event);
  actions.hidePopover(event);
};

/**
 * @param {import('./types').EventHandler}
 */
export const mouseoverNodeHandler = (event) => {
  // console.log(event);
  if (event.target.isNode()) {
    actions.setCursor('pointer', event);
  }
  actions.setNodeAndConnectedEdgesStyle(event);
};

/**
 * @param {import('./types').EventHandler}
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
