import React, { useState } from "react";

function InputState2() {
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newInputValue = {
      ...inputValue,
      [name]: value,
    };
    //객체 안에서 대괄호를 쓰면, 변수 안에 들어있는 문자열 값을 키로 사용할 수 있다.

    setInputValue(newInputValue);
  };

  return (
    <div>
      <h1>{inputValue.t1}</h1>
      <h1>{inputValue.t2}</h1>
      <h1>{inputValue.t3}</h1>
      <input name="t1" type="text" onChange={onChangeHandler} />
      <input name="t1" type="text" onChange={onChangeHandler} />
      <input name="t1" type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default InputState2;
