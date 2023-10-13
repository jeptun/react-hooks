import { ChevronRight } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function UseState() {
  return (
    <div className="mx-auto w-full min-w-0">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          <Link to={`/`}>Home</Link>
        </div>
        <ChevronRight className="w-4 h-4" />
        <div className="font-medium text-foreground"> Use State</div>
      </div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          UseState
        </h1>
        <p className="text-lg text-muted-foreground">
          Jak používat hook useState
        </p>
      </div>
      <div className="space-x-2 pt-4">
        <h2 className="scroll-m-20 text-2xl font-bold tracking-tigh py-4">Obsah</h2>
        <div className="flex items-center ">
          <li className="px-2.5">
            <Link to={`asyncBtnZvyseniCisla`}>AsyncBtnZvyseniCisla</Link>
          </li>
          <li className="px-2.5">
            <Link to={`initializeState`}>initializeState</Link>
          </li>
          <li className="px-2.5">
            <Link to={`derivedStates`}>Derived States</Link>
          </li>
        </div>
      </div>
      <div className=" pb-12 pt-8">
        <Outlet />
      </div>
    </div>
  );
}
