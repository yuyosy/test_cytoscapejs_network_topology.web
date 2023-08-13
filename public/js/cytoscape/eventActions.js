export const setCursor = (cursor, event) => {
  const container = event.cy.container();
  if (container) {
    container.style.cursor = cursor;
  }
};

export const setNodeAndConnectedEdgesStyle = (event) => {
  event.target.addClass('hover');
  event.target.connectedEdges().addClass('nodeHover');
};

export const resetNodeAndConnectedEdgesStyle = (event) => {
  event.target.removeClass('hover');
  event.target.connectedEdges().removeClass('nodeHover');
};

const calcPosition = (event, popoverWidth) => {
  const box = event.target.renderedBoundingBox();
  const x = box ? box.x1 + box.w / 2 - popoverWidth / 2 : -5000;
  const y = box ? box.y1 + box.h + 10 : -5000;
  return { x, y };
};

export const isPopoverEnabled = (event) => {
  const popover = document.getElementById('nodeInfoPopover');
  return popover.style.visibility === 'visible';
};

export const showPopover = (event) => {
  const popover = document.getElementById('nodeInfoPopover');
  const { x, y } = calcPosition(event, popover.clientWidth);
  popover.style.opacity = 1;
  popover.style.zIndex = 10;
  popover.style.visibility = 'visible';
  popover.style.transform = `translate(${x}px, ${y}px)`;
  popover.setValue(event);
};

export const hidePopover = (event) => {
  event.cy.elements().unselect();
  const popover = document.getElementById('nodeInfoPopover');
  popover.style.opacity = 0;
  popover.style.visibility = 'hidden';
  popover.style.transform = '';
};
