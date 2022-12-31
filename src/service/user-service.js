const UserRepository  = require('../repository/user-repository');
const bcrypt = require('bcrypt');
//const {SALT} = require('../config/configServer')
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/configServer');

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something wrong in service layer");
            throw error;
        }
    }
    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1h'});
            return result;
        } catch (error) {
            console.log("something wrong in token creation");
            throw error;
        }
    }
    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("something wrong in token validation", error);
            throw error;
        }
    }
    checkPassword(UserInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(UserInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("something wrong in password comparison");
            throw error;
        }
    }
}
module.exports = UserService;