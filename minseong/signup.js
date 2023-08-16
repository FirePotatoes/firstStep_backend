const express = require('express');
const router = express.Router();

// 예시로 사용할 사용자 정보
const users = [
    { name:'kimgmaja',id: 'user1', pw: 'pass1',nickname:'potato',birth:'010203' },
    { name:'kimgmaja2',id: 'user2', pw: 'pass2',nickname:'potato2',birth:'0102032' },
  ];

module.exports = router;