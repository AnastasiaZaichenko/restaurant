import { Outlet, NavLink } from "react-router-dom";
import style from "./Layout.module.css";
// import "../style/app.css";

export default function Layout() {
  //   function handleClick(e) {
  //     e.preventDefault();
  //   }
  // onClick={handleClick}
  return (
    <>
      <header className={style.header_box}>
        {/* <NavLink to="/order" >
          Orders
        </NavLink> */}
        <NavLink to="/dish">Dishes</NavLink>
        <NavLink to="/table">Tables</NavLink>
        <NavLink to="/waiter">Waiters</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
