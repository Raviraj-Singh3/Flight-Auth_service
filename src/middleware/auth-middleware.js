const validateUserAuth = async(req,res,next)=>{

        if(!req.body.email || !req.body.password){
           return res.status(400).json({
                data: {},
                success: false,
                message: 'something went wrong',
                err: 'email or password missing in request'
            })
        }
        next();
    }

const validateIsAdmin = async(req,res,next)=>{

        if(!req.body.id){
            return res.status(400).json({
                data: {},
                success: false,
                message: 'user id is not given',
                err: 'something went wrong'
            })
        }
        next();
    }

    module.exports = {
        validateUserAuth,
        validateIsAdmin
    }
     