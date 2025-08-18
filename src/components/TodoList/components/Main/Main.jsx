/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  // input에 입력되는 값을 저장할 상태 (초기값은 빈 문자열)

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
    // 사용자가 입력할 때마다 상태값 업데이트
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
      // 엔터(Enter) 키(코드 13)가 아니면 무시
    }
    if (inputValue.trim().length === 0) {
      return;
      // 입력된 값이 공백만 있으면 무시
    }

    // 새로운 todo 추가
    setTodoList((prev) => {
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      // 마지막 todo의 id 가져오기 (목록이 비어 있으면 0으로 시작)
      const newTodo = {
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };

      return [...prev, newTodo];
    });

    setInputValue("");
  };

  const checkBoxOnChangeHandler = (e) => {
    const todoId = parseInt(e.target.value);

    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };

  const deleteOnClickHandler = (todoId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    // 클릭한 todo의 id와 다른 것들만 남겨서 새로운 배열로 업데이트
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo${todo.id}`}
                value={todo.id}
                checked={todo.isComplete}
                onChange={checkBoxOnChangeHandler}
              />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div
                  css={s.trashBox}
                  onClick={() => deleteOnClickHandler(todo.id)}
                >
                  <IoTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
