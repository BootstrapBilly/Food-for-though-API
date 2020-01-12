const User = require("../models/user")
const { validationResult } = require('express-validator/check');

const bcrypt = require("bcryptjs");

exports.Signup = async (req, res, next) => {

    console.log(req.body)

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(422).json({ success: false, error: "Please enter a valid email" });

        }
        const emailAlreadyTaken = await User.findOne({ email: req.body.email })

        if (emailAlreadyTaken) {

            return res.status(409).json({ success: false, error: "That email is in use" })
        }

        const passwordEncrypted = await bcrypt.hash(req.body.password, 12)

        if (passwordEncrypted) {

            const user = new User({

                email: req.body.email,
                password: passwordEncrypted

            })

            const userSaved = await user.save()

            if (userSaved) {

                return res.status(201).json({ success: true })

            }

            return res.status(500).json({ success: false, error: "Something went wrong" })

        }

    }

    catch (error) {

        console.log(error)
    }

}