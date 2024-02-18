
const router=require('express').Router()
const blogCtrl=require("../controllers/blogCtrl")
const authenticateToken=require("../middleware/authMiddleware")


router.post('/create',authenticateToken,blogCtrl.createBlog)
router.put('/updateById/:id',authenticateToken, blogCtrl.updateById)
router.get('/getAllBlogs' ,blogCtrl.getAllBlogs)
router.get('/getBlogById/:id' ,authenticateToken,blogCtrl.getBlogById)
router.get('/getBlogsByUser' ,authenticateToken,blogCtrl.getBlogsByUser)
router.delete('/deleteBlogById/:id' ,authenticateToken,blogCtrl.deleteBlogById)

module.exports = router;