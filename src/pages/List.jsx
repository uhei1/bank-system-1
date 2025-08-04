import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate();

  const goToCreateAccount = () => {
    navigate("/createAccount");
  };

  const goToDeposit = () => {
    navigate("/deposit");
  };

  const goToWithdraw = () => {
    navigate("/withdraw");
  };

  return (
    <div>
      <h2>은행 프로젝트</h2>
      <button onClick={goToCreateAccount}>계좌개설</button>
      <br />
      <br />
      <button onClick={goToDeposit}>입금</button>
      <br />
      <br />
      <button onClick={goToWithdraw}>출금</button>
    </div>
  );
}
