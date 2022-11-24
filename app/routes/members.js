const express = require('express');
const router = express.Router();
const members = require('../modules/members/query');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  res.json(members);
});

router.get('/:id', (req, res) => {
  const member = members.find(member => member.id === parseInt(req.params.id));
  if (member) {
    return res.json(member);
  }
  res.status(422).json({ msg: `No member with the id of ${req.params.id}` });
});

router.post('/', (req, res) => {
  const newMember = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  if (!newMember.name || !newMember.email) {
    return res.status(422).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(newMember);
});

module.exports = router;
