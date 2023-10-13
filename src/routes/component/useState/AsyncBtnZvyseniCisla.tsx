import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

function AsyncBtnZvyseniCisla() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber((prev) => prev + 1);
  };

  const handleIncreaseAsync = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 5);
    }, 1000);
  };

  const handleResetNumber = () => {
    setNumber(0);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Zvýšení čísla</CardTitle>
          <CardDescription>Navíšení </CardDescription>
        </CardHeader>
        <CardContent>
          <p>císlo {number}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2 flex-wrap">
            <Button variant="blueMy" onClick={() => handleIncrease()}>
              Click me
            </Button>
            <Button onClick={() => handleIncreaseAsync()}>
              Click me Async
            </Button>
            <Button variant="destructive" onClick={() => handleResetNumber()}>
              Restet number
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Link to={`/`}>Homee</Link>
    </>
  );
}

export default AsyncBtnZvyseniCisla;
