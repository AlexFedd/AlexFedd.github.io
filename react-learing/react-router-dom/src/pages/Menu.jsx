import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
export const Menu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/menu">Menu</Link>
      </nav>
      <h1>MENU</h1>
    </div>
  );
};
