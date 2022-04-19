'use strict';

const { EmailValidation } = require('../middlewares/user.validation');

const testCases = [
  { statusCode: 400, email: undefined },
  { statusCode: 400, email: '' },
  { statusCode: 400, email: 'test' },
  { statusCode: 400, email: 'choewy32@gmail' },
  { statusCode: 400, email: 'choewy32@.com' },
  { statusCode: 400, email: '@gmail.com' },
  { statusCode: null, email: 'test@test.com' },
  { statusCode: null, email: 'choewy32@gmail.com' },
];

const onTest = (email, statusCode) =>
  async function () {
    const req = { body: { email } };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    const next = jest.fn();
    await EmailValidation(req, res, next);

    statusCode && expect(res.status).toBeCalledWith(statusCode);
    !statusCode && expect(next).toBeCalledTimes(1);
  };

describe('이메일 적합성 검사 테스트', () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };

  testCases.forEach((testCase, index) => {
    const { email, statusCode } = testCase;
    test(`#${index + 1}`, onTest(email, statusCode));
  });
});
