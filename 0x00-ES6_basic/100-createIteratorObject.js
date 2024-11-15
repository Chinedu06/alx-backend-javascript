// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  // Extract all employees from all departments into a flat array
  const employees = [];
  
  // Use Object.values() to get the departments and then flatten the arrays
  Object.values(report.allEmployees).forEach(departmentEmployees => {
    employees.push(...departmentEmployees);  // Add employees from each department
  });

  // Return an iterator object
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            return { value: employees[index++], done: false };
          }
          return { done: true };
        }
      };
    }
  };
}

