/**@jsxImportSource @emotion/react */
import Header from "../Header/Header";
import * as s from "./styles";

function Layout({ children, filter, setFilter, setSearchText }) {
  // Layout 컴포넌트: 페이지의 공통 레이아웃(바깥 틀)
  // props
  // - children: Layout 안에 끼워 넣을 실제 화면 내용(예: <Main />)
  // - filter, setFilter: 필터 상태와 업데이트 함수(헤더에 전달해서 필터 UI 제어)
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header
          filter={filter}
          setFilter={setFilter}
          setSearchText={setSearchText}
        />
        {children}
      </div>
    </div>
  );
}

export default Layout;
