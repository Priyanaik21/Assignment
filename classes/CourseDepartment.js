class CourseDepartment {
    constructor(course_department_id, course, department) {
        this.course_department_id = course_department_id;
        this.course = course;
        this.department = department;
    }

    getDepartmentAssignmentDetails() {
        return `Course: ${this.course.getCourseDetails()} , Department: ${this.department.department_name}`;
    }
}

export default CourseDepartment;