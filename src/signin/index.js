class SignInPage {
    constructor() {
        this.componentBindEvent()
    }

    // 이벤트를 걸어주는 함수
    componentBindEvent() {
        document.getElementById('btn_submit').addEventListener('click', (event) => {
            // componentBindEvent 는 이벤트를 걸어주는 역할만하고
            // 관심사를 가진 함수를 분리한다.
            this.handleSigninUser()
        })
    }

    handleSigninUser() {
        // GET, POST, PUT, DELETE

        // GET = 서버로부터 데이터를 받을 때 
        // POST = 클라이언트 정보를 서버로 보낼 때 
        // PUT = 클라이언트 정보를 서버로 보낼 때 (업데이트 용도)
        // DELETE = 클라이언트 정보를 서버로 보낼 때 (삭제 용도)
        fetch('http://localhost:3000/user')
            .then((response) => {
                if (response.ok) {
                    return response.json()   
                }
            }).then((user) => {
                const email = document.getElementById('email').value
                const password = document.getElementById('password').value 

                // 1. 이메일이나 비밀번호 를 입력하지 않은 경우 
                // 2. 이메일 또는 비밀번호의 정보가 다른 경우 
                // 3. 로그인이 성공했을 때 화면에 유저 정보 노출
                // => render 함수를 이용해주세요 (리액트처럼 생각하기)

                if (user.email === email && user.password === password) {
                    window.alert(`${user.email} 님 환영합니다.`)
                }
            })
    }

    // 요소가 그려진 후 동작하는 함수
    componentDidMount() {

    }

    // 화면에 보이는 요소를 그리는 함수
    render() {
        return ''
    }
}

new SignInPage()

// Callback, Promise 의 차이  
// RestAPI 