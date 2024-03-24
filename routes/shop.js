const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','shop.html')); //__dirname points or hold the absoulte path to this project folder 
    //And here it points to routes folder
    //path.join() ditects the OS you are currently running on and builts the paht accrodingly{linux: /opt/var... windows:user\file...}
})

module.exports = router;