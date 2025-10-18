import { useCallback, useState } from "react";

export const UseCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementCount = useCallback(() => {
    if (count < 5) setCount((prev) => prev + 1);
    return;
  }, [count]);

  const handleDecrementCount = useCallback(() => {
    if (count > 0) setCount((prev) => prev - 1);
    return;
  }, [count]);

  return {
    handleIncrementCount,
    handleDecrementCount,
    count,
  };
};
