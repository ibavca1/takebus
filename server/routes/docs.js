import express from 'express';
import axios from 'axios';
import querystring from 'querystring';

let router = express.Router();

router.post('/', (req, res) => {
    const {token, myReq} = req.body
    const AuthStr = 'Bearer '.concat(token);
    let instance;
    // axios.all([
    //     axios.get('http://tb-api-test.azurewebsites.net/api/v1/carrier/driver/get/list', { headers: { Authorization: AuthStr } }),
    //     axios.get('http://tb-api-test.azurewebsites.net/api/v1/carrier/bus/get/list', { headers: { Authorization: AuthStr } }),
    //     axios.get('http://api.takebus.ml/api/v1/carrier/instance/get/list', { headers: { Authorization: AuthStr } })
    // ]).then(axios.spread((driver, bus, instance)=>{
    //     //console.log(driver.data);
    //     //console.log(bus.data);
    //     console.log(instance.data.viewModel);
    // }))
    if (myReq==0){
        axios.get('http://api.takebus.ml/api/v1/carrier/instance/get/list', { headers: { Authorization: AuthStr } }).then(res=>{
            instance = res.data.viewModel;
            //console.log(res.data);
        }).then(()=>{;
            res.json(instance);
        });
    }
});

export default router;