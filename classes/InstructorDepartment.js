class InstructorDepartment {
    constructor(instructor_department_id, instructor, department) {
        this.instructor_department_id = instructor_department_id;
        this.instructor = instructor;
        this.department = department;
    }

    getDepartmentAssignmentDetails() {
        return `Instructor: ${this.instructor.getFullName()} , Department: ${this.department.department_name}`;
    }
}

export default InstructorDepartment;