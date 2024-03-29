const userSchema = require("../models/userModal")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid');
const userCtrl = {
    registerUser: async (req, res) => {

        const { username, email, password, profilePicture } = req.body;
        console.log()
        try {

            const user = await userSchema.findOne({ email: email });
            if (user) {
                return res.status(400).json({ msg: "Email already exists" })
            }

            // create big password and then upadate the schema

            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new userSchema({
                _id: uuid.v4(),
                username: username,
                email: email,
                password: passwordHash,
                profilePicture: profilePicture
            })

            await newUser.save();

            res.json({ msg: "register success" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }

    },
    loginUser: async (req, res) => {
        try {

            const { email, password } = req.body;
            const user = await userSchema.findOne({ email: email })
            if (!user) {
                return res.status(400).json({ msg: 'User not registered!' })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Incorrect password!" })
            }





            // if login is succesful
            const payload = {
                id: user._id,
                name: user.username,
                email:user.email
            }

            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

            res.json({ token })




        } catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }
    },
    getUser: async (req, res) => {
        try {
            return res.json(req.user)

         



        } catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }
    },

    //For frontend page authentication while moving from page to page
    verifyToken: (req, res) => {

        try {

            const token = req.header("Authorization")
            if (!token) return res.send(false)


            jwt.verify(token, process.env.TOKEN_SECRET, async (err, verified) => {
                if (err) return res.send(false)


                const user = await userSchema.findById(verified.id)
                if (!user) return res.send(false)

                return res.send(true)

            })




        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }




    },

    

}


module.exports = userCtrl;