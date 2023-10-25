const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:3000', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))



app.get("/",(req, res)=>{
    res.json({ message: 'Hello World!' });
});





app.listen(port, () => {
    console.log(`listening on *:${port}`);
});