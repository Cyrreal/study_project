import type { FC, PropsWithChildren } from "react";
import S from "./Layout.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={S.layout}>
      <header />
      {children}
      <footer />
    </main>
  );
};
