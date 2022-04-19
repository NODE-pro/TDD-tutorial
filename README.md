# Express TDD

- Express 개발 환경에서의 테스트 코드 작성 연습
- 테스트 모듈 : jest, supertest

## 설치

```
$ npm i -D jest supertest
```

## 설정

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

## 주의사항

- 테스트하고자 하는 파일은 반드시 `*.spec.js` 또는 `*.test.js`로 끝나야 한다. 본 연습 과정에서 단위 테스트는 `*.test.js`, 통합 테스트는 `*.spec.js`로 저장하였다.
- 통합 테스트를 진행할 때에는 `app.listen` 부분을 따로 빼주어야 한다. 즉, 테스트가 실행되어 `app`의 `router`에 접근하기도 전에 `listen` 상태가 되면 테스트 부분에서 `app`의 `router`에 접근할 수 없다.

```js
/* app.js */

const app = express();
app.use('/api', routers);

// app.listen(port, () => console.log('Server running...'));

module.exports = app;
```

```js
/* bin/www.js */

const app = require('../app.js');
app.listen(port, () => console.log('Server Running...'));
```

```js
/* app.spec.js */

const request = require('supertest');
const app = require('../../app');
```

## Clone

```
$ git clone https://github.com/NODE-pro/TDD-tutorial.git
$ cd TDD-tutorial
$ npm install
$ npm test
```
