const {Router,request,response} = require('express');
const { registerController, loginController } = require('../controllers/userController');

const userRoutes =Router();



userRoutes.post('/login', loginController);

userRoutes.post('/register',(request,response)=>{registerController(request,response)});

// userRoutes.delete('/deletetask')

// userRoutes.put('/updatetask')


module.exports = userRoutes;