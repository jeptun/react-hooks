import { useEffect, useState } from "react";

export default function UpdatingState() {
  const [number, setNumber] = useState(0);

  //Generuje chybu a je potřeba cleanup funckce v useEffect

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{number}</div>;
}
