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
    if (userFound.password !== password) return res.status(401).send("el correo o la contraseña no existen");

    const token = jwt.sign({_id: userFound.id}, 'secretkey'); 
    return res.status(200).json({token});

});

router.get('/tasks', (req, res) =>{
    res.json([
        {
            _id: 1,
            name: "task",
            description: "lorem Ipsum"
        },{
            _id: 1,
            name: "task",
            description: "lorem Ipsum"
        }
    ]);
});

router.get('/tasks-private', verifyToken, (req, res) =>{
    res.json([
        {
            _id: 1,
            name: "task",
            description: "lorem Ipsum"
        },{
            _id: 1,
            name: "task",
            description: "lorem Ipsum"
        }
    ]);
});

router.get('/profile', verifyToken, (req, res)=>{
    res.send(req.userId); 
})



async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('busqueda no valida');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('busqueda no valida');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('busqueda no valida');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		return res.status(401).send('busqueda no valida');
	}
}



exports.router = router;