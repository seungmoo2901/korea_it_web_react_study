import { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

function Component1() {
  const { name } = useParams();
  /**
   * useParam은 Route의 path에 설정된 동적 파라미터를 객체 형태로 가져옴
   */
  return <h1>path parameter는 {name}입니다.</h1>;
}

function Component2() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const entries = searchParams.entries();
    console.log(searchParams);
    let searchParamObj = {};
    for (const [key, value] of entries) {
      searchParamObj[key] = value;
    }
    console.log(searchParamObj);

    //.get 으로 특정 키의 값 하나만 가져올 수 있다.
    const nameParam = searchParams.get("name");
    console.log("name=>", nameParam);

    //.getAll로 같은 이름의 모든 값을 가져올 수 있다
    console.log("address=>", searchParams.getAll("address"));
  }, [searchParams]);

  const onClickHandler = () => {
    //이 함수를 호출하게 되면 URL이 바뀌고, 해당 컴포넌트가 재렌더링 된다.
    setSearchParams((prev) => {
      //prev.set(key,value)를 사용하여 파라미터를 추가하거나 수정할 수 있다.
      prev.set("address", "busan");
      return prev;
    });
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>URL에 'address=busan'추가/변경</button>
      </div>
    </>
  );
}

function Router4() {
  return (
    <div>
      <Routes>
        {/*path에 콜론을 사용하면 해당 위치의 URL 일부를 name이라는 변수로 받겠다라는 의미 */}
        <Route path="/param1/:name" element={<Component1 />} />
        <Route path="/param2" element={<Component2 />} />
      </Routes>
    </div>
  );
}

export default Router4;
