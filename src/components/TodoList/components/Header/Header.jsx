/** @jsxImportSource @emotion/react */
import { IoSearch } from "react-icons/io5";
import * as s from "./styles";

function Header() {
  return (
    <>
      <div css={s.container}>
        <input type="text" css={s.searchInput} />
        <button css={s.searchButton}>
          <IoSearch />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input type="radio" id="all" name="filter" />
        <label htmlFor="">전체</label>
        <input type="radio" id="complete" name="filter" />
        <label htmlFor="">완료</label>
        <input type="radio" id="incomplete" name="filter" />
        <label htmlFor="">미완료</label>
      </div>
    </>
  );
}

export default Header;
