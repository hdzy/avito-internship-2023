const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/games', (req, res) => {
    fetch("https://www.freetogame.com/api/games")
        .then((res)=> res.json())
        .then((data)=> res.send(data))
        .catch((err)=>{
            res.send(err);
        });
});

app.listen(3000, () => {
    console.log('start!');
});
