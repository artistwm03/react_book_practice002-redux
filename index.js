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