import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#ntro" className="logo">
            inovtion.
          </a>
          <div className="itemContainer">
            <Person className="icon" /> <span>9898989898</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" /> <span>jahanvi@infocusp.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humBurger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
