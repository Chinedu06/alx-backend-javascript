/**
 * Function to get the list of student IDs.
 * @param {Array} students - Array of student objects.
 * @returns {Array} Array of student IDs or an empty 
 * array if input is not an array.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
