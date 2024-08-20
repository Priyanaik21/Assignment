class CourseSemester {
    constructor(course_semester_id, course, semester) {
        this.course_semester_id = course_semester_id;
        this.course = course;
        this.semester = semester;
    }

    getSemesterAssignmentDetails() {
        return `Course: ${this.course.getCourseDetails()} , Semester: ${this.semester.semester_name}`;
    }
}

export default CourseSemester;