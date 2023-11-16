const express = require('express');
const app = express();

require('./db.js');

app.use(require('./routes/RoutesIndex.js'));

app.listen(5001, () => console.log('server on port 5001'));
