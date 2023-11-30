const express = require('express');
const app = express();

require('./db.js');
const {router} = require('./routes/router.js')

app.use(express.json());

app.get('/api', (req, res)=>res.send("hello world"))
app.use('/api', router)
app.listen(5001);
console.log('server on port',5001);
