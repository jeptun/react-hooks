import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function CleanUpFunction() {
  const [toggle, setToggle] = useState(false);

  //Generuje chybu a je potřeba cleanup funckce v useEffect

  useEffect(() => {
    console.log("effect runs");

    return () => {
      console.log("počkej než spůstíš effect. Je potřeba ho vyčistit");
      //OK
      console.log("Ok můžeš spustit efekt");
    };
  }, [toggle]);
  return (
    <div className="flex flex-col gap-4">
      {!toggle ? (
        <div className="text-center text-red-600">OFF</div>
      ) : (
        <div className="text-center text-blue-600">ON</div>
      )}
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    </div>
  );
}
