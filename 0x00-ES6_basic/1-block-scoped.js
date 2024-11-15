// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block-scoped, won't overwrite the outer `task`
    let task2 = false; // Block-scoped, won't overwrite the outer `task2`
  }

  return [task, task2];
}

