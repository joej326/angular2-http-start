const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
// const usersCtrl = require('./usersCtrl.js');

app.use(cors());



// app.use(express.static('src'));

app.use(bodyParser.json());


// app.get('/api/users',usersCtrl.getUsers);
// app.get('/api/users/:id', usersCtrl.getUserId);
// app.get('/api/admins', usersCtrl.getUserAdmins);
// app.get('/api/nonadmins', usersCtrl.getUserNotAdmins);
// app.get('/api/user_type/:userType', usersCtrl.getUserType);
// app.put('/api/users/:id', usersCtrl.changeUserId);
// app.post('/api/users/', usersCtrl.addUser);
// app.delete('/api/users/:id', usersCtrl.deleteUser);


app.get('/api/users', (req, res, next) => {
  console.log('sent the stuff');
  res.status(200).json('here is the data');
});

app.put('/api/users', (req, res, next) => {
  let stuff = req;
  res.status(200).json(req);
});




app.listen(3000,()=>{
  console.log('show time, folks.');
})
