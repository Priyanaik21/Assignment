class StudentCourse {
    constructor(student_course_id, student, course, fee_paid, enrollment_date) {
        this.student_course_id = student_course_id;
        this.student = student;
        this.course = course;
        this.fee_paid = fee_paid;
        this.enrollment_date = enrollment_date;
    }

    getEnrollmentDetails() {
        return `Student: ${this.student.getFullName()} , Course: ${this.course.getCourseDetails()} , Fee Paid: ${this.fee_paid} , Enrollment Date: ${this.enrollment_date}`;
    }
}

export default StudentCourse;