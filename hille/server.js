const express = require('express')
const path = require('path')
const mysql = require('mysql');

const app = express();


app.use(express.static(path.join(__dirname, 'client/build')));








const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    multipleStatements: true
    //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use start_db", (err, result, fields) => {
        if (err) throw err;
        console.log('Using test');

    });
});





// app.get('/getQuiz/:id', (req, res) => {
//     console.log(req.params.id)

//     try {
//         // const query = 'SELECT * FROM quiz;'
//         const query = `select * from answer`
//         // INSERT INTO `quiz` (`Question`) VALUES ('hillel');
//         con.query(query, (err, result, fields) => {
//             if (err) throw err;

//             res.status(200).send(result)
//         })

//     }
//     catch (e) {
//         console.log(e)
//         res.status(400).send({err:e})
//     }
// })





app.get('/getQuiz', (req, res) => {
    res.send({ array })
})


const port = process.env.PORT || 4000;
app.listen(port, () => { console.log('server listen on port', port) })









const array = [
    {
        Question: 'מי מהבאים לא השתתף בשיר ״שבט אחים ואחיות״?',
        idQuestion:'50404548',
        Answer: [{
            Answer: 'דודו אהרון',
            text: 'טקסט טקסט',
            indexAnswer: 1,
            img: 'https://picsum.photos/id/300/200',
            NumberOfClicks: 1
        },
        {
            Answer: 'עומר אדם',
            text: 'טקסט טקסט',
            indexAnswer: 2,
            img: 'https://picsum.photos/300/200',
            NumberOfClicks: 0
        },
        ]
    },
    {
        Question: 'כמה חיילים רגילים בסך הכל (שחורים ולבנים) משתתפים במשחק שחמט?',
        AnswerIndex: 1,
        Answer: [{
            Answer: '16',
            text: 'טקסט טקסט',
            indexAnswer: 1,
            img: 'https://picsum.photos/id/300/200',
            NumberOfClicks: 1
        },
        {
            Answer: '8',
            text: 'טקסט טקסט',
            indexAnswer: 2,
            img: 'https://picsum.photos/300/200',
            NumberOfClicks: 10
        }
        ]
    }
]