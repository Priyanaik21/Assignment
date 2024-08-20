import Student from './classes/Student.js';
import Course from './classes/Course.js';
import Semester from './classes/Semester.js';
import CourseSemester from './classes/CourseSemester.js';
import Department from './classes/Department.js';
import CourseDepartment from './classes/CourseDepartment.js';
import StudentCourse from './classes/StudentCourse.js';
import Grade from './classes/Grade.js';
import Instructor from './classes/Instructor.js';
import InstructorCourse from './classes/InstructorCourse.js';
import InstructorDepartment from './classes/InstructorDepartment.js';
import StudentDepartment from './classes/StudentDepartment.js';

const student1 = new Student(1, 'John', 'Doe', 21, 'john.doe@example.com', '123 Main St', 1);
console.log(student1.getFullName());

const course1 = new Course(1, 'Mathematics_1', 30);
console.log(course1.getCourseDetails());

const semester1 = new Semester(1, 'sem1 2024');
const courseSemester1 = new CourseSemester(1, course1, semester1);
console.log(courseSemester1.getSemesterAssignmentDetails());

const dept1 = new Department(1, 'Science');
const courseDept1 = new CourseDepartment(1, course1, dept1);
console.log(courseDept1.getDepartmentAssignmentDetails());

const studentCourse1 = new StudentCourse(1, student1, course1, 500, '2024-01-15');
console.log(studentCourse1.getEnrollmentDetails());

const grade1 = new Grade(1, studentCourse1, 'A');
console.log(grade1.getGradeDetails());

const instructor1 = new Instructor(11, 'Issac', 'Allen', 24, 'isaac.allen@example.com', '456 Maple St', 1);
const instructorCourse1 = new InstructorCourse(1, instructor1, course1);
console.log(instructorCourse1.getCourseAssignmentDetails());

const instructorDept1 = new InstructorDepartment(1, instructor1, dept1);
console.log(instructorDept1.getDepartmentAssignmentDetails());

const studentDept1 = new StudentDepartment(1, student1, dept1);
console.log(studentDept1.getDepartmentAssignmentDetails());
