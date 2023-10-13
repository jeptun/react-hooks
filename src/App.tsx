import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./routes/component/Theme-provider";
import { ModeToggle } from "./routes/component/Mode-toggle";
import { Separator } from "@radix-ui/react-dropdown-menu";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <nav>
              <ul>
                <li>
                  <Link to="UseState">UseState</Link>
                </li>
                <Separator />
                <li>
                  <Link to="UseEffect">UseEffect</Link>
                </li>
                <Separator />
                <li>
                  <Link to="/">Home</Link>
                </li>
                <ModeToggle />
              </ul>
            </nav>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
