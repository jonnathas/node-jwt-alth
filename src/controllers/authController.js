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

        const modelToken = new Token();

        console.log(req.token)

        const token_register = modelToken.destroyByToken(req.token)
            .then((rows) =>{

                if(rows === 1){
   
                    res.status(204)
                    .send();
                
                }else{

                    console.log('Nenhum registro deletado.')
                    
                    res.status(202)
                    .send();
                }

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

                res.json(user[0])
                    .send();

            }).catch((error) => {
                console.error(error)
                res.status(500).send()
            });
    },

    update: (req, res)=> {
        
        let modelToken = new Token();

        modelToken.getUserByToken(req.token)
            .then((user) =>{

                const modelUser = new User();

                modelUser.update(user[0].id, req.body)
                    .then((rows)=>{
                        
                        res.status(204)
                        .send();              

                    }).catch((error)=>{
                        console.error(error)
                        res.status(500).send()
                    });

            }).catch((error) => {
                console.error(error)
                res.status(500).send()
            });
    }

}

module.exports = authController;