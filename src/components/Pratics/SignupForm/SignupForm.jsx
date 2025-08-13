import { useEffect, useState } from "react";

function SignupForm() {
  // formValues: 이메일과 비밀번호 입력 값을 저장하는 상태
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  // error: 각 입력 필드의 에러 메시지를 저장하는 상태
  const [error, setError] = useState({});
  // isDisabled: "가입하기" 버튼의 활성/비활성 상태를 저장
  const [isDisabled, setIsDisabled] = useState(true);

  // 입력값 변경 시 실행되는 함수
  const inputOnChangeHandler = (e) => {
    const { name, value } = e.target; // name: 필드 이름(email/password), value: 입력 값

    // 기존 상태를 복사한 후, 변경된 필드의 값만 업데이트
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 가입하기 버튼 클릭 시 실행
  const signupClickHandler = () => {
    alert("성공적으로 가입되었습니다.");
  };

  // formValues가 변경될 때마다 유효성 검사 실행
  useEffect(() => {
    // 버튼을 기본적으로 비활성화
    setIsDisabled(true);
    // 새로운 에러 메시지를 저장할 객체
    const newErrors = {};

    // 이메일 형식 검사 (입력값이 있고 '@'가 없으면 에러)
    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요.";
    }

    // 비밀번호 길이 검사 (입력값이 있고 8자리 미만이면 에러)
    if (formValues.password.length < 8 && formValues.password.length > 0) {
      newErrors.password = "비밀번호는 8자리 이상이어야 합니다.";
    }

    // 에러 상태 업데이트
    setError(newErrors);

    // 에러가 없고, 이메일과 비밀번호가 모두 입력된 경우 버튼 활성화
    if (
      Object.keys(newErrors).length === 0 && // 에러 객체가 비어있음
      formValues.email && // 이메일 입력됨
      formValues.password // 비밀번호 입력됨
    ) {
      setIsDisabled(false);
    }
  }, [formValues]); // formValues가 바뀔 때마다 실행

  return (
    <div>
      <div>
        {/* 이메일 입력창 */}
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={inputOnChangeHandler}
        />
        {/* 이메일 에러 메시지 표시 */}
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        {/* 비밀번호 입력창 */}
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={inputOnChangeHandler}
        />
        {/* 비밀번호 에러 메시지 표시 */}
        {error.password && <p>{error.password}</p>}
      </div>
      {/* 가입하기 버튼 (isDisabled가 true면 비활성화) */}
      <button disabled={isDisabled} onClick={signupClickHandler}>
        가입하기
      </button>
    </div>
  );
}

export default SignupForm;

//이메일 인풋에 입력이 될때 유효성 검사 실시
//골뱅이 포함 여부에 따라서 없으면 에러메시지로
//"이메일 형식에 맞게 입력해주세요." 출력
//비밀번호 인풋에 입력이 될때 유효성 검사 실시
//8자리 이상인지 여부에 따라서 안되면 에러메시지로
//"비밀번호는 8자리 이상이어야 합니다." 출력
//에러메시지가 아예 없으면 버튼 활성화 하나라도 있으면 비활
//버튼을 누르면 alert 가입이 되었습니다
