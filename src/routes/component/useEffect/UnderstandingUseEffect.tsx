import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

export default function UnderstandingUseEffect() {
  const [nubmer, setNumber] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect rendered");
    document.title = `Číslo navýšeno ${nubmer}`;
  },[nubmer]);
  console.count("component rendered");

  return (
    <div className="flex flex-col gap-4">
      <p>Číslo navýšeno {nubmer}</p>
      <Button type="button" onClick={() => setNumber((prev) => prev + 1)}>
        Přičti 1
      </Button>
      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
