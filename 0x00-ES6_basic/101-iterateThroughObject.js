// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  // Collect all employee names into an array
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  
  // Join the employee names with ' | ' and return the result
  return employees.join(' | ');
}

