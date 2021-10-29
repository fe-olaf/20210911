
// webpack 

// 이름, 나이, 사는곳, 레벨, 가지고있는 포인트
class User {
    constructor({ name, age, address }) {
        this.id = Date.now()
        this.name = name
        this.age = age
        this.address = address 
        this.level = 0
        this.point = 0
    }
}

class UserAdmin {
    constructor() {
        this.users = []
    }

    addUser(user) {
        // 원본을 건들이고 싶지않다 !
        // 원본의 복사본을 수정하자 ! 
        // this.users.push(10) X
        // [...this.users] O

        this.users = [...this.users, user]
    }
    deleteUser(id) {
        // [].splice() // 원본
        // [].slice()  // 원본 X 
        // array.filter 함수
        
        // 삭제되어야할 id 를 가지고 있지 않은 유저만 필터링한다.
        this.users = this.users.filter((user) => {
            return user.id !== id 
        })
    }
    // 1. 과제 
    // 유저 4명을 추가한다 (나이대를 골고루) => 20대 이상의 유저를 삭제해주세요

    // 2. 안양에 사는 유저만 필터링해주세요
    // 배열을 삭제하지않고 배열의 정보만 제공 
    // foo() {
    //     return 필터링된유저
    // }
}

/**
 * 1. 저번주에 정리한자료 말로 할 수 있게 연습하기 
 * 2. JS 구조분해 할당 공부 및 정리 (with. array.push)
 * 3. JS 전개 구문 공부 및 정리
 * 4. 배열을 삭제하는 방법 알아보기 및 정리 (splice, slice, filter)
 * 5. jest 가 뭔지 
 */

describe('유저 어드민 테스트', () => {
    it('유저 생성 테스트', () => {
        const user = new User({ name: '홍길동', age: 40, address: '안양' })

        expect(user.name).toBe('홍길동')
        expect(user.age).toBe(40)
        expect(user.address).toBe('안양')
    })
    it('유저가 추가되면 유저 배열의 길이가 1 증가한다.', () => {
        const userAdmin = new UserAdmin()

        expect(userAdmin.users.length).toBe(0)

        const user = new User({ name: '홍길동', age: 40, address: '안양' })

        userAdmin.addUser(user)

        expect(userAdmin.users.length).toBe(1)
    })
    it('유저 삭제 테스트', () => {
        const userAdmin = new UserAdmin()
        const user = new User({ name: '홍길동', age: 40, address: '안양' })

        userAdmin.addUser(user)

        // 방금 추가된 요소를 삭제한다.
        userAdmin.deleteUser(user.id)
        
        expect(userAdmin.users.length).toBe(0)
    })

    it('10,17,32,40 의 유저가 추가되었을 때, 20대 이상을 삭제하면 유저 배열 길이는 2일 것이다.', () => {

    })

    it('유저가 삭제되면 유저 배열의 길이가 1 감소한다.', () => {})

    it('유저 수정 테스트', () => {})
})
