class User {
    constructor(balance = 0) {
         this.balance = balance;
    }

     fundWallet(amount) {
        this.balance = this.balance > 0 ? this.balance += amount : this.balance = amount;
        
        return this.balance;
    }

    purchase(amount) {
        this.balance -= amount;
    }
};

export default User;