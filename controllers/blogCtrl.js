const blogSchema = require("../models/blogModal")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid');
const blogCtrl = {
    createBlog: async (req, res) => {

        const { title, content } = req.body;
        console.log(req.user)
        try {
            const newBlog = new blogSchema({
                _id: uuid.v4(),
                author: req.user._id,
                title: title,
                content: content,

            })

            await newBlog.save();

            res.json({ msg: "posted successfully" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: error.message })
        }

    },
    updateById: async (req, res) => {
        try {

            const { title, content } = req.body;
            const _id = req.params.id
            const author = req.user._id
            await blogSchema.updateOne({ _id, author }, {
                title,
                content
            })

            res.json({ msg: "Blog Updated" })


        } catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }
    },
    getAllBlogs: async (req, res) => {

        try {
            await blogSchema.find({})
                .populate('author', 'username profilePicture')
                .sort({ createdAt: -1 })
                .exec((err, blogs) => {
                    if (err) {
                        console.error(err)
                        retrun
                    }
                    res.json(blogs)
                })

        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }


    },
    getBlogById: async (req, res) => {

        try {
            const _id = req.params.id
            const author = req.user._id
            await blogSchema.findById({ _id, author })
                .populate('author', 'username profilePicture')
                .sort({ createdAt: -1 })
                .exec((err, blogs) => {
                    if (err) {
                        console.error(err)
                        retrun
                    }
                    console.log(blogs)
                    res.json(blogs)
                })



        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }




    },
    getBlogsByUser: async (req, res) => {
        try {
            const author = req.user._id
            // console.log(req.user)
            await blogSchema.find({ author })
                .populate('author', 'username profilePicture')
                .sort({ createdAt: -1 })
                .exec((err, blogs) => {
                    if (err) {
                        console.error(err)
                        retrun
                    }
                    console.log(blogs)
                    res.json(blogs)
                })

        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }
    },
    deleteBlogById: async (req, res) => {
        try {
            const _id = req.params.id

            await blogSchema.deleteOne({ _id }, (err) => {
                if (err) {
                    console.error(err)
                    return res.json({ msg: err.message })
                }

                res.json({ msg: "Deleted Susccessfully!" })
            })

        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ msg: err.message })


        }
    }
}


module.exports = blogCtrl;