let User = require('../models/user.js')
const express = require('express')

const authController = {

    register: (req, res) => {

        user = new User(req.body);

        let id = user.register((result) => {

            res.json(result)

        },(error) => {
            console.error('Error: ', error)
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