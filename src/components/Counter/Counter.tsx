import React, { type FC } from "react";
import S from "./Counter.module.css";
import { UseCounter } from "../../shared/hooks/useCounter";
import classNames from "classnames";

export const Counter: FC<{ className?: string }> = ({ className }) => {
  const { count, handleDecrementCount, handleIncrementCount } = UseCounter();

  return (
    <div className={classNames(S.counterContainer, className)}>
      <button className={S.button} onClick={handleIncrementCount}>
        +
      </button>
      {count}
      <button className={S.button} onClick={handleDecrementCount}>
        -
      </button>
    </div>
  );
};
