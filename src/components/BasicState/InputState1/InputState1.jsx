import { useState } from "react";

function InputState1() {
  const [inputValue1, setInputVale1] = useState("");
  const [h1Text1, setH1Text1] = useState("");

  const [inputValue2, setInputValue2] = useState("");
  const [h1Text2, setH1Text2] = useState("");

  const inputOnChangeHandler1 = (e) => {
    setInputVale1(e.target.value);
  };

  const inputOnChangeHandler2 = (e) => {
    setInputValue2(e.target.value);
  };

  const onClickHandler = () => {
    setH1Text1(inputValue1);
    setH1Text2(inputValue2);
  };

  return (
    <div>
      <h1>{h1Text1}</h1>
      <h1>{h1Text2}</h1>
      <input type="text" value={inputValue1} onChange={inputOnChangeHandler1} />
      <input type="text" value={inputValue2} onChange={inputOnChangeHandler2} />
      <button onClick={onClickHandler}>확인</button>
    </div>
  );
}

export default InputState1;
