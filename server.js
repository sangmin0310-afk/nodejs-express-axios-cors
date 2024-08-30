const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// CORS 설정
app.use(cors({
  origin: 'http://127.0.0.1:5500',  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
  allowedHeaders: ['Content-Type'],  
}));

// JSON 파싱을 위한 미들웨어 설정
app.use(bodyParser.json());

let data = { message: '여러분 화이팅!' };

// GET 요청 처리
app.get('/', (req, res) => {
  res.json(data);  
});

// POST 요청 처리
app.post('/', (req, res) => {
  const body = req.body;
  data.message = body.message;
  res.status(200).send(`받은 POST 데이터: ${body.message}`);
});

// PUT 요청 처리
app.put('/', (req, res) => {
  const body = req.body;
  data.message = body.message;
  res.status(200).send(`업데이트된 데이터: ${body.message}`);
});

// DELETE 요청 처리
app.delete('/', (req, res) => {
  data = {};  // 데이터 삭제
  res.status(200).send('데이터가 삭제되었습니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
