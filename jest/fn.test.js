const fn = require("./fn");

// fail
// https://jestjs.io/docs/using-matchers

test("이름과 나이를 받는 객체 생성", () => {
  expect(fn.makeUser("John", 30)).toEqual({
    name: "John",
    age: 30
  });
});

test("이름과 나이를 받는 객체 생성", () => {
  expect(fn.makeUser("John", 30)).toStrictEqual({
    name: "John",
    age: 30
  });
});

//toBe -> Matcher 함수 숫자나 문자등 기본타입값을 비교할때 사용.

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null입니다", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("0 false 입니다", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않는 문자열은 true 입니다.", () => {
  expect(fn.add("hello", "jest")).toBeTruthy();
});

// 숫자 관련된 matcher
// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
test("비어있지 않는 문자열은 true 입니다.", () => {
  const id = "THE_R";
  expect(id.length).toBeLessThanOrEqual(10);
});

// 대부분의 프로그래밍 언어에서 부동 소수점 숫자는 이진수로 표현되며, 특정 십진수는 이진 형태로 정확하게 표현할 수 없습니다. 이로 인해 산술 연산을 수행할 때 아주 작은 반올림 오차가 발생할 수 있습니다.
// toBeClose 를 이용하여 값이 근사치인지 확인
// test("0.1 더하기 0.2는 0.3 입니다." , ()=>{
//   expect(fn.add(0.1,0.2)).toBe(0.3);
// })

test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 문자열 관련 matcher
// toMatch  대소문자 구별 , 대소문자 구별 무시하려면 i를 정규표현식 뒤에 추가 
test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect('Hello World').toMatch(/h/i);
});

// 배열 관련 Matcher
test("마이크가 유저리스트에 있는지?", ()=>{
  const userList = ['john','mike','tom'];
  const user = 'mike';
  expect(userList).toContain(user);
})

// 함수 에러 예외 처리
test('에러인가요?', ()=>{
  expect(()=> fn.thorwErr()).toThrow('xx'); // 인자에 에러내용을 넣어서 에러내용이 일치 하는지 확인
})

// 비동기함수 테스트
// try catch 이용 가능

// Jest에서 done() 함수는 비동기 코드를 테스트할 때 사용되는 방법 중 하나입니다. 일반적으로 Jest는 비동기 코드의 실행을 기다리지 않고 테스트를 종료하기 때문에 비동기 코드가 정상적으로 동작하는지 확인하기 어려울 수 있습니다. done() 매처를 사용하면 Jest에게 특정 시점에서 테스트가 완료될 때까지 기다리라고 알려줄 수 있습니다.

// done() 매처를 사용하는 방법은 다음과 같습니다

// 테스트 함수에 done 매개변수를 추가합니다.
// 비동기 동작이 예상대로 실행되는지 확인하기 위해 테스트를 작성합니다.
// 비동기 작업이 끝나고 테스트가 완료되면 done() 함수를 호출하여 Jest에게 테스트가 끝났음을 알립니다.
// 위 예제에서 fetchData 함수는 1초 후에 콜백 함수를 호출하는 간단한 비동기 함수입니다. test 함수의 두 번째 매개변수로 done을 사용하여 Jest에게 테스트가 끝날 때까지 기다리라고 알립니다.
// 콜백 함수 내부에서 done()을 호출하여 테스트가 완료되었음을 알리면 Jest는 테스트가 성공적으로 종료되었다고 판단합니다.

// 주의할 점은, 만약 done()을 호출하지 않거나 호출하지 않은 상태로 테스트가 종료된다면 Jest는 테스트가 실패했다고 판단합니다. 따라서 모든 비동기 동작이 완료되면 항상 done()을 호출해야 합니다.

test("이름이 광민인지 3초후에 확인해보세요", (done)=>{
  try{
    function callback(name){
      expect(name).toBe('kwangmin');
      done();
    }
    fn.getName(callback)
  }catch(error){
    done();
  }
})

// 만약 함수가 Promise를 리턴하여 then문을 이용할 수 있으면 done 함수 필요없이 then 문 안에서 테스트 코드 작성 가능 
// 보다 간단하게 구현하고싶으면 resolves , rejects 두개의 matcher 이용 가능
test("나이가 30인지 확인",()=>{
  // return fn.getAge().then(res => expect(res).toBe(30))
  return expect(fn.getAge()).resolves.toBe(30);
})



// 아래와 같이 변수가 새로운 값으로 할딩이 되고있어서 테스트 실패
// 이런테스트를 하려면 각 테스트를 하기전에 변수를 초기화 시켜줄 수있음
// afterEach도 가능
let num = 0;

beforeEach(()=>{
  num = 0;
})

test('0+1은 1' ,()=>{
  num = fn.add(num, 1);
  expect(num).toBe(1);
})

test('0+2은 2' ,()=>{
  num = fn.add(num, 2);
  expect(num).toBe(2);
})

test('0+3은 3' ,()=>{
  num = fn.add(num, 3);
  expect(num).toBe(3);
})


// beforeAll
// afterAll