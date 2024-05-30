import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function Gamification() {
  return (
    <>
      <div className="TestingContainer">
        <div className="col-lg-7">
          <div>
            <img
              src="./Images/gobeyond/gamification-icon-home.svg"
              width="190"
              height="50"
            />
          </div>
          <div>
            <h1
              style={{
                color: "#2563AC",
                fontWeight: "700",
                width: "458",
                height: "124",
              }}
              className="mt-2"
            >
              Gamification for
            </h1>
            <h1
              style={{
                color: "#F38211",
                fontWeight: "700",
                width: "458",
                height: "124",
              }}
              className="webhead mb-3 cyberSecHead"
            >
              Corporate World
            </h1>
          </div>
          <span>
            In this era of ever-evolving user behaviors and product interests,
            Gamification techniques are essential for rewarding users upon
            accomplishing desired tasks. SmartGig Technology Private Limited's
            Gamification Platform (SGP) can be seamlessly implemented in any
            enterprise scenario, fostering fun and incentive-based engagement
            that resonates well with users.
            <br />
            <br />
            <ul>
              <li>Push the boundaries</li>
              <li>Its about experience and engagement</li>
              <li>Amplify business outcomes</li>
              <li>Build Loyalty</li>
            </ul>
          </span>
        </div>
        <div className="col-lg-5 img-left">
          <img
            className="GameImg"
            src="./Images/gobeyond/Gamification-image.png"
          />
        </div>
      </div>
    </>
  );
}
