import { useState } from "react";

function Render() {
  console.log("Render 컴포넌트가 랜더링 되었습니다.");
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };
  //랜더링 이라는 것은 해당 컴포넌트의 내용물이 새로운 값으로 교채되는것
  //예를 들어 컴포넌트가 건물이라고 한다면, 랜더링은 건물 내부의 인테리어를 바꾸는것 
  return (
    <div>
      <h1>현재숫자:</h1>
      <button onClick={onClickHandler}>숫자 증가</button>
    </div>
  );
}

export default Render;
