const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

app.listen(3000, () => {
    console.log('The server is ON');
});

app.get('/', (req, res)=>{
    res.send('hello world');
});
