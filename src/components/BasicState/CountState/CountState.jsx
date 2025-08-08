import { useState } from "react";
import CountHeader from "./CountHeader/CountHeader";
import CountButton from "./CountButton/CountButton";

function CountState() {
  // count: 현재 상태 값, setCount: 상태를 변경하는 함수
  const [count, setCount] = useState(0);  // useState(0): count의 초기값을 0으로 설정
  // let count = 0;

  const onClickHandler = (e) => {
    const num = parseInt(e.target.value);// 클릭한 버튼의 value 값을 숫자로 변환
    setCount(num + count); // 기존 count 값에 num을 더한 값으로 상태를 변경
    // count += num;
    // console.log(count);
    // document.querySelector("h1").innerText = count;
  };
 
/**
 * state란 컴포넌트가 가질 수 있는 상태를 의미
 * state를 사용해서 컴포넌트가 랜더링 될때 데이터를 보유하고 이 데이터를 업데이트해
 * 화면을 다시 렌더링 할 수 있다.
 * 자동 재렌더링 되어 state 데이터들이 변경되면 html에도 자동적으로 변경사항이 적용된다.
 * 상태가 변경되도 새로고침 할 필요 없어진다. 
 */

  return (
    <div>
      <CountHeader count={count}/>
      <CountButton value={1} onClick={onClickHandler} text={"+1"}/>
      <CountButton value={-1} onClick={onClickHandler} text={"-1"}/>
    </div>
  );
}

export default CountState;

/**
 * 리엑트 동작원리
 * 1. 가상돔(Virtual DOM)
 * 우리가 실제로 보는 화면 돔(DOM)이라는 트리구조로 관리, 화면이 변화가 생길때마다 이 실제 돔을 직접 조작하는 것은
 * 비효율적이다. 
 * 실제 돔의 구조를 그대로 복사한 가상 돔을 메모리에 만듦 
 * -> 상태에 변화가 생기면, 리엑트는 실제 돔을 바로 건드리지 않고 메모리에 새 가상돔 만듦  
 * 이전 가상돔과 상태가 바뀐 새 가상돔과 비교하여 무엇이 바뀌었는지 그 차이점(diff)을 빠르게 찾아냄
 * 찾아낸 다음 변경된 부분 만 모아서 실제 돔에게 이 부분만 바뀌었으니 여기만 바꿔봐 라고 최종 업데이트를 요청
 * 
 * 2.컴포넌트
 * 재사용이 가능한 레고블럭
 * 재사용이 가능하도록 ui를 만들고 여러조각으로 나누어서 관리하는데, 이 조각 하나하나를 컴포넌트라고 함
 * 한 화면은 여러 컴포넌트들을 조합해서 하나의 화면을 만듦
 */