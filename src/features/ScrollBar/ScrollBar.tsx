import React, { useState, useEffect } from "react";
import S from "./ScrollBar.module.css";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const progress = (scrollTop / documentHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return (
    <div className={S.progressBarContainer}>
      <div
        className={S.progressBar}
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};
