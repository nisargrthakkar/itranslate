export const clearfix = () => {
  return `
    &::before,
    &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  `;
};

export const boxsizing = boxmodel => {
  return `
    -webkit-box-sizing: ${boxmodel};
    -moz-box-sizing: ${boxmodel};
    box-sizing: ${boxmodel};
  `;
};

export const boxshadow = shadow => {
  return `
    -webkit-box-shadow: ${shadow};
    -moz-box-shadow: ${shadow};
    box-shadow: ${shadow};
  `;
};

export const borderradius = (radius = '2px') => {
  return `
    -webkit-border-radius: ${radius};
    -moz-border-radius: ${radius};
    border-radius: ${radius};
  `;
};

export const transform = transforms => {
  return `
    -moz-transform: ${transforms};
    -o-transform: ${transforms};
    -ms-transform: ${transforms};
    -webkit-transform: ${transforms};
    transform: ${transforms};
  `;
};

export const transformXY = (valueX, valueY) => {
  return `
    -webkit-transform: translate(${valueX}, ${valueY});
    -moz-transform: translate(${valueX}, ${valueY});
    transform: translate(${valueX}, ${valueY});
  `;
};

export const transformX = valueX => {
  return `
    -webkit-transform: translateX(${valueX});
    -moz-transform: translateX(${valueX});
    transform: translateX(${valueX});
  `;
};

export const calcsizes = (fontsize, multiplayer1 = 1, multiplayer2 = 1, op = 'plus') => {
  if (op == 'plus') return ` ${`${fontsize * multiplayer1 + multiplayer2}px`};`;
  if (op == 'minus') return `${`${fontsize * multiplayer1 - multiplayer2}px`};`;
  return fontsize;
};
