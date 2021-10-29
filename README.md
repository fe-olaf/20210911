# h1 ~ h6

- li 

```js
// code block 
function foo() {}
```

[네이버](www.naver.com)


![짱구이미지](https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMjA2/MDAxNTg0MDI3MzA1MTM1.ziQdHXjoSVpswgl7MkBXPOamMHIiKQKPpqjtQNkw6IMg.rkebY82ViYlYz83X1y5B7Fm6qyQkC2ZZlmHgRyJw1vAg.JPEG.d_hye97/1.jpg?type=w800)


> p 태그 

일반 텍스트 `키워드 강조` 입니다.

- 유저 수정
- 로그인 


클라이언트 -> 서버 (비동기)

1. 요청을 보냄 fetch() 
const response = fetch() // 10초 걸리는 작업

response 유저정보가 들어있기를 기대 

2. 요청을 기다리지 않고 바로 실행 

response undefined

3. 우리는 비동기를 동기처럼 보이게 만들 필요가 있다.
Callback (ES5), Promise (ES5), Async/Await (ES6)

4. 

```js 
// resolve = 성공 했을 때 
// reject = 실패 했을 때 
new Promise((resolve, reject) => {
    resolve(10) // 성공했을 때
}).then((data) => { // 성공했을 경우 then 이라는걸로 작업을 이어갈 수 있다.
    // 앞의 작업에서 resolve 에 넘겨준 값 (data =  10)
    return 100
}).then((result) => {
    // result = 100
})
```