// 12-createReportObject.js

export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },  // Copy the employeesList into allEmployees
    getNumberOfDepartments: function (allEmployees) {
      return Object.keys(allEmployees).length;  // Count the number of departments
    },
  };
}

