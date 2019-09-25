const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');
// 0) 수정할 DOM 노드를 가리키는 값을 선언.

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';
// 1) 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 한다.
//    가장 먼저 액션에 이름을 정의 해줘야 한다.!

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
// 2) 액션 생성 함수 작성.
//     액션 객체는 반드시.!! type 값을 가지고 있어야 한다.
//     그 외에는 상태 업데이트할 때 필요한 값만 마음대로 넣기.