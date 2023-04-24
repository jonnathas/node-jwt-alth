let User = require('../models/User.js')

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

                res.status(500)
                    .json({
                        message: "User not created."
                    });
            })
            

    },

    login: (req, res)=> {

    },

    logout: (req, res)=> {

    },

    delete: (req, res)=> {

    },

    me: (req, res)=> {

    }

}

module.exports = authController;