import express from 'express';
import serviceRoutes from './routes/running.js';
const app = express();
const PORT = process.env.PORT || 5000;

//


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

// routing
app.use('/service', serviceRoutes);
app.get('/',(req, res)=>{
    console.log('GET');
    res.sendFile('serviceRunning.html',{root: './html files'});
});

app.listen(PORT, () =>{
    console.log(`SERVER RUNNING ON PORT: http://localhost:${PORT}`);
});
