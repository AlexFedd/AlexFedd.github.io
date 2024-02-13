import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";



function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Homepage</Link>
          </li>
          <li>
            <Link to={"/menu"} href="">
              Menu
            </Link>
          </li>
          <li>
            <Link to={"/contact"} href="">
              Contact
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
