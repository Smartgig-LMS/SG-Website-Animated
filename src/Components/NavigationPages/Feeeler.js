import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import enhanceImg from "../../../src/Feeeler-Images/feeeler-enhance.svg";
import map from "../../../src/Feeeler-Images/feeeler-map.svg";
import gametheme from "../../../src/Feeeler-Images/feeeler-gametheme.svg";
import quiz from "../../../src/Feeeler-Images/feeeler-quiz.svg";
import empEngage from "../../../src/Feeeler-Images/feeeler-emplyEngage.svg";
import leaderBoarddIcon from "../../../src/Feeeler-Images/leadBoard-icon.svg";
import eventIcon from "../../../src/Feeeler-Images/events-icon.svg";
import rewardsIcon from "../../../src/Feeeler-Images/reward-icon.svg";
import redeemRewardIcon from "../../../src/Feeeler-Images/redeemRewards-icon.svg";
import engagementIcon from "../../../src/Feeeler-Images/engagement-icon.svg";
import recogniseIcon from "../../../src/Feeeler-Images/recognition-icon.svg";
import profile from "../../../src/Feeeler-Images/feeler-p.logocurve.svg";
import feeelerImg from "../../../src/Feeeler-Images/feeeler-image.svg";
import webApp from "../../../src/Feeeler-Images/feeeler-webApp.svg";
import sdIcon1 from "../../../src/Feeeler-Images/sd-icon1.svg";
import sdIcon2 from "../../../src/Feeeler-Images/Agile-Approach.svg.svg";
import sdIcon3 from "../../../src/Feeeler-Images/High-Client-Retention-Rate.svg fill.svg";
import sdIcon4 from "../../../src/Feeeler-Images/Proven-Track-Records.svg.svg";
import sdIcon5 from "../../../src/Feeeler-Images/Quality-Assurance.svg.svg";
import sdIcon6 from "../../../src/Feeeler-Images/Cost-Efficiency.svg.svg";
import sdIcon7 from "../../../src/Feeeler-Images/Time-Bound-Delivery.svg.svg";
import sdIcon8 from "../../../src/Feeeler-Images/Full-Cycle-Development.svg fill.svg";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../LandingPage/Footer";

const Feeeler = () => {
  return (
    <div className="feeler-page">
      <div className="videoTextContainer d-flex justify-content-center align-items-center">
        {/* <video className="w-100" autoPlay loop muted> */}
        <video className="w-100" controls autoPlay loop>
          <source
            src="https://sgvideofreetoouse.s3.ap-south-1.amazonaws.com/Perch+Walkthrough+Final.mp4"
            type="video/mp4"
            allowFullScreen
          />
        </video>
      </div>
      <div className="section-1">
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-5 p-3"
          style={{ backgroundColor: "#F6FBFE" }}
        >
          <div className="mx-5 w-100 w-md-50">
            <img
              src="./Images/gobeyond/span.green-bg.svg"
              alt="greenBg"
              className="w-50"
            />
            <p className="subHead mb-0">Feeeler</p>
            <p className="descText">
              Experience Excellence{" "}
              <span className="text-black">
                in Software Product Development with SmartGig Technology Private
                Limited
              </span>
            </p>
            <p className="p-text">
              Our professional application offers a dual-purpose solution for
              organizations. Users will have a mobile app experience enriched
              with gaming features, enhancing their interest and participation
              in quizzes. Meanwhile, Administrators will effortlessly create and
              distribute quizzes with customizable features like cutoff times
              and categories to engage employees. With seamless quiz deployment
              and timely notifications, this product fosters organizational
              knowledge and engagement while providing administrators with a
              user-friendly tool for quiz management.
            </p>

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-start">
              <button className="trailBtn d-flex align-items-center justify-content-between">
                Try Feeeler For Free
                <span className="rightArrow" style={{ marginLeft: "10px" }}>
                  <KeyboardArrowRightIcon />
                </span>
              </button>
              <p className="noCred">
                <CheckCircleIcon style={{ color: "#0B97EF" }} />
                No credit card required
              </p>
            </div>
          </div>
          <div className="w-100 w-md-50">
            <div>
              <img
                src="./Images/gobeyond/Group 1707485353.svg"
                alt="mobile-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-md-5 p-1">
          <div className="w-100 w-md-50">
            <div>
              <img
                src="./Images/gobeyond/Group 1707485350.svg"
                alt="mobile-app"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="w-100 w-md-50">
            <p className="subHead mb-0">Feeeler Mobile App</p>
            <h2>Product Overview</h2>
            <p className="p-text">
              The end-user experience of our mobile application is designed to
              be engaging and dynamic, incorporating an innovative gaming
              feature that sets it apart. Through visually appealing graphics
              and interactive gameplay, users are drawn into gaming experience,
              This gaming element serves as a unique and compelling aspect of
              our application, distinguishing it from conventional
              organizational tools. In terms of user access and authentication,
              we have implemented a stringent login process to ensure security
              and exclusivity. Only users added by administrators have valid
              credentials, and they are granted access through a streamlined
              "magic link" login process. This approach not only safeguards
              sensitive organizational data but also simplifies the user
              experience, minimizing login friction and enhancing accessibility
              for authorized individuals. Our application features a dynamic
              levels dashboard, designed with a captivating gaming theme. Users
              navigate through a visually immersive level map, where each level
              represents a quiz activity.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-md-5 p-1 section-3">
          <div className="w-100 w-md-50">
            <div>
              <img src={webApp} alt="web-app" className="img-fluid" />
            </div>
          </div>
          <div className="w-100 w-md-50">
            <p className="subHead mb-0">Feeeler Web App</p>
            <h6>
              Custom Quiz App{" "}
              <span style={{ color: "#2563AC" }}>For Your Business</span>
            </h6>
            <p className="p-text">
              Our platform empowers administrators to create and distribute
              quizzes tailored to organizational needs, with customizable
              features like cutoff times and categories. They can effortlessly
              roll out quizzes to designated users, facilitating widespread
              participation among employees. Administrators also can manage user
              access, ensuring that only authorized individuals within the
              organization can engage with the quizzes and related content,
              thereby enhancing data security and organizational integrity.
            </p>
            <div className="">
              <button className="trailBtn d-flex align-items-center justify-content-between">
                Try Now
                <span className="rightArrow" style={{ marginLeft: "10px" }}>
                  <KeyboardArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4 py-4 px-3 p-md-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 style={{ color: "#F38313", fontWeight: "bold" }}>
              Enhancing Employee Productivity:
            </h4>
            <img
              src={enhanceImg}
              alt="EnhanceImage"
              className="img-fluid mt-4"
            />
          </div>
        </div>
      </div>

      <div className="section-5 py-3 px-2 p-md-5">
        <div className="text-center">
          <h3 style={{ color: "#2563AC", fontWeight: "bold" }}>
            Feature Spotlight
          </h3>
          <p className="p-text">
            Highlighting the key features that make our platform unique and
            powerful. Explore in-depth looks at our most innovative tools,
            designed to optimize your workflow and enhance your productivity.
            Each feature is crafted with user-centric design and advanced
            technology, ensuring you have the best tools at your disposal to
            achieve your goals.
          </p>
        </div>
        <div className="container mt-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-md-3 gap-3">
              <div className="w-25">
                <img src={map} alt="mapping" className="img-fluid" />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Interactive Level Map</h6>
                <p className="feature-t">
                  Navigate Your Journey Explore a dynamic world of learning with
                  our interactive map, guiding you through your educational
                  journey step by step.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3">
              <div className="w-25">
                <img src={gametheme} alt="gametheme" className="img-fluid" />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Immersive Gaming Theme</h6>
                <p className="feature-t">
                  {" "}
                  Level Up Your Learning Dive into an exciting gaming-themed
                  environment where learning feels like embarking on an epic
                  adventure, motivating you to level up your skills.
                </p>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3">
              <div className="w-25">
                <img src={quiz} alt="quiz" className="img-fluid" />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Categories-Based Quizzes</h6>
                <p className="feature-t">
                  Tailored Knowledge Exploration Delve into a wealth of
                  knowledge organized by categories, offering customized quizzes
                  to match employee needs and expertise, fostering targeted
                  learning experiences.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3">
              <div className="w-25">
                <img
                  src={empEngage}
                  alt="employeeEngage"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Boosted Employee Engagement </h6>
                <p className="feature-t">
                  Fostering Active Involvement Track and enhance employee
                  engagement levels, cultivating a culture of active
                  participation and contribution. Reward employees with coins
                  for their involvement, encouraging sustained engagement and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6 px-md-5 px-3 feature">
        <div className="row">
          <div className="col-lg-12 text-center p-md-5 py-5">
            <h3 style={{ color: "#F38313", fontWeight: "bold" }}>
              Planned Features
            </h3>
            <div className="row my-5">
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src={leaderBoarddIcon}
                    alt="leaderBoarddIcon"
                    className="img-fluid"
                  />
                  <hr className="featrHr-line" />
                  <h6 className="font-weight-bold">
                    Leaderboard; <br />
                    Celebrate Achievement
                  </h6>
                  <p>
                    Celebrate Achievement Track your progress and compete with
                    colleagues on Feeeler's dynamic leaderboard, recognizing
                    your accomplishments and fostering a culture of excellence.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-blue">
                  <img src={eventIcon} alt="eventIcon" className="img-fluid" />
                  <hr />
                  <h6 className="font-weight-bold">Events</h6>
                  <p>
                    Learning in Celebration Immerse yourself in themed learning
                    experiences tailored to company events and celebrations.
                    Feeeler's event-based quizzes infuse learning with the joy
                    of festivity, creating memorable and engaging learning
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src={rewardsIcon}
                    alt="rewardsIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">Rewards</h6>
                  <p>
                    Fueling Motivation Earn coins through active engagement and
                    unlock exciting rewards on Feeeler. From exclusive content
                    to tangible benefits, our rewards system elevates your
                    motivation and enhances your experience within the platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-blue">
                  <img
                    src={redeemRewardIcon}
                    alt="redeemRewardIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">Redeem Rewards</h6>
                  <p>
                    Personalized Benefits Seamlessly convert your hard-earned
                    coins into tangible benefits tailored to your professional
                    development. Whether it's additional vacation days,
                    personalized training, or other perks, Feeeler offers a
                    convenient redemption process to support your growth.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src={engagementIcon}
                    alt="engagementIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">Engagement</h6>
                  <p>
                    Drive Productivity With Feeeler, empower your workforce to
                    excel and drive productivity in the modern workplace. Our
                    platform encourages active participation and collaboration,
                    fostering a culture of continuous learning and development.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-blue">
                  <img
                    src={recogniseIcon}
                    alt="recogniseIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">Recognition</h6>
                  <p>
                    Acknowledge Excellence Through Feeeler's recognition
                    features, celebrate the achievements of your team members
                    and acknowledge their contributions. Enhance morale and
                    strengthen organizational bonds by valuing the efforts of
                    your workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-7 p-md-5 py-5 text-center">
        <div className="container">
          <h3>
            Why We're Your{" "}
            <span style={{ color: "#2563AC" }}>
              Ideal Software Development Partner
            </span>
          </h3>
          <div className="mx-md-5">
            <p className="p-md-4 py-3">
              As your software development partner, we bring a wealth of
              experience, a client-centric approach, and cutting-edge
              technologies to transform your vision into impactful, reliable
              software solutions
            </p>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon1} alt="sdIcon1" />
                <p className="sdIconText">Tailored Quizzing Experience</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon2} alt="sdIcon2" />
                <p className="sdIconText">Flexible Development Approach</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon3} alt="sdIcon3" />
                <p className="sdIconText">High User Engagement</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon4} alt="sdIcon4" />
                <p className="sdIconText">
                  Demonstrated Success in Quiz App Development
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon5} alt="sdIcon5" />
                <p className="sdIconText">Quality Question Sets</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon6} alt="sdIcon6" />
                <p className="sdIconText">Cost-Effective Solutions</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon7} alt="sdIcon7" />
                <p className="sdIconText">Timely Updates and Enhancements</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon8} alt="sdIcon8" />
                <p className="sdIconText">End-to-End Quiz App Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-8 p-md-5 py-3 px-2 Review text-center"
        style={{ background: "#F0F9FF" }}
      >
        <div className="container">
          <h5>
            Feeeler <span style={{ color: "#2563AC" }}>Review</span>
          </h5>
          <p className="p-text">
            Dive into the genuine feedback from our esteemed clientele, and
            discover why they choose us time and again.
          </p>
          <div className="Review-div container px-md-5 m-md-2">
            <img src="./Images/gobeyond/quote.svg" alt="" className="p-3" />
            <p>
              Feeeler is a game-changer for our field service operations. Its
              integrated CRM and geolocation have turbocharged our workflow.
              Centralized customer data helps us provide personalized service.
              The sophisticated payment platform is a breeze, boosting
              efficiency for us and our customers. Feeeler serves as the key
              ingredient for elevating both customer satisfaction and
              operational efficiency.
            </p>
            <div className="text-center">
              <p className="mb-0" style={{ color: "#F38313" }}>
                Richie Elliott
              </p>
              <p>HR</p>
              <img src={profile} alt="profile" height={100} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-9 p-md-5 py-5 px-3">
        <h4 style={{ color: "#F38313", fontWeight: "bold" }}>
          Conceptualization of the App
        </h4>
        <div className="row gx-3">
          <div className="col-lg-4">
            <div className="descp p-4">
              <h6 className="font-weight-bold">
                Redefining Workplace Engagement
              </h6>
              <p>
                Feeeler redefines workplace engagement with gamified learning,
                incentivized engagement, and strengthened organizational bonds.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="descp p-4">
              <h6 className="font-weight-bold">
                Transforming Learning into an Adventure
              </h6>
              <p>
                Through interactive features like themed quizzes and rewards, it
                transforms learning into an adventure, fostering a culture of
                continuous development and collaboration.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="descp p-4">
              <h6 className="font-weight-bold">
                Empowering Success with Feeeler
              </h6>
              <p>
                With Feeeler, organizations empower their workforce to excel,
                driving productivity and success in the modern workplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-10 text-center mx-md-5 p-md-5 p-2">
        <h2 style={{ color: "#2563AC", fontWeight: "900" }}>
          Got questions? for The Feeeler
        </h2>
        <p className="p-text">
          Check out our FAQ section for quick answers to common questions.
          Whether you need help with our features, pricing, or account setup,
          you'll find the information you need right here. If you don't find
          what you're looking for, feel free to reach out to our support team
          for further assistance.
        </p>
        <div className="row align-items-md-center justify-content-center mt-5">
          <div className="col-lg-4">
            <img src={feeelerImg} alt="feeelerImage" />
          </div>
          <div className="col-lg-8">
            <div className="mt-3 mb-3 text-left">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="headingAccordion">What is Feeeler?</div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Feeler is an organizational app designed to boost employee
                    engagement through fun and interactive quizzes. It
                    incorporates a gaming theme to make participation enjoyable
                    and motivating.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      {" "}
                      Is Feeler free to use?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Yes, Feeler is completely free to use. There are no in-app
                    purchases or hidden fees.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What platforms is Feeler available on?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Feeler is available on iOS, Android, and web browsers. You
                    can download it from the App Store, Google Play, or access
                    it directly at [your website URL].
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How do I create an account on Feeler?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Feeler accounts are created through your organization. Only
                    organizations registered with the Feeler team can log in.
                    Please contact your organization's admin for access.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      I’m interested in using Feeler for my organization. How do
                      we get started?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    If your organization is interested in using Feeler, please
                    reach out to us via email at [x email] for more information
                    and to register.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      Can individuals sign up for Feeler?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    No, Feeler is designed for organizational use only.
                    Individuals cannot sign up directly; they must be part of a
                    registered organization.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What kind of quizzes can we create with Feeler?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Organizations can create a variety of quizzes tailored to
                    their needs, including training modules, team-building
                    exercises, and knowledge assessments.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How does Feeler ensure data privacy and security?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Feeler takes data privacy and security seriously. We use
                    advanced encryption methods to protect user data and comply
                    with industry standards to ensure your information is safe.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What should I do if I encounter an issue with Feeler?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    If you encounter any issues, please contact your
                    organization’s Feeler admin first. If further assistance is
                    needed, you can reach out to our support team at [support
                    email].
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How can I contact the Feeler team for more information?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    For any inquiries, please email us at [x email]. Our team
                    will be happy to assist you.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feeeler;
