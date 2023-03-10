const express = require('express');
const UserController = require('../../controller/user-controller');
//const {create} = require('../../controller/user-controller');
const {AuthRequestValidators} = require('../../middleware/index');
const router = express.Router();

router.post('/signup', AuthRequestValidators.validateUserAuth, UserController.create);
router.post('/signin', AuthRequestValidators.validateUserAuth, UserController.signIn);
router.get('/authenticated', UserController.authenticated);
router.get('/isAdmin', AuthRequestValidators.validateIsAdmin, UserController.isAdmin)


module.exports = router;