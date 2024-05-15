import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.gif";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header-component">
        <div className="main">
          <div className="logo">
            <img src={LOGO} alt="econtracts-logo" />
          </div>
          <div>
            <Link to={"/get-websocket-url"} className="socket">
              Get SocketURL
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
