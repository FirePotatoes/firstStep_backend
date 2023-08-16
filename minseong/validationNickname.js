const express = require('express');
const router = express.Router();

// 예시로 사용할 사용자 정보
const users = [
  { nickname: 'user1'},
  { nickname: 'user2'},
];

router.post('/nickname', (req, res) => {
  const { nickname } = req.body;

  // 닉네임이 이미 사용 중인지 확인
  const foundUser = users.find(user => user.nickname === nickname);

  if (foundUser) {
    return res.status(12).json({ message: '이미 존재하는 nickname' });
  }

  return res.status(-1).json({ message: '사용가능한 nickname' });
});

module.exports = router;