import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAmount } from "../useAmount";

export default function Withdraw() {
  const navigate = useNavigate();
  const amountRef = useRef();
  const { amount, setAmount } = useAmount();

  const withdraw = () => {
    const newAmount = Number(amount) - Number(`${amountRef.current.value}`);
    setAmount(newAmount);
    alert("출금되었습니다. 잔액은 " + newAmount + "입니다.");
    goToList();
  };

  const goToList = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Withdraw(출금)</h2>
      <h3>
        잔액은 {amount}입니다.
        <br />
        얼마를 출금하시겠습니까?
      </h3>
      <input type="text" name="amount" ref={amountRef} />
      <br />
      <br />
      <button onClick={withdraw}>출금하기</button>
      <button onClick={goToList}>취소</button>
    </>
  );
}
