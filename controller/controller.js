const express = require('express');
const studentSchema = require('../models/student_schema');

const controller = express.Router();

controller.get('/login', async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    try {
        const loggedInUser = await studentSchema.findOne({ email: email, password: password })
        if (loggedInUser == null) {
            res.json({
                "message": `Invalid Credentials`,
            })
        }

        res.json({
            "message": `Logged In Successfully`,
            "data": loggedInUser
        })
    }
    catch (err) {
        res.json({
            "message": `something went wrong reason ===> ${err}`
        }
        )
    }

})
controller.post('/signup', async (req, res) => {
    const registerStudent = req.body;
    try {
        console.log(registerStudent.age);
        //validation for age
        if (registerStudent.age == undefined || registerStudent.age <= 0) {
            throw new Error("Please enter age");
        }
        //validation for email
        if (registerStudent.email == undefined || registerStudent.email.length == 0) {
            throw new Error("Please enter valid email");
        }
        //validation for password
        if (registerStudent.password == undefined || registerStudent.password.length == 0) {
            throw new Error("Password  required");
        }

        //validation for firstName
        if (registerStudent.firstName == undefined || registerStudent.firstName.length == 0) {
            throw new Error("firstName  required");
        }

        //validation for lastName
        if (registerStudent.lastName == undefined || registerStudent.lastName.length == 0) {
            throw new Error("lastName  required");
        }
        //checking for same email
        const loggedInUser = await studentSchema.findOne({ email: registerStudent.email })
        if (loggedInUser != null) {
            res.json({
                "message": `User Already registered . Please use some different email `,
            })
        }
        else {
            const returnStudent = await studentSchema.create(registerStudent);
            res.status(200).json({
                "message": 'Student Registered'
            })
        }
    }
    catch (err) {
        console.log("this is error", err);
        res.json({
            "message": `something went wrong reason ===> ${err}`
        }
        )
    }
})

module.exports = controller;