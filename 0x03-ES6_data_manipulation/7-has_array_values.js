/**
 * Checks if all elements in an array exist in a set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
