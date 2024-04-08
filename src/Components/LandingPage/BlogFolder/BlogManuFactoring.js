import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

export default function BlogManuFactoring() {
  const navigate = useNavigate();
  const toManuFactoring1 = () => {
    navigate("/manufactoringblog1");
  };

  const toManuFactoring2 = () => {
    navigate("/manufactoringblog2");
  };

  const toManuFactoring3 = () => {
    navigate("/manufactoringblog3");
  };

  const toManuFactoring4 = () => {
    navigate("/manufactoringblog4");
  };

  const toManuFactoring5 = () => {
    navigate("/manufactoringblog5");
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
            src="./Images/gobeyond/blog-manufacturing.svg"
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
          style={{ cursor: "pointer", gap: "2%" }}
        >
          <div class="row">
            <div className="BlogCard col-lg-3" onClick={toManuFactoring1}>
              <img src="./Images/gobeyond/Manufacturing-img-1.svg" />
            </div>
            <div className="BlogCard col-lg-3" onClick={toManuFactoring2}>
              <img src="./Images/gobeyond/Manufacturing-img-2.svg" />
            </div>
            <div className="BlogCard col-lg-3" onClick={toManuFactoring3}>
              <img src="./Images/gobeyond/Manufacturing-img-3.svg" />
            </div>
            <div className="BlogCard col-lg-3" onClick={toManuFactoring4}>
              <img src="./Images/gobeyond/Group 427322192.svg" />
            </div>
            <div className="BlogCard col-lg-3 mt-4" onClick={toManuFactoring5}>
              <img src="./Images/gobeyond/Group 427322200.svg" />
            </div>
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
            src="./Images/gobeyond/blog-manufacturing.svg"
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
        <div className="d-flex pl-2 pr-2" style={{ gap: "2%" }}>
          <div class="row">
            <div className="BlogCard col-6" onClick={toManuFactoring1}>
              <img src="./Images/gobeyond/Manufacturing-img-1.svg" />
            </div>
            <div className="BlogCard col-6" onClick={toManuFactoring2}>
              <img src="./Images/gobeyond/Manufacturing-img-2.svg" />
            </div>
            <div className="BlogCard col-6 mt-4" onClick={toManuFactoring3}>
              <img src="./Images/gobeyond/Manufacturing-img-3.svg" />
            </div>
            <div className="BlogCard col-6 mt-4" onClick={toManuFactoring4}>
              <img src="./Images/gobeyond/Group 427322192.svg" />
            </div>
            <div className="BlogCard col-6 mt-4" onClick={toManuFactoring5}>
              <img src="./Images/gobeyond/Group 427322200.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
