import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

export default function TypeDependency() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false
  });

  //   const user = useMemo(
  //     () => ({
  //       name: state.name,
  //       selected: state.selected,
  //     }),
  //     [state.name, state.selected]
  //   );

  // MEMOIZED DEPENDENCY
  // useEffect(() => {
  //   console.log(`The state has changed, useEffect runs!`);
  // }, [user]);

  // PRIMITIVE PROPERTY BASED DEPENDENCY

  useEffect(() => {
    console.log("useEffect rendered");
  }, [state.name, state.selected]);

  const handleNameChange = () => {
    setState((prev) => ({ ...prev, name: name }));
  };

  const handleSelectedChange = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={() => handleNameChange()}>Add name</Button>
      <Button onClick={handleSelectedChange}>Change state</Button>
      {`name: ${state.name},
      selected: ${state.selected.toString()}`}
    </div>
  );
}
