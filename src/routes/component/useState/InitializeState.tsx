import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function InitializeState() {
  const [user, setUser] = useState({
    name: "Tomas",
    email: "Tomas@gamail.com",
    pictures: ["profil.png", "cover.png"]
  });

  /**
   * 
   * @param e String
   * @description toto řešení bude funguvat pouze v případě s hodnoutou string
   */
  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>Initialize State</CardTitle>
          <CardDescription>Initialize State </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <div>User name is: {user.name}</div>
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                onChange={handleChange}
                placeholder={user.name}
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <div>User name is: {user.email}</div>
              <Label htmlFor="email">Name</Label>
              <Input
                name="email"
                onChange={handleChange}
                placeholder={user.email}
                type="email"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Button onClick={() => console.log(user)}> Change data </Button>
          </div>
        </CardFooter>
      </Card>
      <Link to={`/`}>Homee</Link>
    </>
  );
}
