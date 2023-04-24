const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const dotenv = require('dotenv')
dotenv.config()

const authController = {

    register: (req, res) => {

        user = new User();

        user.create(req.body)
            .then((userCreatedId)=>{

                res.status(200)
                    .json({
                        id: userCreatedId[0]
                    });
            }).catch((error) => {

                console.error(error)

                res.status(500)
                    .json({
                        message: "User not created."
                    });
            })
    },

    login: (req, res)=> {

        user = new User().login({

            "email": req.body.email,
            "password": req.body.password
    
        }).then((user_register)=>{
            
            console.log(user_register)

            if( 0 === 1){

                const payload = { 
                    "user_id": user_register.id,
                    "email": user_register.email
                };
                const secretKey = process.env.JWT_SECRET_KEY;
                const options = { expiresIn: '6h' };

                const token = jwt.sign(payload, secretKey, options);

                res.status(200)
                    .json({
                        token: token
                    });
            }

            res.status(500).send()

        }).catch((error) => {
            console.log(error)
        });
    },

    logout: (req, res)=> {

    },

    delete: (req, res)=> {

    },

    me: (req, res)=> {

    }

}

module.exports = authController;