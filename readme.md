## express 서버 기초 연습

![250313-s](https://github.com/user-attachments/assets/df931594-57cf-4ca6-b1bc-7a53a6ef3f3b)

---

### 연습하려는 것

- Router (맵핑)
- 동적 라우팅
- 정적 리소스 라우팅
- Middleware
- 에러처리 미들웨어

### 경로 목록

- `localhost:3010/` | 이곳은 인덱스입니다
- `localhost:3010/board` | 이곳은 board 경로입니다
- `localhost:3010/board/:boardId` | ID가 boardId인 게시판에 오셨습니다. (동적 라우팅)
- `localhost:3010/user` | 이곳은 user 경로입니다
- `localhost:3010/user/:userId` | ID가 userId인 게시판에 오셨습니다. (동적 라우팅)
- `localhost:3010/public/static.html` | 정적 리소스에요 (정적 리소스)
- `localhost:3010/noexistpage123` | 존재하지 않는 페이지 (notfound 미들웨어)

### 미들웨어 목록

- `timestamp` : 콘솔에 타임스탬프 로그를 찍음
- `notfound` : 존재하지 않는 경로(404)에 대한 response 반환

---

#### Router 메서드 기본

- router.get("요청경로", (res, req)=> { res.send(...) })
- router.use("요청경로", 미들웨어1, 미들웨어2, 미들웨어3, 미들웨어4, ...)

---

#### Middleware 함수 기본

- function middleware(req, res, next) { console.log("미들웨어입니다"); next(); }

---

#### 에러처리 미들웨어 함수 기본

- function middleware(error, req, res, next) { console.log("에러 발생!", error.message); res.status(500).send("서버에서 에러가 발생했어요."); }

---

#### 정적 리소스 라우팅

- server.use("요청경로", express.static("정적 리소스의 경로"));
