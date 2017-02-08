import express from 'express';
import axios from 'axios';
import querystring from 'querystring';

let router = express.Router();

router.post('/', (req, res) => {
    // const data = {'grant_type': 'password', 'username': 'elena_kurachenko@mail.ru', 'password': 'Xthyjckbd74'};
    const { identifier, password } = req.body;
    const data = {'grant_type': 'password', 'username': identifier , 'password': password};
    let user;
    axios.post('http://api.takebus.ml/token', querystring.stringify(data), {headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      }}).then(res=>{
            user = res.data;
        }).catch(e => {
            user = null;
        }).then(()=>{
        if (user){
            res.json(user)
        } else {
            res.status(401).json({errors:{ form: 'Invalid Credentials' }});
        }
    });
    
});

export default router;