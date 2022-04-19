'use strict';

const users = [
  {
    email: 'choewy32@gmail.com',
    password: 'testtest',
  },
];

const UserSignin = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user)
    return res.status(404).send({
      ok: false,
      message: '존재하지 않는 계정입니다.',
    });

  if (user.password !== password)
    return res.status(402).send({
      ok: false,
      message: '비밀번호가 일치하지 않습니다.',
    });

  res.status(200).send({ ok: true });
};

module.exports = { UserSignin };
