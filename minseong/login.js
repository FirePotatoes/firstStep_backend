const express = require('express');
const router = express.Router();

// 예시로 사용할 사용자 정보
const users = [
  { id: 'user1', pw: 'pass1' },
  { id: 'user2', pw: 'pass2' },
];

router.post('/login', (req, res) => {
  const { id, pw } = req.body;

  // 데이터 베이스에서 어떻게 찾는지 물어볼것
  const foundUser = users.find(user => user.id === id);

  if (!foundUser) {
    // 아이디가 존재하지 않는 경우
    return res.status(1).json({ message: '로그인 실패' });
  }

  if (foundUser.pw !== pw) {
    // 아이디는 존재하지만 비밀번호가 일치하지 않는 경우
    return res.status(2).json({ message: '로그인 실패' });
  }

  //세션 생성
  const sessionId = 'exampleSessionId';
  req.session = { id: foundUser.id, sessionId };
  // 로그인 성공
  res.status(-1).json({ message: '로그인 성공' });
});

module.exports = router;