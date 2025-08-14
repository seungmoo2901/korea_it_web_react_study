/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    //엔터키 눌러진게 아니면 무시
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim().length === 0) {
      return;
    }

    // 새로운 할 일 객체 생성
    // prev → 이전 todoList 상태
    setTodoList((prev) => {
      // 마지막 요소의 id를 가져오거나, 목록이 비어있으면 0으로 설정
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      // 새로운 할 일 객체 생성
      const newTodo = {
        id: lastId + 1, // 마지막 id보다 1 큰 값
        isComplete: false, // 완료 여부 기본값 false
        content: inputValue, // 입력한 값 저장
      };
      // 기존 목록 뒤에 새 할 일을 추가하여 반환
      return [...prev, newTodo];
    });
    setInputValue("");
  };
  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" id={`todo${todo.id}`} />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div css={s.trashBox}>
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
          placeholder="할일을 입력하세요"
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
