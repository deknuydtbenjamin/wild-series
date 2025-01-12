import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <section className="header">
      <h1>
        <NavLink to="/" className="list">
          {" "}
          Wild Serie{" "}
        </NavLink>
      </h1>
      <div>
        <nav className="navbar">
          <ul className="lien">
            <li>
              <NavLink to="/categories" className="list">
                Catégories
              </NavLink>
            </li>
            <li>
              <NavLink to="/programs" className="list">
                Séries
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <main className="text-box">
        <Outlet />
      </main>
    </section>
  );
}

export default App;
