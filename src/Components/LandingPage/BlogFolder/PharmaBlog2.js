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

export default function PharmaBlog2() {
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
      .post(`http://13.126.18.172:3011/api/v1/post/comment`, {
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

  const handlePharma = () => {
    navigate("/blogs", {
      state: { PharmaFlag: true, activePharma: "active" },
    });
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" onClick={handleBlog}>
      Blogs
    </Link>,
    <Link underline="hover" key="2" color="white" onClick={handlePharma}>
      Pharma
    </Link>,
    <Typography key="3" color="white">
      AI in Pharma
    </Typography>,
  ];

  return (
    <>
      <div className="PharmaBlogHeadnigs2">
        <h1>Pharmaceutical</h1>
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
            src="./Images/gobeyond/Pharmaceutical-Blog.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          How does AI integration improve Lab Management Systems
        </h4>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-2">
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-75 col-lg-9">
                <p>
                  A laboratory information management system(LIMS) often called
                  a Laboratory management system(LMS) or laboratory information
                  system(LIS) is a software-based solution that supports
                  laboratory operations in various industries. They have
                  overlapping functionalities but serve different purposes. Lab
                  management stepped in to fill the gap between ideas and
                  implementation, hypothesis and tangible outcomes.
                  <br />
                  <br />
                  Lab Management systems are used in various places with the use
                  of research, experimenting and testing. Research institutions
                  and Universities, Pharmaceutical and Biotech companies,
                  Government research facilities, Hospital and clinical
                  laboratories, Food and beverage industries, Chemical labs etc.
                  use LMS frequently. The age-old landscape of the Lab
                  Management system has experienced a revolutionization in its
                  scientific advancement with AI - Artificial Intelligence. It
                  has played a pivotal role in transforming the way Lab
                  management systems used to work previously.
                </p>
              </div>
              <img
                src="./Images/gobeyond/VS (2) 1.svg"
                className="w-25"
              />
            </div>

            <div>
              <h5
                style={{ fontFamily: "Lato", fontWeight: "bold" }}
                className="mt-3 mb-3"
              >
                Challenges in Traditional Lab Management
              </h5>
              <p>
                <h6 className="mt-4">
                  {" "}
                  1. Manual data entry and record keeping-
                </h6>
                Manual data entry in traditional lab management is an
                overwhelming amount of task which involves chances of human
                error and is more time-consuming. The vast variety of data poses
                a challenge in management and analysis to drive meaningful
                insights. In this situation when AI is integrated into the task
                it automates repetitive and mundane tasks and makes tasks like
                data entry, record keeping, and sample analysis easier and less
                prone to errors. This helps in focusing on more complex aspects
                of the work while allowing real-time monitoring of equipment and
                experiments. AI systems can detect anomalies and give corrective
                measures as solutions.
              </p>
              <p>
                <h6 className="mt-4">2. Complex inventory management- </h6>
                Managing and tracking lab inventory manually can be challenging
                due to its diversity. The risk of stockout, expired reagents,
                and misplacement of items are a few of the things that add to
                the complexity of the task. With the introduction of AI-driven
                predictive analysis, scheduling allocating resources or even
                forecasting resource needs is simplified. This helps in
                identifying patterns and more valuable insights while reducing
                inefficiencies and delays exceptionally.
              </p>
              <p>
                <h6 className="mt-4">3. Data analysis overload- </h6>
                This is exactly what the term says “Overload and overwhelming
                volume of complex data” upon researchers. This limits their pace
                and hinders their insights into experiment-related results. AI,
                particularly machine learning algorithms, can analyze large and
                complex datasets at unprecedented speeds. This enables more
                efficient and accurate data analysis, leading to quicker
                identification of patterns and extraction of valuable insights.
              </p>
              <p>
                <h6 className="mt-4">
                  4. Limited collaboration and communication-{" "}
                </h6>
                In traditional lab management the sharing of information and
                coordinating tasks might rely on manual methods. This might lead
                to delays and misunderstandings. AI-powered management systems
                facilitate seamless communication and collaboration. Researchers
                can pace the discovery with increased collaboration because of
                the ease of sharing the data.
              </p>
              <p>
                <h6 className="mt-4">6. Diverse experimentation methods- </h6>
                Laboratories engage in a wide range of experiments, each with
                its unique set of protocols and requirements. Coordinating and
                managing diverse experimentation methods manually can be
                intricate and prone to oversights. AI can analyse historical
                experimental data to suggest optimal parameters for new
                experiments. This assists researchers in designing experiments
                with a higher likelihood of success, saving time and resources.
              </p>
            </div>

            <div className="pt-5">
              <div style={{ fontStyle: "italic", color: "#F38313" }}>
                <h4>" A few examples of AI in Lab management "</h4>
              </div>

              <p>
                <h6 className="mt-4">1. Robotics for Sample Handling:</h6>
                AI-powered robotic systems can handle and process samples,
                reducing the manual labour involved in repetitive tasks like
                sample preparation and analysis.
              </p>

              <p>
                <h6 className="mt-4">2. Machine Learning in Data Analysis:</h6>
                Machine learning algorithms can analyse large datasets generated
                from experiments, identifying patterns and correlations that may
                not be apparent through traditional statistical methods.
              </p>
              <p>
                <h6 className="mt-4">
                  3. Predictive Analytics for Equipment Maintenance:
                </h6>
                AI can predict when laboratory equipment is likely to require
                maintenance or replacement by analysing usage patterns and
                performance data, reducing the risk of unexpected breakdowns.
              </p>
              <p>
                <h6 className="mt-4">
                  4. Virtual Assistants for Experiment Planning:
                </h6>
                AI-driven virtual assistants can help researchers plan
                experiments by suggesting optimal conditions based on historical
                data and existing knowledge, improving the chances of successful
                outcomes.
              </p>
              <p>
                <h6 className="mt-4">5. IoT-enabled Monitoring Systems:</h6>
                AI integrated with IoT devices can monitor variables such as
                temperature, pressure, and humidity in real-time, ensuring that
                experimental conditions remain within specified ranges.
                Incorporating AI into lab management addresses existing
                challenges and opens up new avenues for efficiency, innovation,
                and data-driven decision-making in scientific research and
                development.
              </p>
            </div>

            <div style={{ fontFamily: "Roboto" }} className="mt-5">
              <h5>
                AI-powered lab management systems address major concerns such as
                security and privacy and the learning curve
              </h5>
              <h6>
                Managing security measures to safeguard sensitive data and
                maintain privacy is one of the major concerns that is solved by
                the incorporation of AI in lab management.
              </h6>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2">
              <div className="pt-4 w-50">
                <div>
                  <h6>These lab management systems incorporate:</h6>
                </div>
                <p>
                  <h6 className="mt-4">1. Encryption Protocols:</h6>
                  Utilise advanced encryption techniques to protect data during
                  transmission and storage, ensuring that unauthorised access is
                  prevented.
                </p>

                <p>
                  <h6 className="mt-4">2. Access Controls: </h6>
                  Implement strict access controls to regulate user permissions.
                  This ensures that only authorised personnel can access
                  specific data or functionalities within the system.
                </p>
                <p>
                  <h6 className="mt-4">3. Authentication Mechanisms: </h6>
                  They Employ multi-factor authentication to enhance user
                  identity verification and prevent unauthorised individuals
                  from gaining access to the system.
                </p>
                <p>
                  <h6 className="mt-4">4. Audit Trails: </h6>
                  These systems include audit trails that log user activities
                  and system interactions. These logs help in tracking any
                  unusual behaviour and provide accountability in case of
                  security incidents.
                </p>
                <p>
                  <h6 className="mt-4">5. Compliance with regulations: </h6>
                  This system also ensures compliance with relevant data
                  protection regulations and industry standards, such as GDPR or
                  HIPAA, to address legal and ethical considerations regarding
                  privacy.
                </p>
              </div>
              <img
                src="./Images/gobeyond/Benefits.svg"
                className="blogimg60per"
              />
            </div>

            <div className="pt-4">
              <p>
                The potential of AI to revolutionise any industry is not
                unknown. The future of Lab management with AI also holds immense
                promise with better precision, efficiency and an era of
                discovery.
              </p>

              <p>
                <h6 className="mt-4"> 1. Accelerated Scientific Discovery:</h6>
                AI can lead breakthroughs in the field of medicine and material
                science with the help of improvement in Lab Management systems.
                They will help in expediting the pace of scientific discovery.
                It could include automation of tasks, analyzing datasets and
                suggesting optimal experimental conditions.
              </p>
              <p>
                <h6 className="mt-4">
                  2. Personalized Medicine and Drug Discovery:
                </h6>
                In the healthcare industry, AI will play a pivotal role in
                personalized medicine by analyzing genetic data, predicting
                patient responses to treatments, and assisting in drug
                discovery. This personalised approach has the potential to
                revolutionize healthcare outcomes and treatment strategies.
              </p>
              <p>
                <h6 className="mt-4">3. Precision in Agriculture:</h6>
                AI's integration into lab management systems in agricultural
                research can optimise crop yields, monitor soil health, and
                provide data-driven insights for precision agriculture. This has
                he potential to address global food security challenges and
                enhance sustainable farming practices.
              </p>
              <p>
                <h6 className="mt-4">
                  4. Advanced Quality Control in Manufacturing:
                </h6>
                Manufacturing industries will benefit from AI-driven lab
                management by implementing advanced quality control measures. AI
                can detect defects, monitor production processes in real time,
                and ensure the consistent quality of products, thereby
                revolutionising manufacturing standards.
              </p>
              <p>
                <h6 className="mt-4"> 5. Environmental Sustainability:</h6>
                Lab management systems powered by AI can contribute to
                environmental monitoring, helping industries comply with
                regulations and develop sustainable practices. This is important
                for addressing environmental challenges and promoting corporate
                social responsibility(CSR).
              </p>
              <p>
                <h6 className="mt-4">
                  6. Seamless Collaboration and Global Connectivity:
                </h6>
                AI will enhance collaboration among researchers and industries
                by providing real-time data sharing, analysis, and
                communication. This global connectivity can lead to synergies in
                research efforts, fostering a collaborative environment that
                transcends geographical boundaries.
              </p>
              <p>
                <h6 className="mt-4"> 7. Autonomous Laboratories:</h6>
                The future might witness the development of autonomous
                laboratories where AI systems manage and conduct experiments
                independently. This could include robotic systems handling
                sample processing, data analysis, and even adjusting
                experimental parameters based on real-time feedback.
              </p>
              <p>
                <h6 className="mt-4">
                  {" "}
                  8. Continuous Learning and Adaptation:{" "}
                </h6>
                AI-powered lab management systems will continuously learn and
                adapt, evolving with advancements in technology and scientific
                knowledge. This adaptability ensures that these systems remain
                at the forefront of innovation, incorporating the latest
                methodologies and techniques.
              </p>
              <p>
                <h6 className="mt-4">
                  {" "}
                  9. Improved Resource Utilization and Cost Efficiency:{" "}
                </h6>
                AI's predictive analytics will optimise resource utilisation,
                reduce costs and minimise waste in industries that rely on lab
                management systems.
              </p>
            </div>
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
            src="./Images/gobeyond/Pharmaceutical-Blog.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          How does AI integration improve Lab Management Systems
        </h4>
        <div className="col-12">
          <p>
            A laboratory information management system(LIMS) often called a
            Laboratory management system(LMS) or laboratory information
            system(LIS) is a software-based solution that supports laboratory
            operations in various industries. They have overlapping
            functionalities but serve different purposes. Lab management stepped
            in to fill the gap between ideas and implementation, hypothesis and
            tangible outcomes.
            <br />
            <br />
            Lab Management systems are used in various places with the use of
            research, experimenting and testing. Research institutions and
            Universities, Pharmaceutical and Biotech companies, Government
            research facilities, Hospital and clinical laboratories, Food and
            beverage industries, Chemical labs etc. use LMS frequently. The
            age-old landscape of the Lab Management system has experienced a
            revolutionization in its scientific advancement with AI - Artificial
            Intelligence. It has played a pivotal role in transforming the way
            Lab management systems used to work previously.
            <br />
            <br />
          </p>
          <div>
            <img src="./Images/gobeyond/VS (2) 1 (1).svg" />
          </div>

          <div>
            <h5
              style={{ fontFamily: "Lato", fontWeight: "bold" }}
              className="mt-5 mb-3"
            >
              Challenges in Traditional Lab Management
            </h5>
            <p>
              <h6 className="mt-4">
                {" "}
                1. Manual data entry and record keeping-
              </h6>
              Manual data entry in traditional lab management is an overwhelming
              amount of task which involves chances of human error and is more
              time-consuming. The vast variety of data poses a challenge in
              management and analysis to drive meaningful insights. In this
              situation when AI is integrated into the task it automates
              repetitive and mundane tasks and makes tasks like data entry,
              record keeping, and sample analysis easier and less prone to
              errors. This helps in focusing on more complex aspects of the work
              while allowing real-time monitoring of equipment and experiments.
              AI systems can detect anomalies and give corrective measures as
              solutions.
            </p>
            <p>
              <h6 className="mt-4">2. Complex inventory management- </h6>
              Managing and tracking lab inventory manually can be challenging
              due to its diversity. The risk of stockout, expired reagents, and
              misplacement of items are a few of the things that add to the
              complexity of the task. With the introduction of AI-driven
              predictive analysis, scheduling allocating resources or even
              forecasting resource needs is simplified. This helps in
              identifying patterns and more valuable insights while reducing
              inefficiencies and delays exceptionally.
            </p>
            <p>
              <h6 className="mt-4">3. Data analysis overload- </h6>
              This is exactly what the term says “Overload and overwhelming
              volume of complex data” upon researchers. This limits their pace
              and hinders their insights into experiment-related results. AI,
              particularly machine learning algorithms, can analyze large and
              complex datasets at unprecedented speeds. This enables more
              efficient and accurate data analysis, leading to quicker
              identification of patterns and extraction of valuable insights.
            </p>
            <p>
              <h6 className="mt-4">
                4. Limited collaboration and communication-{" "}
              </h6>
              In traditional lab management the sharing of information and
              coordinating tasks might rely on manual methods. This might lead
              to delays and misunderstandings. AI-powered management systems
              facilitate seamless communication and collaboration. Researchers
              can pace the discovery with increased collaboration because of the
              ease of sharing the data.
            </p>
            <p>
              <h6 className="mt-4">6. Diverse experimentation methods- </h6>
              Laboratories engage in a wide range of experiments, each with its
              unique set of protocols and requirements. Coordinating and
              managing diverse experimentation methods manually can be intricate
              and prone to oversights. AI can analyse historical experimental
              data to suggest optimal parameters for new experiments. This
              assists researchers in designing experiments with a higher
              likelihood of success, saving time and resources.
            </p>
          </div>

          <div className="pt-3">
            <div style={{ fontStyle: "italic", color: "#F38313" }}>
              <h4>" A few examples of AI in Lab management "</h4>
            </div>

            <p>
              <h6 className="mt-4">1. Robotics for Sample Handling:</h6>
              AI-powered robotic systems can handle and process samples,
              reducing the manual labour involved in repetitive tasks like
              sample preparation and analysis.
            </p>

            <p>
              <h6 className="mt-4">2. Machine Learning in Data Analysis:</h6>
              Machine learning algorithms can analyse large datasets generated
              from experiments, identifying patterns and correlations that may
              not be apparent through traditional statistical methods.
            </p>
            <p>
              <h6 className="mt-4">
                3. Predictive Analytics for Equipment Maintenance:
              </h6>
              AI can predict when laboratory equipment is likely to require
              maintenance or replacement by analysing usage patterns and
              performance data, reducing the risk of unexpected breakdowns.
            </p>
            <p>
              <h6 className="mt-4">
                4. Virtual Assistants for Experiment Planning:
              </h6>
              AI-driven virtual assistants can help researchers plan experiments
              by suggesting optimal conditions based on historical data and
              existing knowledge, improving the chances of successful outcomes.
            </p>
            <p>
              <h6 className="mt-4">5. IoT-enabled Monitoring Systems:</h6>
              AI integrated with IoT devices can monitor variables such as
              temperature, pressure, and humidity in real-time, ensuring that
              experimental conditions remain within specified ranges.
              Incorporating AI into lab management addresses existing challenges
              and opens up new avenues for efficiency, innovation, and
              data-driven decision-making in scientific research and
              development.
            </p>
          </div>

          <div style={{ fontFamily: "Roboto" }} className="mt-5">
            <h5>
              AI-powered lab management systems address major concerns such as
              security and privacy and the learning curve
            </h5>
            <h6>
              Managing security measures to safeguard sensitive data and
              maintain privacy is one of the major concerns that is solved by
              the incorporation of AI in lab management.
            </h6>
          </div>

          <div className="pt-4">
            <div>
              <h6>These lab management systems incorporate:</h6>
            </div>
            <p>
              <h6 className="mt-4">1. Encryption Protocols:</h6>
              Utilise advanced encryption techniques to protect data during
              transmission and storage, ensuring that unauthorised access is
              prevented.
            </p>

            <p>
              <h6 className="mt-4">2. Access Controls: </h6>
              Implement strict access controls to regulate user permissions.
              This ensures that only authorised personnel can access specific
              data or functionalities within the system.
            </p>
            <p>
              <h6 className="mt-4">3. Authentication Mechanisms: </h6>
              They Employ multi-factor authentication to enhance user identity
              verification and prevent unauthorised individuals from gaining
              access to the system.
            </p>
            <p>
              <h6 className="mt-4">4. Audit Trails: </h6>
              These systems include audit trails that log user activities and
              system interactions. These logs help in tracking any unusual
              behaviour and provide accountability in case of security
              incidents.
            </p>
            <p>
              <h6 className="mt-4">5. Compliance with regulations: </h6>
              This system also ensures compliance with relevant data protection
              regulations and industry standards, such as GDPR or HIPAA, to
              address legal and ethical considerations regarding privacy.
            </p>
          </div>
          <img
            src="./Images/gobeyond/Group 427322067.svg"
            className="blogimg60per"
          />

          <div className="pt-4">
            <p>
              The potential of AI to revolutionise any industry is not unknown.
              The future of Lab management with AI also holds immense promise
              with better precision, efficiency and an era of discovery.
            </p>

            <p>
              <h6 className="mt-4"> 1. Accelerated Scientific Discovery:</h6>
              AI can lead breakthroughs in the field of medicine and material
              science with the help of improvement in Lab Management systems.
              They will help in expediting the pace of scientific discovery. It
              could include automation of tasks, analyzing datasets and
              suggesting optimal experimental conditions.
            </p>
            <p>
              <h6 className="mt-4">
                2. Personalized Medicine and Drug Discovery:
              </h6>
              In the healthcare industry, AI will play a pivotal role in
              personalized medicine by analyzing genetic data, predicting
              patient responses to treatments, and assisting in drug discovery.
              This personalised approach has the potential to revolutionize
              healthcare outcomes and treatment strategies.
            </p>
            <p>
              <h6 className="mt-4">3. Precision in Agriculture:</h6>
              AI's integration into lab management systems in agricultural
              research can optimise crop yields, monitor soil health, and
              provide data-driven insights for precision agriculture. This has
              he potential to address global food security challenges and
              enhance sustainable farming practices.
            </p>
            <p>
              <h6 className="mt-4">
                4. Advanced Quality Control in Manufacturing:
              </h6>
              Manufacturing industries will benefit from AI-driven lab
              management by implementing advanced quality control measures. AI
              can detect defects, monitor production processes in real time, and
              ensure the consistent quality of products, thereby revolutionising
              manufacturing standards.
            </p>
            <p>
              <h6 className="mt-4"> 5. Environmental Sustainability:</h6>
              Lab management systems powered by AI can contribute to
              environmental monitoring, helping industries comply with
              regulations and develop sustainable practices. This is important
              for addressing environmental challenges and promoting corporate
              social responsibility(CSR).
            </p>
            <p>
              <h6 className="mt-4">
                6. Seamless Collaboration and Global Connectivity:
              </h6>
              AI will enhance collaboration among researchers and industries by
              providing real-time data sharing, analysis, and communication.
              This global connectivity can lead to synergies in research
              efforts, fostering a collaborative environment that transcends
              geographical boundaries.
            </p>
            <p>
              <h6 className="mt-4"> 7. Autonomous Laboratories:</h6>
              The future might witness the development of autonomous
              laboratories where AI systems manage and conduct experiments
              independently. This could include robotic systems handling sample
              processing, data analysis, and even adjusting experimental
              parameters based on real-time feedback.
            </p>
            <p>
              <h6 className="mt-4"> 8. Continuous Learning and Adaptation: </h6>
              AI-powered lab management systems will continuously learn and
              adapt, evolving with advancements in technology and scientific
              knowledge. This adaptability ensures that these systems remain at
              the forefront of innovation, incorporating the latest
              methodologies and techniques.
            </p>
            <p>
              <h6 className="mt-4">
                {" "}
                9. Improved Resource Utilization and Cost Efficiency:{" "}
              </h6>
              AI's predictive analytics will optimise resource utilisation,
              reduce costs and minimise waste in industries that rely on lab
              management systems.
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
              className="p-2"
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
        </div>{" "}
      </div>
    </>
  );
}
