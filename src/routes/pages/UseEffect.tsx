import { Link, Outlet } from "react-router-dom";

export default function UseEffect() {
  return (
    <div>
      <h1>UseState</h1>
      <Link to={`asyncBtnZvyseniCisla`}>UseEffect test</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
