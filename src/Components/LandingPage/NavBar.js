import React from "react";
import { useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function NavBar() {
  const [isopen, setIsopen] = React.useState(false);
  const [activeState, setActiveState] = React.useState("");
  const [activeState2, setActiveState2] = React.useState("");
  const [activeState3, setActiveState3] = React.useState("");
  const [activeState4, setActiveState4] = React.useState("");
  const [activeState5, setActiveState5] = React.useState("");

  const navigate = useNavigate();
  const navigateFn = () => {
    setIsopen(false);
    navigate("/partnerships");
    setActiveState2("active");
    setActiveState("");
    setActiveState3("");
    setActiveState4("");
    setActiveState5("");
  };
  const navigateFn2 = () => {
    setIsopen(false);
    navigate("/culture");
    setActiveState("");
    setActiveState2("");
    setActiveState3("active");
    setActiveState4("");
    setActiveState5("");
  };
  const navigateFn3 = () => {
    setIsopen(false);
    navigate("/career");
    setActiveState("");
    setActiveState2("");
    setActiveState3("");
    setActiveState4("active");
    setActiveState5("");
  };
  const navigateFn4 = () => {
    setIsopen(false);
    navigate("/contact");
    setActiveState("");
    setActiveState2("");
    setActiveState3("");
    setActiveState4("");
    setActiveState5("active");
  };
  const navigateFnLP = () => {
    navigate("/");
    setIsopen(false);
    setActiveState("active");
    setActiveState2("");
    setActiveState3("");
    setActiveState4("");
    setActiveState5("");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleStateChange = (e) => {
    setIsopen(e.isOpen);
  };

  return (
    <div className="Navsection">
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <div style={{ marginLeft: "30px" }} onClick={navigateFnLP}>
          <img
            src="./Images/gobeyond/SmartGig-logo.png"
            height="70px"
            width="131px"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="hamburgerMenuforWeb">
          <ul className="navbarStyle" id="navigation">
            <li className={`ml-4 ${activeState}`} onClick={navigateFnLP}>
              Home
            </li>
            <li className={`ml-4 ${activeState2}`} onClick={navigateFn}>
              Partnerships
            </li>
            <li className={`ml-4 ${activeState3}`} onClick={navigateFn2}>
              Culture
            </li>
            <li className={`ml-4 ${activeState4}`} onClick={navigateFn3}>
              Careers
            </li>
            <li className={`ml-4 ${activeState5}`} onClick={navigateFn4}>
              Contact Us
            </li>
          </ul>
        </div>

        <div className="hamburgerMenu pr-3">
          <div id="outer-container">
            <Menu
              id="navigation"
              right
              isOpen={isopen}
              customBurgerIcon={
                <img src="./Images/gobeyond/Subtract.svg"></img>
              }
              customCrossIcon={<img src="./Images/gobeyond/close.svg" />}
              onStateChange={(e) => handleStateChange(e)}
            >
              <li
                className="menu-item"
                onClick={navigateFnLP}
                id={`${activeState}`}
              >
                Home
              </li>
              <li
                className="menu-item"
                onClick={navigateFn}
                id={`${activeState2}`}
              >
                Partnerships
              </li>
              <li
                className="menu-item"
                onClick={navigateFn2}
                id={`${activeState3}`}
              >
                Culture
              </li>
              <li
                className="menu-item"
                onClick={navigateFn3}
                id={`${activeState4}`}
              >
                Careers
              </li>
              <li
                className="menu-item"
                onClick={navigateFn4}
                id={`${activeState5}`}
              >
                Contact Us
              </li>
            </Menu>
          </div>
          <div
            style={{
              position: "fixed",
              marginTop: "40rem",
            //   fontSize: "xxx-large",
              backgroundColor: "#5789dbf2",
              borderRadius: "50%",
              color: "white",
            }}
          >
            <KeyboardArrowUpIcon onClick={navigateFnLP} />
          </div>
        </div>
      </div>
    </div>
  );
}
