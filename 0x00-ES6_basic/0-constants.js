// 0-constants.js

// Use 'const' for taskFirst as its value won't change
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Use 'let' for taskNext as the variable value will change
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  
  return combination;
}

export function getLast() {
  return ' is okay';
}

