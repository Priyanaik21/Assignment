class Course {
    constructor(course_id, course_name, duration) {
        this.course_id = course_id;
        this.course_name = course_name;
        this.duration = duration;
    }

    getCourseDetails() {
        return `${this.course_name} , Duration: ${this.duration} days`;
    }
}

export default Course;