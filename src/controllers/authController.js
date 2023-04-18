let User = require('../models/user.js')

const authController = {

    register: (req, res) => {

        user = new User(req.body);

        user.register()
            .then((result) => {
                res.send('criado com sucesso!')
            }).catch(()=> {
                res.send('falha ao criar!')
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