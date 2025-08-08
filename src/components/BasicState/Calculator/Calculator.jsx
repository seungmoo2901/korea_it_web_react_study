import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    const clickedValue = e.target.value;

    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") {
      return;
    }

    if (
      (lastChar === "+" || lastChar === "-") &&
      (clickedValue === "+" || clickedValue === "-")
    ) {
      return;
    }

    if (clickedValue === "r") {
      setInput(input.slice(0, -1));

      return;
    }

    if (clickedValue === "=") {
      setResult(eval(input));
      setInput("0");
      return;
    }

    if (input === "0") {
      if (clickedValue === "+" || clickedValue === "-") {
        return;
      } else {
        setInput(clickedValue);
      }
    } else {
      setInput(input + clickedValue);
    }
  };

  return (
    <div>
      <h1>입력:{input}</h1>
      <h1>결과:{result}</h1>
      <div>
        <button onClick={onClickHandler} value={0}>
          0
        </button>
        <button onClick={onClickHandler} value={"r"}>
          ←
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={1}>
          1
        </button>
        <button onClick={onClickHandler} value={2}>
          2
        </button>
        <button onClick={onClickHandler} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={4}>
          4
        </button>
        <button onClick={onClickHandler} value={5}>
          5
        </button>
        <button onClick={onClickHandler} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={7}>
          7
        </button>
        <button onClick={onClickHandler} value={8}>
          8
        </button>
        <button onClick={onClickHandler} value={9}>
          9
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={"+"}>
          +
        </button>
        <button onClick={onClickHandler} value={"-"}>
          -
        </button>
        <button onClick={onClickHandler} value={"="}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
