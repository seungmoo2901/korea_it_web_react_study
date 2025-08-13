/**@jsxImportSource @emotion/react */
import * as s from "./styles";

function Emotion2() {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

export default Emotion2;
