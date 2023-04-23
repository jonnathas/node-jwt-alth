import User from '../models/user.js'
import express from 'express'

const authController = {

    register: (req, res) => {

        user = new User(req.body);

        let id =  user.register()
        
        res.send('test')

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

export default authController;