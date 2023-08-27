const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/games/amount', (req, res) => {
    fetch("https://www.freetogame.com/api/games")
        .then((res)=> res.json())
        .then((data)=> {
            const dataLength = JSON.stringify(data.length);
            res.send(dataLength);
        })
        .catch((err)=>{
            res.send(err);
        });
})
app.get('/games', (req, res) => {
    fetch("https://www.freetogame.com/api/games")
        .then((res)=> res.json())
        .then((data)=> {
            const dataSliced = data.slice(req.query.start, req.query.end);
            res.send(dataSliced);
        })
        .catch((err)=>{
            res.send(err);
        });
});

app.get('/game', (req, res) => {
    fetch(`https://www.freetogame.com/api/game?id=${req.query.id}`)
        .then((res)=> res.json())
        .then((data)=> res.send(data))
        .catch((err)=>{
            res.send(err);
        });
});


app.listen(3000, () => {
    console.log('start!');
});
