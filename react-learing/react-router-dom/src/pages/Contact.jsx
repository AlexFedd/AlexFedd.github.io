import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const Contact = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const params = useParams();
  return (
    <>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/menu">Menu</Link>
      </nav>
      <h1>CONTACT {params ? params.contactId : ""}</h1>
      <ul>
        {arr.map((value, key) => {
          return (
            <li key={key}>
              <Link to={`/contact/${value}`}>Page {value}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
