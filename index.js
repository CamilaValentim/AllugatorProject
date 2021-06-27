const express = require('express');

const app = express();
app.use(express.json());
// const bodyParser = require('body-parser');
const employeeRouter = require('./router/employeeRouter');

// app.use(bodyParser.json());

 const PORT = 3000;
app.listen(PORT, () => console.log('ouvindo porta 3000!'));



app.use('/employee', employeeRouter);
