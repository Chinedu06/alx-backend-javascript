export const weakMap = new WeakMap();

/**
 * Function to track the number of times a specific endpoint is queried.
 */
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);
  } else {
    weakMap.set(endpoint, 1);
  }

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
