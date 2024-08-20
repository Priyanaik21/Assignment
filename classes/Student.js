import User from './User.js';

class Student extends User {
    constructor(user_id, F_name, L_name, age, email, address, student_id) {
        super(user_id, F_name, L_name, age, email, address);
        this.student_id = student_id;
    }
}

export default Student;