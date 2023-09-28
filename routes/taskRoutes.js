const {Router,request,response} = require('express');

const taskRoutes = express.Router();

taskRoutes.get('/getalltask',(request,response)={})

taskRoutes.post('/createtask')

taskRoutes.delete('/deletetask')

taskRoutes.put('/updatetask')


module.exports = taskRoutes;