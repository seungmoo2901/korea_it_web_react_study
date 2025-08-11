import { useEffect } from "react";

function LifeCycle({count}) {
  // 컴포넌트가 렌더링될 때마다 실행되는 부분
  console.log("렌더링 됨");

  // useEffect의 두 번째 인자가 []이므로, 컴포넌트가 "마운트"될 때 한 번만 실행
  useEffect(() => {
    console.log("마운트 됨"); // 컴포넌트가 화면에 처음 나타났을 때 실행

    // return문 안의 함수는 "클린업 함수"로,
    // 컴포넌트가 "언마운트"될 때(화면에서 사라질 때) 실행됨
    return () => {
      console.log("언마운트 됨");
    };
  }, []); // 빈 배열 → 마운트 시 1번, 언마운트 시 1번 실행

  return (
    <div>
      <h4>자식 컴포넌트</h4>
      <p>부모가 준 숫자:{count}</p>
    </div>
  );
}

export default LifeCycle;

