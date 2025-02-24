"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

const formatTime = (time) => {
  const sec = time % 60;
  const min = Math.floor((time % 3600) / 60);
  const hour = Math.floor(time / 3600);
  return `${hour.toString().padStart(2, "0")} : ${min
    .toString()
    .padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`;
};

export default function Home() {
  const [time, setTime] = useState(0);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    if (!isWorking) return;

    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [isWorking]);

  const handleStart = () => setIsWorking(true);
  const handleStop = () => setIsWorking(false);
  const handleReset = () => {
    setIsWorking(false);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.title}>Online Timer & Stopwatch</div>
        <div className={styles.timer}>{formatTime(time)}</div>
        <div className={styles.buttons}>
          <button className={styles.button17} onClick={handleStart}>
            Start
          </button>
          <button className={styles.button17} onClick={handleStop}>
            Stop
          </button>
          <button className={styles.button17} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
