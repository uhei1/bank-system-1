import { useContext } from "react";
import { AmountContext } from "./AmountContext";

export function useAmount() {
  const context = useContext(AmountContext);

  if (!context) {
    throw new Error("useAmount must be used within an AmountProvider");
  }

  return context;
}
