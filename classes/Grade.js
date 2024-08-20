class Grade {
    constructor(grade_id, studentCourse, grade) {
        this.grade_id = grade_id;
        this.studentCourse = studentCourse;
        this.grade = grade;
    }

    getGradeDetails() {
        return `Student: ${this.studentCourse.student.getFullName()} , Course: ${this.studentCourse.course.getCourseDetails()} - Grade: ${this.grade}`;
    }
}

export default Grade;