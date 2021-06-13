import express from 'express';
import serviceRoutes from './routes/running.js';
const app = express();
const PORT = 5000;

//


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// routing
app.use('/service', serviceRoutes);
app.get('/',(req, res)=>{
    console.log('GET');
    res.sendFile('serviceRunning.html',{root: './html files'});
});

app.listen(process.env.PORT || 5000, () =>{
    console.log(`SERVER RUNNING ON PORT: http://localhost:${PORT}`);
});
