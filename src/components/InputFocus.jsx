import { useRef, useState } from "react";

const InputFocus = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const handleStart = () => {
    if (timeRef.current) return;

    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);

    timeRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  return (
    <div>
      <h1>Секунды{time}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default InputFocus;
