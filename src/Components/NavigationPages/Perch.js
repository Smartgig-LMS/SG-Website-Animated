import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import profile from "../../../src/Feeeler-Images/feeler-p.logocurve.svg";
import webApp from "../../../src/Feeeler-Images/Group 1000015186.svg";
import sdIcon1 from "../../../src/Feeeler-Images/sd-icon1.svg";
import sdIcon2 from "../../../src/Feeeler-Images/Agile-Approach.svg.svg";
import sdIcon3 from "../../../src/Feeeler-Images/High-Client-Retention-Rate.svg fill.svg";
import sdIcon4 from "../../../src/Feeeler-Images/Proven-Track-Records.svg.svg";
import sdIcon5 from "../../../src/Feeeler-Images/Quality-Assurance.svg.svg";
import sdIcon6 from "../../../src/Feeeler-Images/Cost-Efficiency.svg.svg";
import sdIcon7 from "../../../src/Feeeler-Images/Time-Bound-Delivery.svg.svg";
import sdIcon8 from "../../../src/Feeeler-Images/Full-Cycle-Development.svg fill.svg";
import PerchLogo from "../../../src/Feeeler-Images/Group 1220.svg";
import Footer from "../LandingPage/Footer";
import Accordion from "react-bootstrap/Accordion";

const Perch = ({ pageName }) => {
  return (
    <div className={`${pageName === "homeVideo" ? "active" : ""} homeVideo `}>
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
          <h3 style={{ color: "#2563AC" }}>Perch</h3>
          <h3>
            <k style={{ color: "#2563AC" }}>Experience Excellence</k> in
            Software Product Development with SmartGig Technology Private
            Limited
          </h3>
          <p>
            PERCH is a unique HRMS application used by signing in through magic
            link, which allows you to keep track of your hr functions and
            connect with people. providing consistent user experience across all
            the organization platforms. It integrates employee data and allied
            activities that are important from the HR perspective such as
            posting feeds, managing profile, recruitment, on-boarding,
            attendance, holidays, leaves, assessments. From tracking
            login/logout details to fostering internal communication, Perch
            empowers both users and administrators, making it the go-to solution
            for modern workforce management.
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-start">
            <button className="trailBtn d-flex align-items-center justify-content-between">
              Try Perch For Free
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
          <img
            src="./Images/gobeyond/Group 1707485335.svg"
            alt="perchMobile"
            className="w-100"
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-5 p-3">
        <div className="w-100 w-md-50">
          <h4 style={{ color: "#2563AC" }}>Perch Mobile App</h4>
          <h1>Product Overview</h1>
          <p>
            <p>
              <span style={{ fontWeight: "bold" }}>Home screen: </span>
              Unveil a personalized dashboard that keeps you connected and
              informed. Instantly access your login/logout details, attendance
              records, available leaves, and upcoming celebrations like
              birthdays and anniversaries. Stay ahead with a glance at upcoming
              holidays.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Feed Screen: </span>
              Engage and connect with colleagues effortlessly. Share updates,
              comment on posts, repost content, save important feeds, and
              promote seamless collaboration within your organization.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Internal Job posting: </span>
              Explore career growth opportunities within the organization. Stay
              updated on recent job postings and effortlessly refer potential
              candidates to open roles.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Profile screen: </span>
              Take control of your digital presence. View your activity, posts,
              and saved content. Access and manage personal information,
              including contact details, emergency contacts, and address details
              in one centralized location.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Approvals: </span>
              Simplify leave management. View your leave details, apply for
              leaves, and regularize your schedule. Reporting managers receive
              notifications and can efficiently approve or reject leaves with
              valid reasons.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Asset management: </span>
              Seamlessly handle asset-related concerns. Raise tickets for asset
              issues, and administrators can efficiently manage assets and
              resolve tickets. Gain insights into asset and vendor details
              effortlessly.
            </p>
          </p>
        </div>
        <div className="w-100 w-md-50 ml-md-3">
          <img
            src="./Images/gobeyond/UI.svg"
            alt="perchMobile"
            className="w-100"
          />
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
            <p className="subHead mb-0">Perch Web App</p>
            <h6>
              Custom Application{" "}
              <span style={{ color: "#2563AC" }}>For Your Business</span>
            </h6>
            <p className="p-text">
              In Perch, administrators take the lead in creating a harmonious
              leave management system. Admins can effortlessly add employee
              leaves based on their joining date, ensuring accurate and
              up-to-date records. The centralized platform allows admins to view
              leave requests, enabling a holistic approach to workforce
              scheduling and resource planning. Reporting manager: For reporting
              managers, Perch provides a streamlined leave approval process.
              Receive instant notifications when team members apply for leave,
              allowing for prompt decision-making. Reporting managers can
              efficiently approve or reject leave requests, providing valid
              reasons directly through the platform. This real-time interaction
              fosters effective communication and helps maintain a balanced
              workflow. thereby enhancing data security and organizational
              integrity.
            </p>
            <div>
              <button className="trailBtn d-flex align-items-center justify-content-between">
                Try now
                <span className="rightArrow" style={{ marginLeft: "10px" }}>
                  <KeyboardArrowRightIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center section-4 py-4 px-3">
        <h4 style={{ color: "#2563AC", fontWeight: "bold" }}>
          Enhancing Employee Productivity:
        </h4>
        <div className="col col-lg-8 mx-auto">
          <img
            src="./Images/gobeyond/Frame 1171276057.svg"
            alt="EnhanceImage"
            className="img-fluid"
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
      </div>

      <div className="section-5 py-3 px-2 p-md-5">
        <div className="text-center">
          <h3 style={{ color: "#2563AC", fontWeight: "bold" }}>
            Unveiling Functionality
          </h3>
          <p className="p-text">
            Discover the robust features and seamless integration capabilities
            that set our platform apart. Dive into the intricacies of our tools
            designed to enhance productivity, streamline workflows, and provide
            unparalleled user experience. From advanced analytics to intuitive
            user interfaces, explore how our functionality can drive success for
            your business.
          </p>
        </div>
        <div className="container mt-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon.svg"
                  alt="mapping"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Effortless Login:</h6>
                <p className="feature-t">
                  Perch ensures quick and secure access with a seamless login
                  experience via secure magic links.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon2.svg"
                  alt="gametheme"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Insightful Home Screen:</h6>
                <p className="feature-t">
                  Upon login, users access a dynamic home screen displaying
                  essential information like check-in/out times, leave
                  availability, and upcoming holidays, fostering efficiency.
                </p>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon3.svg"
                  alt="quiz"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Calendar Highlights:</h6>
                <p className="feature-t">
                  Users stay informed about important dates with an intuitive
                  calendar, receiving notifications for work anniversaries and
                  birthdays, enhancing engagement.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon4.svg"
                  alt="employeeEngage"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Interactive Feed:</h6>
                <p className="feature-t">
                  Perch fosters community engagement by enabling users to
                  interact with posts through likes, comments, shares, and
                  celebrate milestones, fostering a connected workplace
                  environment.
                </p>
              </div>
            </div>
          </div>
          {/* third row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon5.svg"
                  alt="quiz"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Job Referral System: </h6>
                <p className="feature-t">
                  Facilitating internal networking, Perch allows users to
                  explore available job positions and refer friends, promoting
                  collaboration and growth.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon6.svg"
                  alt="employeeEngage"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Profile Management:</h6>
                <p className="feature-t">
                  Users can easily update personal information, manage posts,
                  and control profile visibility, ensuring accuracy and
                  customization.
                </p>
              </div>
            </div>
          </div>
          {/* fourth row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon7.svg"
                  alt="quiz"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Leave Management:</h6>
                <p className="feature-t">
                  Perch streamlines the leave application process, allowing
                  seamless applications, request tracking, and leave balance
                  insights for efficient workforce management.
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-md-3 gap-3 w-md-50 w-100">
              <div className="w-25">
                <img
                  src="./Images/gobeyond/div.feature-icon8.svg"
                  alt="employeeEngage"
                  className="img-fluid"
                />
              </div>
              <div className="w-75">
                <h6 className="feature-h">Asset and Ticketing System:</h6>
                <p className="feature-t">
                  Administrators efficiently manage and track employee assets,
                  while employees can raise tickets for swift resolutions,
                  ensuring transparency and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6 px-md-5 px-3 feature">
        <div className="row justify-content-center align-items-start">
          <div className="col-lg-12 text-center p-md-5 py-5">
            <h3 style={{ color: "#F38313", fontWeight: "bold" }}>
              Planned Features
            </h3>
            <div className="row my-5">
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src="./Images/gobeyond/icon2.svg"
                    alt="leaderBoarddIcon"
                    className="img-fluid"
                  />
                  <hr className="featrHr-line" />
                  <h6 className="font-weight-bold">TIMESHEET:</h6>
                  <ul className="text-left">
                    <li>Track login/logout timings and request adjustments.</li>
                    <li>Admins monitor and approve time requests.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-blue">
                  <img
                    src="./Images/gobeyond/icon3.svg"
                    alt="eventIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">NOTIFICATIONS:</h6>
                  <ul className="text-left">
                    <li>
                      Receive notifications for leave requests,
                      approvals/rejections, payslip availability, performance
                      reviews, company news, tasks, and approvals.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src="./Images/gobeyond/icon4.svg"
                    alt="rewardsIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">JUST FOR YOU:</h6>
                  <ul className="text-left">
                    <li>
                      Consolidated Coupon Hub: Central hub for employee
                      discounts.
                    </li>
                    <li>Variety of Platforms: Diverse range of coupons.</li>
                    <li>Seamless Redemption: Easy discount redemption.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row my-2 justify-content-center align-items-start">
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-blue">
                  <img
                    src="./Images/gobeyond/icon5.svg"
                    alt="redeemRewardIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">PAYSLIPS ACCESS:</h6>
                  <ul className="text-left">
                    <li>On-Demand Access: View payslips anytime.</li>
                    <li>Detailed Breakdown: Comprehensive salary details.</li>
                    <li>Downloadable Format: Easily download payslips.</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="planfeature-div">
                  <img
                    src="./Images/gobeyond/icon6.svg"
                    alt="engagementIcon"
                    className="img-fluid"
                  />
                  <hr />
                  <h6 className="font-weight-bold">RESUME BUILDER:</h6>
                  <ul className="text-left">
                    <li>
                      Template Galore: Choose from professional templates.
                    </li>
                    <li>
                      Customization Made Easy: User-friendly editing tools.
                    </li>
                    <li>Highlight Achievements: Showcase accomplishments.</li>
                    <li>
                      Tailor for Success: Build multiple tailored resumes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-7 p-md-5 py-5 text-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="container">
          <h3>
            Why We're Your{" "}
            <span style={{ color: "#2563AC" }}>
              Ideal Software Development Partner
            </span>
          </h3>
          <div className="mx-md-5">
            <p className="p-md-5 py-3">
              As your software development partner, we bring a wealth of
              experience, a client-centric approach, and cutting-edge
              technologies to transform your vision into impactful, reliable
              software solutions
            </p>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon1} alt="sdIcon1" />
                <p className="sdIconText">Customized Solutions</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon2} alt="sdIcon2" />
                <p className="sdIconText">Agile Approach</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon3} alt="sdIcon3" />
                <p className="sdIconText">High Client Retention Rate</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon4} alt="sdIcon4" />
                <p className="sdIconText">Proven Track Record</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon5} alt="sdIcon5" />
                <p className="sdIconText">Quality Assurance</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon6} alt="sdIcon6" />
                <p className="sdIconText">Cost-Efficiency</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon7} alt="sdIcon7" />
                <p className="sdIconText">Time-Bound Delivery</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={sdIcon8} alt="sdIcon8" />
                <p className="sdIconText">Full-Cycle Development</p>
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
            Perch <span style={{ color: "#2563AC" }}>Review</span>
          </h5>
          <p className="p-text">
            Dive into the genuine feedback from our esteemed clientele, and
            discover why they choose us time and again.
          </p>
          <div className="Review-div container px-md-5 m-md-2">
            <img src="./Images/gobeyond/quote.svg" alt="" className="p-3" />
            <p>
              Admins can effortlessly oversee client details, including company
              information, employee contact details, and project specifics.
              Effectively manage client projects, ensuring transparency and
              efficiency. 
            </p>
            <div className="text-center">
              <p className="mb-0" style={{ color: "#F38313" }}>
                Mahesh Nayani
              </p>
              <p>CEO</p>
              <img src={profile} alt="profile" height={100} />
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 d-none d-md-block">
        <h3 style={{ color: "#F38313", fontWeight: "bold" }}>
          Conceptualization of the App
        </h3>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container mt-5">
            <div className="d-flex gap-5">
              <div className="imageOfCultureNew3">
                <div className="containerNew">
                  <img src="./Images/gobeyond/ProjectCard.svg" />
                  <div className="overlay">
                    <div className="text">
                      <h4> 1. Purpose and Goal:</h4>
                      <p>
                        Clearly define the app's primary objective, whether it's
                        to streamline HR processes, enhance employee engagement,
                        or improve organizational efficiency. Understanding the
                        purpose guides all subsequent decisions during
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="imageOfCultureNew3">
                <div className="containerNew">
                  <img src="./Images/gobeyond/ProjectCard2.svg" />
                  <div className="overlay">
                    <div className="text">
                      <h4>2. User-Centric Design:</h4>
                      <p>
                        Prioritize user experience by focusing on intuitive
                        interfaces, easy navigation, and efficient workflows.
                        The app should be designed with the end-user in mind to
                        ensure usability and adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="imageOfCultureNew3">
                <div className="containerNew">
                  <img src="./Images/gobeyond/ProjectCard3.svg" />
                  <div className="overlay">
                    <div className="text">
                      <h4> 3. Scalability and Adaptability:</h4>
                      <p>
                        Plan for the app's future growth and evolution by
                        designing a flexible architecture that can accommodate
                        new features, integrations, and changes in user
                        requirements. This ensures the app remains relevant and
                        effective in meeting organizational needs over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-10 text-center mx-md-5 p-md-5 p-2">
        <h2 style={{ color: "#2563AC", fontWeight: "900" }}>
          Got questions? for The Perch
        </h2>
        <p className="p-text">
          Check out our FAQ section for quick answers to common questions.
          Whether you need help with our features, pricing, or account setup,
          you'll find the information you need right here. If you don't find
          what you're looking for, feel free to reach out to our support team
          for further assistance.
        </p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mt-5">
          <div className="col col-lg-4 mx-auto">
            <img
              src={PerchLogo}
              alt="img-fluid"
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div className="col-lg-8">
            <div className="mt-3 mb-3 text-left">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="headingAccordion">What is Perch HRMS? </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Perch HRMS is a comprehensive human resource management
                    system that helps manage various HR functions such as
                    attendance, leave management, profile updates, recruitment,
                    and more. It fosters collaboration, communication, and
                    efficiency within organizations.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      {" "}
                      What are the benefits of using Perch HRMS?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Perch HRMS offers a variety of benefits for both employees
                    and administrators, including:
                    <li>Effortless login and intuitive home screen</li>
                    <li>Streamlined leave management</li>
                    <li>Improved communication and transparency</li>
                    <li>Enhanced employee engagement</li>
                    <li>Increased productivity</li>
                    <li>Tracking work timings and status</li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How do I get started with Perch HRMS?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    You will receive an activation email with a link to activate
                    your account. Once activated, download the Perch app from
                    the Play Store (Android) or App Store (iOS). Sign in using
                    your registered email address and then click on the magic
                    link sent via email to access the Perch application home
                    screen.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How do I register for Perch?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    You will receive an activation email from
                    devops@smartgig.tech Click the activation link in the email
                    to register your account.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How do I log in to Perch?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    After registering, download the Perch application from the
                    Play Store or App Store. Open the app, enter your registered
                    email address, and you will receive a magic link email.
                    Click "Open Perch" in the email to access your account.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What should I do if I don't receive the activation email?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Check your spam or junk folder for the email. If you still
                    don't see it, contact your HR administrator for assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      I forgot my password. How can I reset it?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Perch uses a magic link for login, so there is no password
                    to reset. If you are having trouble logging in, contact your
                    HR administrator for assistance.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What features does Perch offer?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Perch offers a variety of features, including:
                    <li>Effortless login with magic link</li>
                    <li>
                      Dynamic home screen with attendance and leave tracking
                    </li>
                    <li>
                      Effortless check-in/out and timesheet tracking (planned
                      feature)
                    </li>
                    <li>
                      Calendar with holiday and work anniversary reminders
                    </li>
                    <li>Interactive social feed to connect with colleagues</li>
                    <li>
                      Job posting and referral system for internal career
                      opportunities
                    </li>
                    <li>Personalized profile management</li>
                    <li>Streamlined leave application and tracking</li>
                    <li>Ability to raise tickets for asset-related issues</li>
                    <li>
                      Access to payslips (if enabled by your organization)
                    </li>
                    <li>Resume builder (planned feature)</li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      What features does Perch HRMS offer for administrators?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Perch HRMS offers a variety of features for administrators,
                    including:
                    <li>Leave overview for informed decision-making</li>
                    <li>Management of employee assets and ticketing system</li>
                    <li>Input and management of client project details</li>
                    <li>
                      Access to employee information (subject to permission
                      levels)
                    </li>
                    <li>
                      Notification system for leave requests and other updates
                      (planned feature)
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <div className="headingAccordion">
                      How can I track my attendance?
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5">
                    Your check-in and check-out times are displayed on the home
                    screen. You can also see details of your attendance and the
                    number of days worked below 8 hours.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="text-left">
        <li onclick="showAnswer('answer1')">What is The Perch?</li>
        <li onclick="showAnswer('answer2')">How can I connect The Perch?</li>
        <li onclick="showAnswer('answer3')">
          What features does The Perch offer?
        </li>
      </ul> */}
      <Footer />
    </div>
  );
};

export default Perch;
