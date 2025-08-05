import { useRef } from "react";
import { useAmount } from "../useAmount";
import { useNavigate } from "react-router-dom";

export default function Deposit() {
  const navigate = useNavigate();
  const amountRef = useRef();
  const { amount, setAmount } = useAmount();

  const deposit = () => {
    const newAmount = Number(amount) + Number(`${amountRef.current.value}`);
    setAmount(newAmount);
    alert("입금되었습니다. 잔액은 " + newAmount + "입니다.");
    goToList();
  };

  const goToList = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Deposit</h2>
      얼마를 입금하시겠습니까?
      <br />
      <input type="text" name="amount" ref={amountRef} />
      <br />
      <br />
      <button onClick={deposit}>입금</button>
      <button onClick={goToList}>취소</button>
    </>
  );
}
