
const router=require('express').Router()
const userCtrl=require("../controllers/userCtrl")
const authenticateToken = require('../middleware/authMiddleware')

// register
router.post('/register',userCtrl.registerUser)

// login
router.post('/login', userCtrl.loginUser)

 // verify
router.get('/verify' ,userCtrl.verifyToken)

 // get current user
router.get('/getuser',authenticateToken,userCtrl.getUser)

module.exports = router;