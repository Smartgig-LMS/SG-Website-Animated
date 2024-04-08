import React from "react";

const Homevideo = ({ pageName }) => {
  return (
    <>
      <div className={`${pageName === "homeVideo" ? "active" : ""} homeVideo `}>
        <div className="videoTextContainer d-flex justify-content-center align-items-center">
          <video className="w-100" autoPlay loop muted>
            <source
              src="/Images/gobeyond/landing video 1.mp4"
              // src="https://smartgig-my.sharepoint.com/:v:/g/personal/snehitha_c_smartgig_tech/EZ2bE1TEDVtKhVMoHLrN8iIBtcVuJD8tXmhK8wucsZdoeQ?e=spxlZN&nav=eyJwbGF5YmFja09wdGlvbnMiOnt9LCJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJUZWFtcyIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJwb3N0cm9sbC1jb3B5bGluayIsInJlZmVycmFsUGxheWJhY2tTZXNzaW9uSWQiOiIwMjlmYTZiNi0zNzJkLTRhZTYtOGU3My01NGE2ODU3MWUwZmEifX0%3D&isSPOFile=1"
              // src="https://smartgiginternalfrontend.s3.ap-south-1.amazonaws.com/Go+Beyond.mp4"
              // src="https://testt.smartgig.tech/vid.mp4"
              // src="https://smartgiginternalfrontend.s3.ap-south-1.amazonaws.com/Go+Beyond+1.mp4"
              // src="https://smartgiginternalfrontend.s3.ap-south-1.amazonaws.com/Go+Beyond.mp4"
              type="video/mp4"
              allowFullScreen
            />
          </video>

          {/* <img src='./Images/gobeyond/GoBeyond.png' alt='...' style={{ width: "109%", height: "710px" }} /> */}

          {/* <div className="col-12 py-5 sliding">
                        <RotateTextAnimate />
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Homevideo;
