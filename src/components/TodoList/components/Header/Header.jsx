/** @jsxImportSource @emotion/react */
import { IoSearch } from "react-icons/io5";
import * as s from "./styles";
import { useState } from "react";

function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchInputOnChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  const searchButtonClickHandler = () => {
    setSearchText(searchInputValue);
  };

  const filterOnChangeHandler = (e) => {
    // 라디오 버튼 클릭 시 선택된 id(all/complete/incomplete)를 filter 상태로 반영
    setFilter(e.target.id);
  };
  return (
    <>
      <div css={s.container}>
        <input
          type="text"
          css={s.searchInput}
          onChange={searchInputOnChangeHandler}
        />
        <button css={s.searchButton} onClick={searchButtonClickHandler}>
          <IoSearch />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input
          type="radio"
          id="all"
          name="filter"
          checked={filter === "all"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="">전체</label>
        <input
          type="radio"
          id="complete"
          name="filter"
          checked={filter === "complete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="">완료</label>
        <input
          type="radio"
          id="incomplete"
          name="filter"
          checked={filter === "incomplete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="">미완료</label>
      </div>
    </>
  );
}

export default Header;
