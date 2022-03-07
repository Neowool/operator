//  산술 연산자 (arithmetic operator)

 console.log(1 + 2)
 console.log(5 - 7)
 console.log(3 * 4)
 console.log(10 / 2)
 console.log(7 % 5) //나머지 연산자

 // 할당 연산자 (assignment operator)

let a = 2
// a = a + 1   산술 연산자 다 사용 가능 
a += 1

console.log(a)

// 비교 연산자 (comparison operator )

const c = 1
const d = 1

console.log(c === d)  // === 일치 연산자

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

const e = 1
const f = 1

console.log(e !== f) // !== 는 다르면 true 같으면 false가 나오는 비교연산자
console.log(e > f)
console.log(e >= f)
console.log(e <= f)

// 논리 연산자 (logical operator )
const g = 1 === 1
const h = 'AB' === 'AB'
const i = false 

console.log(g)
console.log(h)
console.log(i)

console.log(g && h && i) // && 연산자는 and 라는 뜻으로 하나라도 펄스시 펄스로 나옴(모두가 일치해야함)
console.log(g || i) // || 연산자는 or 또는 이라는 뜻으로 여러개중 하나라도 트루면 트루라고 나옴
console.log(!h) // ! 연산자는 부정 not 연산자로 트루인 값에 ! 연산자를 쓰면 펄스로 나옴 반대로 펄스 값에 쓰면 트루 나옴

//  삼항 연산자 (ternary operator)

const a1 = 1 < 2

if (a1) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a1 ? '참' : '거짓') // ? 참 : 거짓  a1 이라는 값이 참이면 참 거짓이면 거짓