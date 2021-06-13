import express from 'express';
import getConvertedPdfBase64 from '../operation.js'; 
const router = express.Router();


router.get('/', (req, res) =>{
    res.send('try with different url');
});

router.get('/available', (req, res) =>{
    const html = '<h1>Hello, World!</h1>';
    res.send('YAY, service is running..'+html);
});

router.post('/convert',(req, res) =>{
    const file = req.body;

    getConvertedPdfBase64(file.base64).then(result =>{
        let responseJSON = [
            {
                status : "Success",
                base64: result
            }
        ];
        res.send(JSON.stringify(responseJSON));
    }).catch(error =>{
        let responseJSON = [
            {
                status : "Error"+error
            }
        ];

        res.send(JSON.stringify(responseJSON));
    })
   
});

export default router;