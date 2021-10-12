const express =require('express');  // requirung the express instance


const router = express.Router();  // routing the requests 

// Using the controller .....

const homeController = require('../controllers/home_controller');

// Using the controller Here With the corresponding route 

router.get('/',homeController.home);

const addController = require('../controllers/add');

router.post('/post_task',addController.add);


module.exports = router ;