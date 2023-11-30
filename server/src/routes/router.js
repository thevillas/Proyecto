const { Router } = require('express');
const user = require('../models/users');

const router = Router();

const jwt = require('jsonwebtoken')

router.post('/signup', async (req,res)=>{
    const {email , password , nombre, cellphone} = req.body;
    const newUser = new user ({email, password, nombre, cellphone});
    await newUser.save();

    const token = jwt.sign({_id: newUser.id}, 'secretkey');

    res.status(200).json({token});
})
    


exports.router = router;


