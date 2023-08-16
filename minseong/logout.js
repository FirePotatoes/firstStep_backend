const express = require('express');
const router = express.Router();

router.post('/logout', (req, res) => {
  const foundUser = users.find(user => user.id === id);
    if (req.session) {
      req.session.destory(function(err){});
    return res.status(-1).json({ message: '로그아웃 성공'});
  } else {
    return res.status(0).json({ message: '로그아웃 실패'});
  }
});

module.exports = router;