const getDirectionKey = (ev: MouseEvent, node: HTMLDivElement) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - (width / 2) * (width > height ? height / width : 1);
  const y = t - (height / 2) * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const directionClasses = ['in', 'out']
  .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
  .reduce((a, b) => a.concat(b));

export { getDirectionKey, directions, directionClasses };
