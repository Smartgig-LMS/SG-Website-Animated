import React from "react";

const Homevideo = ({ pageName }) => {
  return (
    <>
      <div className={`${pageName === "homeVideo" ? "active" : ""} homeVideo `}>
        <div className="videoTextContainer d-flex justify-content-center align-items-center">
          <video className="w-100" autoPlay loop muted>
            <source
              src="https://sgvideofreetoouse.s3.ap-south-1.amazonaws.com/sglandingpage.mp4"
              // src="https://smartgiginternalfrontend.s3.ap-south-1.amazonaws.com/Go+Beyond.mp4"
              type="video/mp4"
              allowFullScreen
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default Homevideo;
