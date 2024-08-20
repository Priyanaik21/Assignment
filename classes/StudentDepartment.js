class StudentDepartment {
    constructor(student_department_id, student, department) {
        this.student_department_id = student_department_id;
        this.student = student;
        this.department = department;
    }

    getDepartmentAssignmentDetails() {
        return `Student: ${this.student.getFullName()} , Department: ${this.department.department_name}`;
    }
}

export default StudentDepartment;