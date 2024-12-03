/**
 * Returns a string of set values that start with a specific string,
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  
  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
