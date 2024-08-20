import User from './User.js';

class Instructor extends User {
    constructor(user_id, F_name, L_name, age, email, address, instructor_id) {
        super(user_id, F_name, L_name, age, email, address);
        this.instructor_id = instructor_id;
    }
}

export default Instructor;