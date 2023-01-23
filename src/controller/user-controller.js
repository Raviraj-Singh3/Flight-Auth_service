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

    const authenticated = async(req, res) => {
        try {
            const token = req.headers['x-token-auth'];
            const response = await userService.isauthenticated(token);
            return res.status(201).json({
                success: true,
                err: {},
                data: response,
                message: 'token is authenticated and token is valid'
        })
        } catch (error){
            return res.status(500).json({
                message: 'token is invalid',
                success: false,
                data: {},
                err: error
                
            });
        }
    }

    const isAdmin = async(req,res)=>{
        try {
            const response = await userService.isAdmin(req.body.id);
            return res.status(200).json({
                data: response,
                success: true,
                err: {},
                message: 'successfully fetched whether user is admin or not'
            })
        } catch (error) {
            return res.status(500).json({
                message: 'something went wrong',
                success: false,
                data: {},
                err: error
                
            });
            }
        }
    
module.exports = {
    create,
    signIn,
    authenticated,
    isAdmin
}