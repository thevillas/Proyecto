const { Router } = require('express');
const user = require('../models/users');
const bcrypt = require('bcryptjs');
const router = Router();

const jwt = require('jsonwebtoken');

router.post('/registro', async (req,res)=>{
    const {email , password , nombre, cellphone} = req.body;
    const newUser = new user ({email, password, nombre, cellphone});
    await newUser.save();

    const token = jwt.sign({_id: newUser.id}, 'secretkey'); 

    res.status(200).json({token});
});
    

router.post('/ingreso', async (req, res) => {

    const {email, password} = req.body; 
    const userFound = await user.findOne({email})

    if (!userFound) return res.status(401).send("el correo o la contraseña no existen");
    if (userFound.password !== password) return res.status(401).send("el correo o la contraseña no esisten");

    const token = jwt.sign({_id: userFound.id}, 'secretkey'); 
    return res.status(200).json({token});

});




exports.router = router;


