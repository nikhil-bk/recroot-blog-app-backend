
const jwt = require('jsonwebtoken');
const userSchema = require("../models/userModal")
function authenticateToken(req, res, next) {

    try {

        const token = req.header("Authorization")
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Missing token' });
        }


        jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
            if (err) return res.send(false)

            console.log(verified)
            const user = await userSchema.findById(verified.id)
            req.user = user
            if (!user) return res.status(401).json({ message: 'Unauthorized - Not a registered user' });


            next()

        })




    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }




}
module.exports = authenticateToken;