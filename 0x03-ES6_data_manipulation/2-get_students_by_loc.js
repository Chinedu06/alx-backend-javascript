/**
 * Function to get students by location.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array} Array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
