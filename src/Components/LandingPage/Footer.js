import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [isopen, setIsopen] = React.useState(false);
  const [year, setYear] = React.useState();

  const navigate = useNavigate();
  const terms = () => {
    setIsopen(false);
    navigate("/termspage");
  };

  const privacy = () => {
    setIsopen(false);
    navigate("/privacypage");
  };

  const refund = () => {
    setIsopen(false);
    navigate("/refundpage");
  };

  const Year = () => {
    let date = new Date();
    setYear(date.getFullYear());
  };

  useEffect(() => {
    Year();
  }, []);

  return (
    <div className="footerMain mt-5 bg-light">
      <div className="container">
        <div className="row py-3 justify-content-between text-center text-md-left">
          <div className="col-12 col-md-4 font-weight-bold mb-2 mb-md-0">
            Copyright © {year} SmartGig. All Rights Reserved.
          </div>
          <div className="col-12 col-md-8">
            <div className="row font-weight-bold">
              <div
                className="col-12 col-md-4 mb-2 mb-md-0"
                onClick={terms}
                style={{ cursor: "pointer" }}
              >
                Terms of Service
              </div>
              <div
                className="col-12 col-md-4 mb-2 mb-md-0"
                onClick={privacy}
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </div>
              <div
                className="col-12 col-md-4"
                onClick={refund}
                style={{ cursor: "pointer" }}
              >
                Cancellation & Refund
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
