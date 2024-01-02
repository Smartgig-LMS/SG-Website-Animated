import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function BlogReatil() {
  const navigate = useNavigate();
  const toRetail1 = () => {
    navigate("/retailblog1");
  };

  const toRetail2 = () => {
    navigate("/retailblog2");
  };

  const toRetail3 = () => {
    navigate("/retailblog3");
  };

  const toRetail4 = () => {
    navigate("/retailblog4");
  };

  return (
    <div>
      <div className="BlogPageWeb">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./Images/gobeyond/Group 4273211216353.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <p className="p-5" style={{ color: "#5A7184" }}>
              Here’s what we've been up to recently.
            </p>
          </div>

          <div>
            <button
              className="pr-4 pl-4 pt-1 pb-1"
              style={{
                color: "#2563AC",
                borderColor: "#2563AC",
                borderRadius: "7%",
                backgroundColor: "white",
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div
          className="d-flex pl-5 pr-5 pb-5"
          style={{ cursor: "pointer", gap: "5%" }}
        >
          <div className="BlogCard" onClick={toRetail1}>
            <img src="./Images/gobeyond/Group 427322024.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail2}>
            <img src="./Images/gobeyond/Group 427322037.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail3}>
            <img src="./Images/gobeyond/Group 427322126.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail4}>
            <img src="./Images/gobeyond/Group 427322189 (1).svg" />
          </div>
        </div>
      </div>

      {/* for mobile  ----------------------------------------------------------------------------- */}
      <div className="BlogPageMobile">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="mb-2"
            src="./Images/gobeyond/Group 4273211216353.svg"
            style={{
              height: "45px",
              width: "215px",
            }}
          />
        </div>
        <div>
          <p
            style={{
              color: "#5A7184",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Here’s what we've been up to recently.
          </p>
        </div>
        <div className="d-flex pl-2 pr-2" style={{ gap: "5%" }}>
          <div className="BlogCard" onClick={toRetail1}>
            <img src="./Images/gobeyond/Group 427322024.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail2}>
            <img src="./Images/gobeyond/Group 427322037.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail3}>
            <img src="./Images/gobeyond/Group 427322126.svg" />
          </div>
          <div className="BlogCard" onClick={toRetail4}>
            <img src="./Images/gobeyond/Group 427322189 (1).svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
