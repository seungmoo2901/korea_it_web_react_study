import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Router3() {
  //useLocation은 현재 URL의 다양한 정보를 담고있는 location 객체 반환
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("경로이동함!!");
    console.log(location.pathname);
    if (location.pathname === "/location/2") {
      //이 state는 URL에서 보이지 않지만 이동한 페이지에서 location.state로 값을 받을 수 있다.
      //로그인 후 이전 페이지로 돌려보내거나, 데이터를 숨겨서 전달 할 때 유용
      navigate("/location/3", {
        state: {
          name: "이승무",
          age: 27,
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    //location.state는 navigate 함수를통해 전달된 숨겨진 데이터를 담고 있음
    console.log("location state=>", location.state);
  }, [location.state]);

  useEffect(() => {
    console.log("쿼리 파라미터 변경됨");
    console.log("location search =>", decodeURI(location.search));
  }, [location.search]);

  const backBtnHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3-1</Link>
      <Link to={"/location/3?name=이승무"}>location3-2</Link>
      <Link to={"/location/3?name=삼승무"}>location3-3</Link>
      <button onClick={backBtnHandler}>뒤로가기</button>
      <Routes>
        <Route path="/location/1" element={<h1>location1</h1>} />
        <Route path="/location/2" element={<h1>location2</h1>} />
        <Route path="/location/3" element={<h1>location3</h1>} />
      </Routes>
    </div>
  );
}

export default Router3;
