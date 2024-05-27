import React from "react";
import Footer from "../LandingPage/Footer";

export default function HanumanGame() {
  return (
    <>
      <div className="FeeelerBG">
        <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
          <div className="col col-md-6 mx-auto">
            <img
              src="./Images/gobeyond/Group 1321.svg"
              alt=""
              className="w-75 img-fluid"
            />
          </div>
          <div className="text-white text-md-left px-md-5">
            <div className="d-flex justify-content-md-start justify-content-center align-items-center gap-3">
              <h2>Hanuman</h2>
              <small>3D game</small>
            </div>
            <p className="pb-md-5 text-left p-2">
              Embark on an epic journey with 'Hanuman,' a 3D role-playing game
              that combines modern and historic elements. Drawing inspiration
              from the mythological story of hanuman, this action-packed
              adventure brings mythology to life with a contemporary twist.
            </p>
            <a
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
              href="https://play.google.com/store/apps/details?id=com.SmartgigTechnologies.HanumanTheInvincible&hl=en_US&gl=US"
            >
              <button
                className="btn text-white rounded-5 px-4 py-2 m-md-0 my-3"
                style={{ backgroundColor: "#FA8305" }}
              >
                Try For Free
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="px-md-5 px-3">
          <div>
            <h4
              className="pt-5 pb-3 pl-3"
              style={{ color: "#2563AC", fontWeight: "bold" }}
            >
              Story and Lore
            </h4>
          </div>
          <div className="img-left2">
            <div>
              <img src="./Images/gobeyond/Screenshot37.svg" alt="" />
            </div>
            <div>
              <img src="./Images/gobeyond/Screenshot38.svg" alt="" />
            </div>
            <div>
              <img src="./Images/gobeyond/Screenshot39.svg" alt="" />
            </div>
            <div>
              <img src="./Images/gobeyond/Screenshot40.svg" alt="" />
            </div>
          </div>
        </div>
        <p className="py-5" style={{ paddingLeft: "15%", paddingRight: "15%" }}>
          Explore the rich lore of 'Hanuman- THE INVINCIBLE,' where ancient
          mythology meets modern storytelling. Meet key characters like Hanuman,
          Indra, and Vayu as you uncover plot points and delve into captivating
          world-building elements. With a narrative inspired by the MYTHOLOGY OF
          HANUMAN, every twist and turn will keep players on the edge of their
          seats." 
        </p>
      </div>

      <div className="ThirdCardHanuman">
        <h3>Game Mechanics</h3>
        <h5 className="pt-2" style={{ lineHeight: "30px" }}>
          Dive into the heart of the gameplay, where running, jumping, and
          fighting mechanics combine to create a seamless and immersive
          experience. As players progress through each level, they'll encounter
          increasing challenges and dynamic environments. With innovative
          features like the respawn system and health management, 'Hanuman'
          offers a captivating and rewarding gameplay experience unlike any
          other.
        </h5>
      </div>
      <div className="p-md-5 m-md-5 p-4 rpgCss">
        <h4 style={{ color: "#2563AC", fontWeight: "bold" }}>RPG</h4>
        <p>
          Role-playing games (RPGs) immerse players into fantastical worlds
          where they become characters of their creation, embarking on epic
          adventures. Through collaborative storytelling and strategic
          decision-making, players shape the outcome of their journeys,
          fostering camaraderie and creativity. 
        </p>
        <img
          style={{ objectFit: "cover", maxWidth: "100%" }}
          src="./Images/gobeyond/Frame 54.svg"
          alt=""
        />
      </div>
      <div className="FourthCardHanuman my-5">
        <h3>Progress Updates</h3>
        <h5 className="pt-2" style={{ lineHeight: "30px" }}>
          Stay up-to-date with the latest developments in 'Hanuman,' from new
          features implemented to exciting progress milestones. Get insider
          insights into release dates, beta testing updates, and more as the
          game continues to evolve and grow.
        </h5>
      </div>
      <div className="p-md-5 m-md-5 p-4 text-center">
        <h4 style={{ color: "#2563AC", fontWeight: "bold" }}>Art and Design</h4>
        <p>
          Immerse yourself in the captivating world of 'Hanuman' with stunning
          concept art, intricately designed characters. With its stylized art
          and third-person perspective, every visual aspect of the game is
          meticulously crafted to transport players into the heart of the
          action."
        </p>
        <img
          style={{ objectFit: "cover", maxWidth: "100%" }}
          src="./Images/gobeyond/Frame 50.svg"
          alt=""
        />
      </div>
      <div className="FifthCardHanuman mt-5">
        <h3>Events and Promotions</h3>
        <h5 className="pt-2" style={{ lineHeight: "30px" }}>
          Join the 'Hanuman' community and participate in a variety of exciting
          events and promotions. From gaming conventions to special in-game
          competitions, there's always something new to discover. Keep an eye
          out for sales, promotions, and exclusive content as you embark on your
          epic adventure with 'Hanuman'.
        </h5>
      </div>
      <Footer />
    </>
  );
}
