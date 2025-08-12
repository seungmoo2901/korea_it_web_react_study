import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "StrawBerry",
  "WaterMelon",
];

function FruitsFilter() {
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [inputValue, setInputVaue] = useState("");

  useEffect(() => {
    const newFilterFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("새로운 필터된 배열:", newFilterFruits);
    setFilterFruits(newFilterFruits);
    console.log("마운트됨");

    return () => {
      console.log("언마운트됨");
    };
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => setInputVaue(e.target.value)}
      />
      <ul>
        {filterFruits.map((fruit, index) => (
          // map() → filterFruits 배열의 각 요소를 <li>로 변환
          // fruit: 현재 과일 이름
          // index: 현재 요소의 순서 (React에서 key로 사용)
          <li key={index}>{fruit}</li>
          // key 속성: React가 리스트를 효율적으로 업데이트하기 위해 필요
          // {fruit} → li 안에 과일 이름 표시
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

//input 하나 만들고 ul하나 만들고 input에 과일이름 검색해서 필터를 거친 뒤 li로 출력
//최초에는 전체 과일 보여주고 내가 입력 할때마다 즉시 filter거쳐서 li로 보여주기
