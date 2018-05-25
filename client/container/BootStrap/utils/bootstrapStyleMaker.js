const boostrapStyleMaker = ({
  center, left, right, m, p,
  mt, mr, mb, ml,
  pt, pr, pb, pl,
}) => {
  let className = '';
  if (center) className += 'text-center ';
  if (left) className += 'text-left ';
  if (right) className += 'text-right ';
  if (m) className += `m-${m} `;
  if (mt) className += `mt-${mt} `;
  if (mr) className += `mr-${mr} `;
  if (mb) className += `mb-${mb} `;
  if (ml) className += `ml-${ml} `;
  if (p) className += `p-${p} `;
  if (pt) className += `pt-${pt} `;
  if (pr) className += `pr-${pr} `;
  if (pb) className += `pb-${pb} `;
  if (pl) className += `pl-${pl} `;
  return className.trim();
};

export default boostrapStyleMaker;
