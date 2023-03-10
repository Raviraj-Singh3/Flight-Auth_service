const { User, Role } = require('../models/index');

class UserRepository{

    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

    async destory(userId){
        try {
            await User.destory({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            })
            return user;
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const userRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            })
            return user.hasRole(userRole);
        } catch (error) {
            console.log("something wrong in repository layer");
            throw error;
        }
    }

}
module.exports = UserRepository;