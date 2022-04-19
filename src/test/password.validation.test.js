'use strict';

const { PasswordValidation } = require('../middlewares/user.validation');

const testCases = [
  { statusCode: 400, password: undefined },
  { statusCode: 400, password: '' },
  { statusCode: 400, password: 't' },
  { statusCode: 400, password: 'abc' },
  { statusCode: null, password: 'testtest' },
  { statusCode: null, password: 'qkd%19283D' },
];

const onTest = (password, statusCode) =>
  async function () {
    const req = { body: { password } };
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    const next = jest.fn();

    await PasswordValidation(req, res, next);
    statusCode && expect(res.status).toBeCalledWith(statusCode);
    !statusCode && expect(next).toBeCalledTimes(1);
  };

describe('비밀번호 적합성 검사 테스트', () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };

  testCases.forEach((testCase, index) => {
    const { password, statusCode } = testCase;
    test(`#${index + 1}`, onTest(password, statusCode));
  });
});
