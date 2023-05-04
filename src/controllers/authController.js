const User = require('../models/User.js')
const Token = require('../models/token.js')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')

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
    
        }).then(async (user_register) => {
            
            //console.log(user_register)

            if( user_register || Object.length(user_register) == 1 ){

                const payload = { 
                    "user_id": user_register.id,
                    "email": user_register.email
                };
                const secretKey = process.env.JWT_SECRET_KEY;
                const options = { expiresIn: '6h' };

                const token = jwt.sign(payload, secretKey, options);

                modelToken = new Token();

                token_id = await modelToken.create({
                        user_id: user_register.id,
                        token: token
                    });

                if(token_id){
   
                    res.status(200)
                    .json({
                        auth: true,
                        token: token
                    });
                }
            }

            res.status(500).send()

        }).catch((error) => {
            console.log(error)
            res.status(500).send()
        });
    },

    logout: (req, res)=> {

        const token_register = modelToken.logout(req.body.token)
            .then((rows) =>{
                
                res.status(202)
                    .send();

            }).catch((error) => {
                console.error(error)
                res.status(500).send()
            });

        
    },

    delete: (req, res)=> {
        
        let modelToken = new Token();
        modelToken = modelToken.getWhere({token: req.body.token})
        
        let user = new User()
        user.destroy({ id: modelToken.id })
            .then((rows) =>{
                    
                res.status(202)
                    .send();

            }).catch((error) => {
                console.error(error)
                res.status(500).send()
            });
    },

    me: (req, res)=> {
        
        let modelToken = new Token();

        modelToken.getUserByToken(req.token)
            .then((user) =>{

                user[0].password = 'hidden'

                res.json(user)
                    .send();

            }).catch((error) => {
                console.error(error)
                res.status(500).send()
            });
    },

    update: (req, res)=> {

    }

}

module.exports = authController;