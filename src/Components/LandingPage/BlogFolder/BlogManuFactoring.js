import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogManuFactoring() {
  const navigate = useNavigate();
  const toManuFactoring1 = () => {
    navigate("/manufactoringblog1");
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
            src="./Images/gobeyond/Gro83988394888.svg"
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
        <div className="d-flex" style={{cursor:"pointer"}}>
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Group card 3.svg" />
          </div>
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Group card 2.svg" />
          </div>
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Group card 3.svg" />
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
            src="./Images/gobeyond/Gro83988394888.svg"
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
        <div className="d-flex">
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Item.svg" />
          </div>
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Item111.svg" />
          </div>
          <div className="BlogCard" onClick={toManuFactoring1}>
            <img src="./Images/gobeyond/Item222.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
