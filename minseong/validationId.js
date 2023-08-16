const express = require('express');
const router = express.Router();

// 예시로 사용할 사용자 정보
const users = [
  { id: 'user1', pw: 'pass1' },
  { id: 'user2', pw: 'pass2' },
];

router.post('/id', (req, res) => {
  const { id } = req.body;

  // 아이디가 이미 사용 중인지 확인
  const foundUser = users.find(user => user.id === id);

  if (foundUser) {
    return res.status(11).json({ message: '이미 존재하는 ID ' });
  }

  return res.status(-1).json({ message: '사용가능한 ID' });
});

module.exports = router;