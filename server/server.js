const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());

/**
 * Делаем запрос к API https://www.freetogame.com/api-doc
 */
app.get('/games', (req, res) => {

    /**
     * Отделяем кастомные query-параметры от тех, что принимает API и формируем запрос
     */

    let subdomain = 'games';
    let requestQuery = '?';

    for (const [key, value] of Object.entries(req.query)) {
        if (key !== 'start' && key !== 'end' && key !== 'direction') {

            if (key === 'tag') {
                subdomain = 'filter';
            }

            requestQuery += `${key}=${value}&`;
        }
    }

    fetch(`https://www.freetogame.com/api/${subdomain}${requestQuery}`)
        .then((res)=> res.json())
        .then((data)=> {

            /**
             * На основе кастомных query-параметров изменяем запрос перед отправкой на фронт
             */

            let modifiedData = data;

            if (req.query.direction) {
                modifiedData = data.reverse();
            }

             const amount = data.length;
             const dataSliced = modifiedData.slice(req.query.start, req.query.end);
             res.send({amount, games: dataSliced});
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
    console.log('Server started on port 3000');
});
