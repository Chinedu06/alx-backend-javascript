export default function taskBlock(trueOrFalse) {
  const task = false; // Block-scope variable
  const task2 = true; // Block-scope variable

  if (trueOrFalse) {
    return [task, task2];
  }

  return [];
}

