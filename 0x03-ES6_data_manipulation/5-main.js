import createInt8TypedArray from './5-typed_arrays';

console.log(createInt8TypedArray(10, 2, 89));

try {
  console.log(createInt8TypedArray(10, 15, 89));
} catch (err) {
  console.error(err.message);
}
