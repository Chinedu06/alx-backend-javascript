import cleanSet from './8-clean_set';

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')); 
// Expected Output: "jovi-aparte-appetit"

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
// Expected Output: ""

console.log(cleanSet(new Set(['apple', 'apricot', 'banana', 'appetite']), 'app'));
