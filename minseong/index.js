const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); // express-session 라이브러리 추가
const loginRouter = require('./login'); // login.js 파일을 불러옴
const logoutRouter = require('./logout'); // logout.js 파일을 불러옴
const validationIdRouter = require('./validationId'); // validationId.js 파일을 불러옴
const validationNicknameRouter = require('./validationNickname'); // validationNickname.js 파일을 불러옴
const signupRouter = require('./signup'); // signup.js 파일을 불러옴

const app = express();

//세션 미들웨어 설정
app.use(session({
  secret: 'your-secret-key', // 세션 암호화를 위한 키
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 라우팅
app.use('/login', loginRouter); // loginRouter를 사용하여 /login 라우팅 처리
app.use('/logout', logoutRouter); // logoutRouter를 사용하여 /logout 라우팅 처리
app.use('/validation', validationIdRouter); // validationIdRouter를 사용하여 /validation 라우팅 처리
app.use('/validation', validationNicknameRouter); // validationNicknameRouter를 사용하여 /validation 라우팅 
app.use('/signup', signupRouter); //signup 사용하여 /signup 라우팅 처리

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});