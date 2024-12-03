import { queryAPI, weakMap } from './100-weak';

const endpoint = { protocol: 'http', name: 'getUsers' };

// Check initial count (should be undefined)
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

queryAPI(endpoint);
