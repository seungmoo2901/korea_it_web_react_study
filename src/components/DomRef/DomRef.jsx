import { useEffect, useRef } from "react";

function DomRef() {
  // useRef() : 특정 DOM 요소나 값을 직접 참조할 때 사용
  // 여기서는 input 요소를 직접 접근하기 위해 사용
  const inputRef = useRef(); // 초기값 없음 → current 값은 undefined

  // useEffect : 컴포넌트가 화면에 처음 렌더링된 뒤 실행
  useEffect(() => {
    console.log(inputRef.current); // 현재 참조하고 있는 DOM 요소 출력
    inputRef.current.focus(); // input 요소에 포커스 설정
  }, []); 

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default DomRef;
