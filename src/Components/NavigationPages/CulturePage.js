import React, { useState, useEffect } from "react";
import Footer from "../LandingPage/Footer";
import "react-slideshow-image/dist/styles.css";

const listOfImages = [
  "./Images/gobeyond/WhatsApp1.png",
  "./Images/gobeyond/Trip2.png",
  "./Images/gobeyond/GroupImg32.png",
  "./Images/gobeyond/Thumbnail22.png",
  "./Images/gobeyond/Group Img 13.png",
  "./Images/gobeyond/Thumbnail23.png",
  "./Images/gobeyond/Group 427321517.png",
  "./Images/gobeyond/Group Img 2 2.png",
  "./Images/gobeyond/WhatsA1.png",
  "./Images/gobeyond/WhatsApp1.png",
  "./Images/gobeyond/Mahesh352.png",
  "./Images/gobeyond/MicrosoftTeams-image362.png",
];

export default function CulturePage() {
  const [displayedImages, setDisplayedImages] = useState(
    listOfImages.slice(0, 4)
  );
  const [currentIndex, setCurrentIndex] = useState(4);

  // image chnages in 10 sec -----------------------------

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const displayedImages = () => {
      const nextIndex = currentIndex + 4;
      if (nextIndex <= listOfImages.length) {
        setDisplayedImages(listOfImages.slice(currentIndex, nextIndex));
        setCurrentIndex(nextIndex);
      } else {
        setDisplayedImages(listOfImages.slice(0, 4));
        setCurrentIndex(4);
      }
    };
    const timer = setInterval(displayedImages, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, listOfImages]);

  return (
    <>
      <div>
        <div className="culturepg">
          <div className="CultureHeadnig">
            <h1>The beauty of the world lies in the diversity of its people</h1>
          </div>
          <div className="Lastcontainer">
            <div>
              <img
                src="./Images/gobeyond/About-Us.svg"
                width="129"
                height="50"
              />
            </div>
            <h1>Client first, Team foremost</h1>
            <span>
              In this constantly evolving landscape of technology, SmartGig is a
              dynamic IT company that specializes in niche industries. Our team
              of enthusiastic experts, unlocks the full <br />
              potential of designing, developing, and testing solutions for our
              clients and help businesses embrace next-gen technologies to stay
              future-ready.
              <br />
            </span>
          </div>
          <div className="totalMain2">
            <div className="Leftcontainer">
              <img
                src="./Images/gobeyond/MicrosoftTe1.svg"
                alt="image"
                className="mission"
              />
            </div>
            <div className="rightContainer mt-3">
              <div className="opLeftSec ml-5">
                <img
                  src="./Images/gobeyond/Our-Mission.svg"
                  width="159"
                  height="48"
                />
              </div>
              <p className="col-12 mb-4 mt-0">
                Our mission is our meticulous vision to drive business
                <br />
                excellence and empower customers through our expertise <br />
                in smart technology driven transformations and to embrace <br />
                the software services with Avant-grade solutions.
              </p>
            </div>
          </div>
          <div className="totalMain3">
            <div className="rightContainer mt-5">
              <div className="opLeftSec">
                <img
                  src="./Images/gobeyond/Our-Vision.svg"
                  width="139"
                  height="45"
                />
              </div>
              <p className="col-12 mb-4 mt-0">
                Our prime focus is to deliver absolute hands-free software{" "}
                <br />
                development along with other end-to-end software Testing <br />
                and quality services to our clients to enhance their experience
                <br />
                with efficiency and to build a strong long-term relationship
                with
                <br />
                them to navigate them towards leveraging on the technology{" "}
                <br />
                landscape.
              </p>
            </div>
            <div className="Leftcontainer">
              <img
                src="./Images/gobeyond/MicrosoftT501.svg"
                alt="image"
                className="vision"
              />
            </div>
          </div>
          <div className="Lastcontainer">
            <div>
              <img
                src="./Images/gobeyond/Our-Culture.svg"
                width="156"
                height="50"
              />
            </div>
            <h2>Values & Principles</h2>
            <div className="img-left">
              <img
                src="./Images/gobeyond/Group 427321805.svg"
                width={"50%"}
                className="mt-2"
              />
            </div>
            <div className="card mt-5">
              <div className="d-flex">
                <div className="cultureAnimat">
                  <br />
                  <h4>Values & Principles</h4>
                  <br />
                  <div className="newcard">
                    <p>
                      At our core, we are driven by trust, honesty, <br />
                      integrity, respect, passion, and a dedicated team <br />
                      that embodies these values in everything we do
                    </p>
                    <hr />
                    <p>
                      Drive for Excellence:
                      <br />
                      Dedicated and determined to serve the best for <br />
                      our clients
                    </p>
                    <hr />
                    <p>
                      Inclusivity and Diversity:
                      <br />
                      Fostering equality by valuing diverse perspectives <br />
                      ensures all team members feel included
                    </p>
                    <hr />
                    <p>
                      Client-Centric Approach :<br />
                      Building strong client connections with unwavering
                      <br /> commitment to delivering value
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="imageOfCultureNew5">
                    <img src={displayedImages[0]} />
                  </div>
                  <div className="imageOfCultureNew5">
                    <img src={displayedImages[1]} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="imageOfCultureNew5">
                    <img src={displayedImages[2]} />
                  </div>
                  <div className="imageOfCultureNew5">
                    <img src={displayedImages[3]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile--------------------------------------------------------------------------------  */}

      <div>
        <div className="culturepgForMobile ">
          <div className="CultureHeadnig">
            <h1>The beauty of the world lies in the diversity of its people</h1>
          </div>
          <div className="col-lg-7 mt-3 mb-3 text-center">
            <div>
              <img
                src="./Images/gobeyond/About-Us.svg"
                width="129"
                height="50"
              />
            </div>
            <h1>Client first, Team foremost</h1>
            <p className="text-left">
              In this constantly evolving landscape of technology, SmartGig is a
              dynamic IT company that specializes in niche industries. Our team
              of enthusiastic experts, unlocks the full potential of designing,
              developing, and testing solutions for our clients and help
              businesses embrace next-gen technologies to stay future-ready.
            </p>
          </div>
          <div className="col-lg-7  text-center">
            <div className="rightContainer mt-3">
              <div className="opLeftSec">
                <img
                  src="./Images/gobeyond/Our-Mission.svg"
                  width="159"
                  height="48"
                />
              </div>
              <p className="text-left">
                Our mission is our meticulous vision to drive business
                excellence and empower customers through our expertise in smart
                technology driven transformations and to embrace the software
                services with Avant-grade solutions.
              </p>
            </div>
            <div className="img-left">
              <img
                src="./Images/gobeyond/MicrosoftTe481.svg"
                alt="image"
                className="mission"
              />
            </div>
          </div>
          <div className="totalMain3 col-lg-7 text-center">
            <div className="rightContainer mt-5">
              <div className="opLeftSec">
                <img
                  src="./Images/gobeyond/Our-Vision.svg"
                  width="139"
                  height="45"
                />
              </div>
              <p className="text-left">
                Our prime focus is to deliver absolute hands-free software
                development along with other end -to -end software Testing and
                quality services to our clients to enhance their experience with
                efficiency and to build a strong long-term relationship with
                them to navigate them towards leveraging on the technology
                landscape.
              </p>
            </div>
            <div className="img-left mb-3">
              <img
                src="./Images/gobeyond/MicrosoftTeams501.svg"
                alt="image"
                className="vision"
              />
            </div>
          </div>
          <div className="col-lg-7  text-center">
            <div>
              <img
                src="./Images/gobeyond/Our-Culture.svg"
                width="156"
                height="50"
              />
            </div>
            <h2>Values & Principles</h2>
            <div className="img-left">
              <img src="./Images/gobeyond/Group 427321805.svg" />
            </div>

            <div className="card mt-2">
              <div className="cultureAnimat">
                <br />
                <h4>Values & Principles</h4>
                <br />
                <div className="newcard">
                  <p>
                    At our core, we are driven by trust, honesty, integrity,
                    respect, passion, and a dedicated team that embodies these
                    values in everything we do
                  </p>
                  <hr />
                  <p>
                    Drive for Excellence:
                    <br />
                    Dedicated and determined to serve the best for our clients
                  </p>
                  <hr />
                  <p>
                    Inclusivity and Diversity:
                    <br />
                    Fostering equality by valuing diverse perspectives ensures
                    all team members feel included
                  </p>
                  <hr />
                  <p>
                    Client-Centric Approach :<br />
                    Building strong client connections with unwavering
                    commitment to delivering value
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="img-left">
                  <img src={displayedImages[0]} />
                </div>
                <div className="img-left">
                  <img src={displayedImages[1]} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="img-left">
                  <img src={displayedImages[2]} />
                </div>
                <div className="img-left">
                  <img src={displayedImages[3]} />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='footerForMobile'>
                        <hr />
                        Copyright © 2023 SmartGig. All Rights Reserved.
                    </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
