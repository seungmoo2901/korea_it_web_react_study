import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  // useState에 함수를 넣으면 '지연 초기화'가 되어
  // 컴포넌트가 처음 렌더링될 때 한 번만 실행됨
  const [todoList, setTodoList] = useState(() => {
    // localStorage에서 "todoList"라는 key로 저장된 데이터 가져오기
    const localStorageTodoList = localStorage.getItem("todoList");

    // 만약 localStorage에 값이 있으면 JSON.parse로 배열로 변환
    // 값이 없으면 빈 배열([])을 초기값으로 사용
    return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
  });

  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   // localStorage에서 "todoList"라는 key로 저장된 데이터를 가져옴
  //   let localStorageTodoList = localStorage.getItem("todoList");

  //   //  만약 localStorage에 "todoList"가 존재하지 않으면
  //   if (!localStorageTodoList) {
  //     // 2-1. 빈 배열을 문자열로 변환해서 localStorage에 "todoList" key로 저장
  //     localStorage.setItem("todoList", JSON.stringify([]));

  //     //  setTodoList에 localStorageTodoList를 넣는데,
  //     //     여기에는 아직 값이 없으므로 undefined가 들어가게 됨
  //     setTodoList(localStorageTodoList);
  //   } else {
  //     //  localStorage에 값이 존재하면 문자열을 JS 객체로 변환하여 상태에 저장
  //     setTodoList(JSON.parse(localStorageTodoList));
  //   }

  //   //  빈 배열을 두 번째 인자로 전달 => 컴포넌트가 마운트될 때 한 번만 실행
  // }, []);

  useEffect(() => {
    // todoList가 바뀔 때마다 실행되는 훅

    let localStorageTodoList = localStorage.getItem("todoList");
    // 로컬스토리지(localStorage)에 저장된 "todoList" 데이터 가져오기 (문자열)

    const todoListJson = JSON.stringify(todoList);
    // 현재 todoList 상태를 문자열(JSON)으로 변환

    if (localStorageTodoList !== todoListJson) {
      localStorage.setItem("todoList", todoListJson);
      // 로컬스토리지 값과 현재 상태 값이 다르면 로컬스토리지를 업데이트
      // => 항상 최신 todoList가 브라우저에 저장됨
    }
  }, [todoList]);
  // todoList가 변경될 때마다 위 코드 실행됨

  const filterTodoList = todoList
    .filter((todo) => {
      if (filter === "all") {
        return true;
        //전체 필터링
      } else if (filter === "complete") {
        return todo.isComplete;
        //완료 필터링
      } else if (filter === "incomplete") {
        return !todo.isComplete;
        //미완료 필터링
      }
    })
    .filter((todo) => {
      if (searchText.trim().length === 0) {
        return true;
      }
      return todo.content.includes(searchText);
    });
  return (
    <Layout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      <Main todoList={filterTodoList} setTodoList={setTodoList} />
    </Layout>
  );
  //메인은 레이아웃의 자식요소
}

export default Index;
