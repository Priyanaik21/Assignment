class User {
    constructor(user_id, F_name, L_name, age, email, address) {
        this.user_id = user_id;
        this.F_name = F_name;
        this.L_name = L_name;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    getFullName() {
        return `${this.F_name} ${this.L_name}`;
    }
}

export default User;