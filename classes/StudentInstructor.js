class StudentInstructor {
    constructor(student_instructor_id, student, instructor) {
        this.student_instructor_id = student_instructor_id;
        this.student = student;
        this.instructor = instructor;
    }

    getAssociationDetails() {
        return `Student: ${this.student.getFullName()} , Instructor: ${this.instructor.getFullName()}`;
    }
}

export default StudentInstructor;