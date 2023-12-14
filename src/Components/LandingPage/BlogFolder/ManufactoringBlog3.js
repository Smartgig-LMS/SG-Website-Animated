import React from "react";
import Footer from "../Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const initialData = {
  name: "",
  email: "",
  website: "",
  comment: "",
};

export default function ManufactoringBlog3() {
  const navigate = useNavigate();

  const [state, setState] = React.useState(initialData);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: [e.target.value],
    });
  };

  const { name, email, website, comment } = state;

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http: //13.126.18.172: 3011/api/v1/post/comment`, {
        name: `${name}`,
        email: `${email}`,
        website: `${website}`,
        comment: `${comment}`,
      })
      .then((res) => {
        console.log(res.data, "data");
        if (res.data == "comment created successfully") {
          window.alert("Comment created successfully");
          setState(initialData);
        }
        // toast.warning("Comment Posted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBlog = () => {
    navigate("/blogs");
  };

  const handleManufacturing = () => {
    navigate("/blogs", {
      state: { ManuFactoringFlag: true, active: "active" },
    });
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="white"
      // href="/blogs"
      onClick={handleBlog}
    >
      Blogs
    </Link>,
    <Link underline="hover" key="2" color="white" onClick={handleManufacturing}>
      Manufacturing
    </Link>,
    <Typography key="3" color="white">
      Digital Twin in Manufacturing
    </Typography>,
  ];

  return (
    <>
      <div className="ManuBlogHeadnigs">
        <h1>Manufacturing</h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "2%",
          paddingTop: "3%",
          cursor: "pointer",
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            color="white"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      {/* web screen ----------------------------------------------------------------*/}
      <div className="BlogPageWeb">
        <div
          // className="infiLogo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="mt-3"
            src="./Images/gobeyond/Gro83988394888.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          How Digital Twin Technology is Revolutionizing Product Design,
          Prototyping, and Maintenance in Manufacturing
        </h4>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-2">
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-lg-4">
                <p>
                  A digital twin is simply an inventive technology, which
                  creates a virtual copy that mirrors a physical object or
                  system throughout its lifecycle. It dynamically updates in
                  real-time through continuous data feeds and machine learning
                  to help organization improve their decision-making.
                <br/>
                <br/>
                  From the statistics from the sources like McKinsey and Altair,
                  it's evident that the role of digital twins especially in the
                  manufacturing sector is undeniable. Considering its benefits,
                  lets explore how this technology is revolutionizing the
                  manufacturing industry, specifically in product design,
                  prototyping, and maintenance aspects, emerging in a new era of
                  efficiency and precision.
                </p>
              </div>
              <img
                src="./Images/gobeyond/Digital twins  (7) 1.svg"
                className="p-2"
                style={{objectFit:"cover", maxWidth:"60%"}}
              />
            </div>
            <img
              src="./Images/gobeyond/Group 427322131 (1).svg"
              className="blogimg p-2"
            />
            <h6 className="mt-5 font-weight-bold">
              Application and Benefits of Digital Twin for Product Design in
              Manufacturing:
            </h6>
            <p>
              {" "}
              Most challenges in traditional product design can be addressed by
              one solution and that is by embracing Digital Twin technology:
            </p>

            <h5 className="mt-3 font-weight-bold">
              Here are those applications and solutions:
            </h5>

            <div className="mt-2 d-flex justify-content-center align-items-start">
              <div className="p-2">
                <div>
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Optimizing New Product Development (NPD):
                  </h6>
                  <div>
                    <span className="font-weight-bold">
                      Digital Model Linkup:
                    </span>{" "}
                    Enables the creation of new products by linking digital
                    models with prototypes.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Improvement Across NPD Stages:
                    </span>{" "}
                    Enhances all stages of New Product Development (NPD),
                    including idea generation, market analysis, design and
                    development, testing, and commercialization.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Optimizing Supply and Demand for Design:
                  </h6>
                  <div>
                    <span className="font-weight-bold">
                      Connecting Designers:
                    </span>{" "}
                    Digital twin technology facilitates designers connecting
                    with ideal prospects.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Digital Twin Sharing:
                    </span>{" "}
                    Streamlines product design in manufacturing by optimizing
                    the connection between supply and demand dynamics.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Integration with 3D Models and Computer Generated Imagery:
                  </h6>
                  <li>
                    CGI, through 3D rendering, creates realistic images and
                    animations for product design.
                  </li>
                  <li>
                    Digital twins utilize 3D modeling to construct a virtual
                    representation, enhancing understanding and precision in
                    manufacturing.
                  </li>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Impact on Product Lifecycle:
                  </h6>

                  <div>
                    <span className="font-weight-bold">
                      Influence on Subsequent Stages:
                    </span>{" "}
                    Product design directly influences subsequent stages of the
                    product lifecycle, including manufacturing, delivery, use,
                    and end-of-life.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Comprehensive Optimization:
                    </span>{" "}
                    The digital twin in the design stage optimizes processes and
                    benefits upcoming events like manufacturing planning,
                    product health monitoring, and recycling management.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Streamlines CNC programming:{" "}
                  </h6>
                  <li>
                    Digital twin replicates a CNC machine, its setup, and
                    environment in CAM software, ensuring precise toolpath
                    simulation.
                  </li>
                  <li>
                    Also helps to avoid unexpected issues in machining by
                    including representations of the material, fixtures, and
                    toolholders from manufacturers' websites.
                  </li>
                </div>
              </div>

              <div className="p-2">
                <div>
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Efficient Design Creation and Simulation:
                  </h6>

                  <div>
                    <span className="font-weight-bold">
                      Digital Twin Interface:
                    </span>{" "}
                    Allows designers to create, manufacture, and simulate
                    designs seamlessly.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Real-time Interaction:{" "}
                    </span>{" "}
                    Immediate visualization of how the product design interacts
                    with the environment.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Diverse Applications in NPD:
                  </h6>
                  <li>
                    Monitoring, Simulating, Diagnosing, Predicting: Digital twin
                    plays various roles in NPD, such as monitoring, simulating,
                    diagnosing, and predicting.
                  </li>
                  <li>
                    Versatility in Applications: Adaptable to different
                    applications within NPD for improved efficiency and
                    ecision-making.
                  </li>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Simulating End-User Experiences:
                  </h6>

                  <div>
                    <span className="font-weight-bold">
                      Customer Experience Simulation:{" "}
                    </span>{" "}
                    DT allows for simulating end-user experiences, by
                    replicating user interactions, scenarios, customer and their
                    product usage, digitally to enhance design efficiency.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Efficient Design Interface:{" "}
                    </span>{" "}
                    Provides a platform for efficient design, testing, and
                    development.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Visualization of Product Design Impact:
                  </h6>

                  <div>
                    <span className="font-weight-bold">
                      Strategic Positioning:{" "}
                    </span>{" "}
                    Product design, as the initial stage, strategically impacts
                    manufacturing, delivery, use, and end-of-life stages.
                  </div>
                  <div>
                    <span className="font-weight-bold">
                      Holistic Optimization:{" "}
                    </span>{" "}
                    The application of digital twins in the design stage ensures
                    holistic optimization, including assisting decision-making,
                    elevating design performance, and predicting product
                    features
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Reviewing Manufacturing Procedures:{" "}
                  </h6>
                  <p>
                    Utilizes computer-aided manufacturing (CAM) software for a
                    comprehensive review of manufacturing procedures.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5">
              <h6 className="font-weight-bold">
                Digital Twin Technology's Role in Prototyping{" "}
              </h6>
              DT plays a pivotal role in revolutionalizing prototypes in
              manufacturing area: Let's look at the plethora of benefits in the
              prototyping domain
            </p>

            <img
              src="./Images/gobeyond/Digital twins  1.svg"
              className="blogimg"
            />

            <h5 className="pt-5">
              How Digital Twin Is Revolutionizing Maintenance in Manufacturing
            </h5>
            <h6 className="pt-2" style={{ color: "#F38313" }}>
              Key Aspects for Predictive Maintenance Success:
            </h6>

            <div className="pt-2">
              <h6>Data Integration and Connectivity:</h6>
              <p>
                Integration of data from various sources, including IoT sensors,
                connected devices, and PLM systems, is crucial for real-time
                monitoring and accurate predictions.
              </p>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <div>
                <div>
                  <h6>Advanced Analytics and Predictive Algorithms: </h6>
                  <p>
                    Digital twins leverage advanced analytics and predictive
                    algorithms, including machine learning and AI, to detect
                    patterns and anomalies for proactive maintenance decisions.
                  </p>
                </div>
                <div>
                  <h6>Real-Time Monitoring and Remote Diagnostics:</h6>
                  <p>
                    Real-time monitoring capabilities and remote diagnostics
                    allow organizations to track asset performance, identify
                    deviations, and plan maintenance activities without physical
                    presence.
                  </p>
                </div>
                <div>
                  <h6>Augmented Reality (AR) Visualization:</h6>
                  <p>
                    Integration of AR visualization with digital twins enhances
                    maintenance activities, enabling technicians to visualize
                    potential issues, access information, and perform tasks with
                    precision.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="./Images/gobeyond/Digital twins  (3) 1.svg"
                  className="blogimg"
                />
              </div>
            </div>

            <div className="mt-2 d-flex justify-content-center align-items-center">
              <div className="p-2 w-50">
                <div>
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Optimized Maintenance Planning:
                  </h6>
                  <div>
                    Real-time data and predictive analytics optimize maintenance
                    schedules, minimizing downtime, maximizing asset uptime, and
                    enhancing resource allocation.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Cost Savings:
                  </h6>
                  <div>
                    Digital Twin –enabled predictive maintenance reduces the
                    likelihood of major equipment failures, resulting in
                    significant cost savings.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Enhanced Safety and Risk Mitigation:{" "}
                  </h6>
                  <div>
                    Proactive identification of safety risks and mitigation of
                    potential hazards reduce the risk of accidents, ensuring a
                    safer work environment in manufacturing.
                  </div>
                </div>
              </div>

              <div className="p-2 w-50">
                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Predictive Maintenance Advantages:
                  </h6>
                  <div>
                    Digital twins contribute significantly to predictive
                    maintenance, moving away from reactive practices and fixed
                    schedules. Continuous analysis of equipment health and
                    performance enables real-time alerts for anomalies or signs
                    of wear and tear.
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="font-weight-bold">
                    <img
                      src="./Images/gobeyond/Group 427322077.svg"
                      height={30}
                      width={30}
                      alt=""
                    />
                    Improved Asset Performance and Lifespan:
                  </h6>
                  <div>
                    Digital twins provide deep insights into asset behavior,
                    optimizing utilization and extending equipment lifespan for
                    enhanced performance and reliability.
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 mb-5">
              <h6>Conclusion: </h6>
              Digital Twin technology is a game-changer in manufacturing,
              reshaping design, prototyping, and maintenance. It empowers
              designers with real-time insights, accelerates prototyping cycles,
              and introduces proactive maintenance. From intricate designs to
              predictive interventions, Digital Twins revolutionize the product
              lifecycle. Smartgig.tech leads this transformation, leveraging
              Digital Twins to redefine manufacturing. Explore the future with
              us—contact Smartgig.tech for innovative solutions aligning with
              the dynamic needs of modern manufacturing.
            </p>
          </div>
        </div>
        <hr />

        <form onSubmit={onSubmit}>
          <div className="text-center" style={{ fontFamily: "Lato" }}>
            <h4>WRITE A COMMENT</h4>
            <div
              className="mb-5 mt-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "3%",
              }}
            >
              <input
                placeholder="Name"
                className="p-2"
                onChange={handleChange}
                name="name"
                value={name}
              />
              <input
                placeholder="Email"
                className="p-2"
                onChange={handleChange}
                name="email"
                value={email}
              />
              <input
                placeholder="Website"
                className="p-2"
                onChange={handleChange}
                name="website"
                value={website}
              />
            </div>
            <textarea
              placeholder="write your comments"
              className="p-2"
              onChange={handleChange}
              name="comment"
              value={comment}
            />
          </div>
          <div className="text-center mt-5" style={{ fontFamily: "Lato" }}>
            <button
              style={{
                // display:  "flex",
                // justifyContent:  "center",
                // alignItems:  "center",
                backgroundColor: "#F38313",
                border: "none",
              }}
              className="p-3"
              type="submit"
            >
              POST COMMENT
            </button>
          </div>
        </form>
        <Footer />
      </div>
      {/* </div> */}

      {/* mobile screen ----------------------------------------------------------------*/}
      <div className="BlogPageMobile">
        <div
          // className="infiLogo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="mt-3"
            src="./Images/gobeyond/Gro83988394888.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          How Digital Twin Technology is Revolutionizing Product Design,
          Prototyping, and Maintenance in Manufacturing
        </h4>
        <div className="col-12">
          <div className="pt-2">
            <div>
              <p>
                A digital twin is simply an inventive technology, which creates
                a virtual copy that mirrors a physical object or system
                throughout its lifecycle. It dynamically updates in real-time
                through continuous data feeds and machine learning to help
                organization improve their decision-making.
              </p>
              <p>
                From the statistics from the sources like McKinsey and Altair,
                it's evident that the role of digital twins especially in the
                manufacturing sector is undeniable. Considering its benefits,
                lets explore how this technology is revolutionizing the
                manufacturing industry, specifically in product design,
                prototyping, and maintenance aspects, emerging in a new era of
                efficiency and precision.
              </p>
            </div>
            <img
              src="./Images/gobeyond/Digital twins  (7) 1 (1).svg"
              className="blogimg"
            />

            <h6 style={{color:"#F38313"}} className="pt-4 pb-3">
                "How Digital Twin is Transforming Product Design in Manufacturing Industry"
            </h6>

            <img
              src="./Images/gobeyond/Digital twins  (8) 1.svg"
              className="blogimg"
            />
            <h6 className="mt-5 font-weight-bold">
              Application and Benefits of Digital Twin for Product Design in
              Manufacturing:
            </h6>
            <p>
              {" "}
              Most challenges in traditional product design can be addressed by
              one solution and that is by embracing Digital Twin technology:
            </p>

            <h5 className="mt-3 font-weight-bold">
              Here are those applications and solutions:
            </h5>

            <div>
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Optimizing New Product Development (NPD):
              </h6>
              <div>
                <span className="font-weight-bold">Digital Model Linkup:</span>{" "}
                Enables the creation of new products by linking digital models
                with prototypes.
              </div>
              <div>
                <span className="font-weight-bold">
                  Improvement Across NPD Stages:
                </span>{" "}
                Enhances all stages of New Product Development (NPD), including
                idea generation, market analysis, design and development,
                testing, and commercialization.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Optimizing Supply and Demand for Design:
              </h6>
              <div>
                <span className="font-weight-bold">Connecting Designers:</span>{" "}
                Digital twin technology facilitates designers connecting with
                ideal prospects.
              </div>
              <div>
                <span className="font-weight-bold">Digital Twin Sharing:</span>{" "}
                Streamlines product design in manufacturing by optimizing the
                connection between supply and demand dynamics.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Integration with 3D Models and Computer Generated Imagery:
              </h6>
              <li>
                CGI, through 3D rendering, creates realistic images and
                animations for product design.
              </li>
              <li>
                Digital twins utilize 3D modeling to construct a virtual
                representation, enhancing understanding and precision in
                manufacturing.
              </li>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Impact on Product Lifecycle:
              </h6>

              <div>
                <span className="font-weight-bold">
                  Influence on Subsequent Stages:
                </span>{" "}
                Product design directly influences subsequent stages of the
                product lifecycle, including manufacturing, delivery, use, and
                end-of-life.
              </div>
              <div>
                <span className="font-weight-bold">
                  Comprehensive Optimization:
                </span>{" "}
                The digital twin in the design stage optimizes processes and
                benefits upcoming events like manufacturing planning, product
                health monitoring, and recycling management.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Streamlines CNC programming:{" "}
              </h6>
              <li>
                Digital twin replicates a CNC machine, its setup, and
                environment in CAM software, ensuring precise toolpath
                simulation.
              </li>
              <li>
                Also helps to avoid unexpected issues in machining by including
                representations of the material, fixtures, and toolholders from
                manufacturers' websites.
              </li>
            </div>

            <div>
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Efficient Design Creation and Simulation:
              </h6>

              <div>
                <span className="font-weight-bold">
                  Digital Twin Interface:
                </span>{" "}
                Allows designers to create, manufacture, and simulate designs
                seamlessly.
              </div>
              <div>
                <span className="font-weight-bold">
                  Real-time Interaction:{" "}
                </span>{" "}
                Immediate visualization of how the product design interacts with
                the environment.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Diverse Applications in NPD:
              </h6>
              <li>
                Monitoring, Simulating, Diagnosing, Predicting: Digital twin
                plays various roles in NPD, such as monitoring, simulating,
                diagnosing, and predicting.
              </li>
              <li>
                Versatility in Applications: Adaptable to different applications
                within NPD for improved efficiency and ecision-making.
              </li>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Simulating End-User Experiences:
              </h6>

              <div>
                <span className="font-weight-bold">
                  Customer Experience Simulation:{" "}
                </span>{" "}
                DT allows for simulating end-user experiences, by replicating
                user interactions, scenarios, customer and their product usage,
                digitally to enhance design efficiency.
              </div>
              <div>
                <span className="font-weight-bold">
                  Efficient Design Interface:{" "}
                </span>{" "}
                Provides a platform for efficient design, testing, and
                development.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Visualization of Product Design Impact:
              </h6>

              <div>
                <span className="font-weight-bold">
                  Strategic Positioning:{" "}
                </span>{" "}
                Product design, as the initial stage, strategically impacts
                manufacturing, delivery, use, and end-of-life stages.
              </div>
              <div>
                <span className="font-weight-bold">
                  Holistic Optimization:{" "}
                </span>{" "}
                The application of digital twins in the design stage ensures
                holistic optimization, including assisting decision-making,
                elevating design performance, and predicting product features
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Reviewing Manufacturing Procedures:{" "}
              </h6>
              <p>
                Utilizes computer-aided manufacturing (CAM) software for a
                comprehensive review of manufacturing procedures.
              </p>
            </div>
            <p className="mt-5">
              <h6 className="font-weight-bold">
                Digital Twin Technology's Role in Prototyping{" "}
              </h6>
              DT plays a pivotal role in revolutionalizing prototypes in
              manufacturing area: Let's look at the plethora of benefits in the
              prototyping domain
            </p>

            <img
              src="./Images/gobeyond/Digital twins  2.svg"
              className="blogimg"
            />

            <h5 className="pt-5">
              How Digital Twin Is Revolutionizing Maintenance in Manufacturing
            </h5>
            <h6 className="pt-2" style={{ color: "#F38313" }}>
              Key Aspects for Predictive Maintenance Success:
            </h6>

            <div className="pt-2">
              <h6>Data Integration and Connectivity:</h6>
              <p>
                Integration of data from various sources, including IoT sensors,
                connected devices, and PLM systems, is crucial for real-time
                monitoring and accurate predictions.
              </p>
            </div>

            <div>
              <div>
                <h6>Advanced Analytics and Predictive Algorithms: </h6>
                <p>
                  Digital twins leverage advanced analytics and predictive
                  algorithms, including machine learning and AI, to detect
                  patterns and anomalies for proactive maintenance decisions.
                </p>
              </div>
              <div>
                <h6>Real-Time Monitoring and Remote Diagnostics:</h6>
                <p>
                  Real-time monitoring capabilities and remote diagnostics allow
                  organizations to track asset performance, identify deviations,
                  and plan maintenance activities without physical presence.
                </p>
              </div>
              <div>
                <h6>Augmented Reality (AR) Visualization:</h6>
                <p>
                  Integration of AR visualization with digital twins enhances
                  maintenance activities, enabling technicians to visualize
                  potential issues, access information, and perform tasks with
                  precision.
                </p>
              </div>
            </div>
            <div>
              <img
                src="./Images/gobeyond/Digital twins  (3) 2.svg"
                className="blogimg"
              />
            </div>

            <div>
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Optimized Maintenance Planning:
              </h6>
              <div>
                Real-time data and predictive analytics optimize maintenance
                schedules, minimizing downtime, maximizing asset uptime, and
                enhancing resource allocation.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Cost Savings:
              </h6>
              <div>
                Digital Twin –enabled predictive maintenance reduces the
                likelihood of major equipment failures, resulting in significant
                cost savings.
              </div>
            </div>

            <div className="mt-3">
              <h6 className="font-weight-bold">
                <img
                  src="./Images/gobeyond/Group 427322077.svg"
                  height={30}
                  width={30}
                  alt=""
                />
                Enhanced Safety and Risk Mitigation:{" "}
              </h6>
              <div>
                Proactive identification of safety risks and mitigation of
                potential hazards reduce the risk of accidents, ensuring a safer
                work environment in manufacturing.
              </div>

              <div className="mt-3">
                <h6 className="font-weight-bold">
                  <img
                    src="./Images/gobeyond/Group 427322077.svg"
                    height={30}
                    width={30}
                    alt=""
                  />
                  Predictive Maintenance Advantages:
                </h6>
                <div>
                  Digital twins contribute significantly to predictive
                  maintenance, moving away from reactive practices and fixed
                  schedules. Continuous analysis of equipment health and
                  performance enables real-time alerts for anomalies or signs of
                  wear and tear.
                </div>
              </div>

              <div className="mt-3">
                <h6 className="font-weight-bold">
                  <img
                    src="./Images/gobeyond/Group 427322077.svg"
                    height={30}
                    width={30}
                    alt=""
                  />
                  Improved Asset Performance and Lifespan:
                </h6>
                <div>
                  Digital twins provide deep insights into asset behavior,
                  optimizing utilization and extending equipment lifespan for
                  enhanced performance and reliability.
                </div>
              </div>
            </div>

            <p className="mt-3 mb-3">
              <h6 className="font-weight-bold">Conclusion: </h6>
              Digital Twin technology is a game-changer in manufacturing,
              reshaping design, prototyping, and maintenance. It empowers
              designers with real-time insights, accelerates prototyping cycles,
              and introduces proactive maintenance. From intricate designs to
              predictive interventions, Digital Twins revolutionize the product
              lifecycle. Smartgig.tech leads this transformation, leveraging
              Digital Twins to redefine manufacturing. Explore the future with
              us—contact Smartgig.tech for innovative solutions aligning with
              the dynamic needs of modern manufacturing.
            </p>
          </div>
        </div>
        <hr />

        <form onSubmit={onSubmit}>
          <div className="text-center p-3" style={{ fontFamily: "Lato" }}>
            <h4>WRITE A COMMENT</h4>
            <input
              placeholder="Name"
              className="p-2 mb-2"
              onChange={handleChange}
              name="name"
              value={name}
            />
            <input
              placeholder="Email"
              className="p-2 mb-2"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <input
              placeholder="Website"
              className="p-2 mb-2"
              onChange={handleChange}
              name="website"
              value={website}
            />
            <textarea
              placeholder="write your comments"
              className="p-2 mb-2"
              onChange={handleChange}
              name="comment"
              value={comment}
            />
          </div>
          <div className="text-center mt-5" style={{ fontFamily: "Lato" }}>
            <button
              style={{
                backgroundColor: "#F38313",
                border: "none",
              }}
              className="p-3"
              type="submit"
            >
              POST COMMENT
            </button>
          </div>
        </form>

        <div className="footerForMobile">
          <hr />
          Copyright © 2023 SmartGig. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
