const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const requestIp = require('request-ip');
const publicIp = require('public-ip');

const routes = {
	products: {
		get: '/api/products'
  },
  ip:{
    get:'/api/ip'
  }
  
};
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(requestIp.mw())

// app.get(routes.products.get, function (req, res) {
//     res.sendFile(__dirname + '/client/data/products.json');
// });

app.get(routes.ip.get,function(req,res){
  var ip = "127.0.0.1";
  (async () => {
    console.log(await publicIp.v4());
   
    ip = await publicIp.v4();
    res.send("API is working:"+ip);
})();
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

  

app.listen(process.env.PORT || 5000)
console.log(`[products] API Server started on 5000.`);
