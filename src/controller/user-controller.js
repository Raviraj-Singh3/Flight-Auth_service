const UserService = require('../service/user-service');
const userService = new UserService();

const create = async(req,res)=>{
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json({
            data: response,
            success: true,
            message: 'successfully created a user',
            //err: error
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'not able to create a user',
            //err: error
        })
    }
}
    const signIn = async(req,res)=>{
        try {
            const response = await userService.signIn(req.body.email, req.body.password);
            return res.status(201).json({
                data: response,
                success: true,
                message: 'successfully signed in',
        })
        } catch (error){
            return res.status(500).json({
                data: {},
                message: 'password is wrong',
                //err: error
            });
        }
           
    }
module.exports = {
    create,
    signIn
}