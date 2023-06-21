import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Programmers from "./Programmers";

const AboutUs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>About Us</h1>
      {/* <button onClick={clickHandler}>Go Home</button> */}

      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>

      <div>
        <Routes>
          <Route path="programmers" element={<Programmers />} />
          <Route path="drivers" element={<h1>Drivers</h1>} />
        </Routes>
      </div>
    </div>
  );
};
export default AboutUs;
