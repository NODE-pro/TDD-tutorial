const request = require('supertest');
const app = require('../../app');

const testCases = [
  {
    statusCode: 200,
    data: {
      email: 'choewy32@gmail.com',
      password: 'testtest',
    },
  },
  {
    statusCode: 400,
    data: {
      email: '',
      password: 'testtest',
    },
  },
  {
    statusCode: 400,
    data: {
      email: 'choewy32@gmail.com',
      password: '',
    },
  },
  {
    statusCode: 404,
    data: {
      email: 'choewy@gmail.com',
      password: 'testtest',
    },
  },
  {
    statusCode: 402,
    data: {
      email: 'choewy32@gmail.com',
      password: 'test',
    },
  },
];

const url = '/api/users/signin';
const onTest = (statusCode, data) =>
  async function () {
    const res = await request(app)
      .post(url)
      .send({ ...data });
    expect(res.statusCode).toEqual(statusCode);
  };

describe('사용자 로그인 테스트', () => {
  testCases.forEach((testCase, index) => {
    const { statusCode, data } = testCase;
    test(`#${index + 1}`, onTest(statusCode, data));
  });
});
