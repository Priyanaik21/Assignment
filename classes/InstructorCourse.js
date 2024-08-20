class InstructorCourse {
    constructor(instructor_course_id, instructor, course) {
        this.instructor_course_id = instructor_course_id;
        this.instructor = instructor;
        this.course = course;
    }

    getCourseAssignmentDetails() {
        return `Instructor: ${this.instructor.getFullName()} , Course: ${this.course.getCourseDetails()}`;
    }
}

export default InstructorCourse;