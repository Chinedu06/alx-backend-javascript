/**
 * Function to calculate the sum of student IDs.
 * @param {Array} students - Array of student objects.
 * @returns {Number} Sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
