import { useState } from "react";
import LifeCycle from "./LifeCycle"; // 자식 컴포넌트 불러오기

function LifeCycleApp() {
  // count: 자식 컴포넌트에 전달하는 값 (재렌더링 트리거 역할)
  const [count, setCount] = useState(0);

  // show: 자식 컴포넌트를 보이거나 숨길지 결정 (마운트/언마운트 제어)
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>부모 컴포넌트</h1>

      {/* 버튼 1: 자식 컴포넌트를 보이거나 숨기기 */}
      {/* show 값이 true → "숨기기" 버튼 표시, false → "보이기" 버튼 표시 */}
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "컴포넌트 숨기기(언마운트)" : "컴포넌트 보이기(마운트)"}
      </button>

      {/* 버튼 2: count 값을 증가시켜 자식 컴포넌트를 재렌더링 */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        자식이 가지고 있는 카운트업(재렌더링)
      </button>

      {/* show 값이 true일 때만 자식 컴포넌트 렌더링 */}
      {/* count 값을 props로 전달 → 값이 변경되면 자식 컴포넌트가 재렌더링됨 */}
      {show && <LifeCycle count={count} />}
    </div>
  );
}

export default LifeCycleApp;

