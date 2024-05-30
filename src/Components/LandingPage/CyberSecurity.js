import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function CyberSecurity() {
  return (
    <div className="TestingContainer">
      <div className="col-lg-7">
        <div>
          <img
            src="./Images/gobeyond/cyber-security-home.svg"
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
            Securing Your
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
            Tomorrow, Today
          </h1>
        </div>
        <p className="mb-3">
          In an increasingly connected world, security is not a choice; it's a
          necessity. At SmartGig Technology Private Limited, we're dedicated to
          providing top-tier cybersecurity solutions that empower businesses to
          thrive in the digital age. We stay ahead of emerging threats to keep
          your systems secure. <br />
          <br />
          Managed Cyber Security: Simplify your cloud, network, and endpoint
          security with our cloud-native suite, part of an Extended Detection
          and Response (XDR) platform, built with skilled and certified
          professionals, Technology partnerships and MITRE ATT&CK framework.
        </p>
      </div>
      <div className="col-lg-5 img-left">
        <img src="./Images/gobeyond/Cyber-Security-Image.png" />
      </div>
    </div>
  );
}
