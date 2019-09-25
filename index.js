const divToggle = document.querySelector('.toggle');
// 0) 수정할 DOM 노드를 가리키는 값을 선언.
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 1) 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 한다.
//    가장 먼저 액션에 이름을 정의 해줘야 한다.!
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE'; 
const DECREASE = 'DECREASE';

// 2) 액션 생성 함수 작성.
//     액션 객체는 *반드시.!! type 값을 가지고 있어야 한다.*
//     그 외에는 상태 업데이트할 때 필요한 값만 마음대로 넣기.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 3) 초기 값 설정.
//    초기 값 형태는 자유 (문자or숫자or문자열or객체)
const initialState = {
  toggle: false,
  counter: 0 
};

// 4) 리듀서 (= 변화를 일으키는 함수.!)
//    함수의 파라미터로 state 와 action 값을 받는다.
//    state 가 undefined 일 때는 initialState 를 기본값으로 사용.
function reeducer(state = initialState, action) {
  //action.type 에 따라 다른 작업 처리.
  switch (action.type) {
      case TOGGLE_SWITCH:
        return {
          ...state,             // 불변성 유지
          toggle: !state.toggle
        };
      case INCREASE:
          return {
            ...state,              
            counter: state.counter + action.difference
          };
      case DECREASE:
          return {
            ...state,              
            counter: state.counter - 1
          };
      default:
        return state;
  }
}
