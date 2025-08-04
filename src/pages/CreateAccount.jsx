import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  const goToList = () => {
    navigate("/list");
  };

  const save = () => {};

  return (
    <>
      <h2>CreateAccount</h2>
      이름 : <input type="text" name="name"></input>
      <br />
      일자 : <input type="text" name="date"></input>
      <br />
      입금금액 : <input type="text" name="amount"></input>
      <br />
      <button onClick={save}>저장</button>
      <button onClick={goToList}>취소</button>
    </>
  );
}
