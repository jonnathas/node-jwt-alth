import User from '../models/user.js'
import express from 'express'

const authController = {

    register: (req, res) => {

        console.log(req.body);
        
        user = new User();
        user.create(req.body);
        
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