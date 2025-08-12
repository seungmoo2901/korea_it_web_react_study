import { useState } from "react";

function SignupForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button>가입하기</button>
    </div>
  );
}

export default SignupForm;
