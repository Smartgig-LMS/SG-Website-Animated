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

export default function PharmaBlog1() {
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
      GxP solutions in Pharma
    </Typography>,
  ];

  return (
    <>
      <div className="PharmaBlogHeadnigs">
        <h1>Pharma</h1>
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
          Why are GxP solutions a smarter way to quality management for Pharma
          sectors?
        </h4>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-2">
            <p>
              Quality management is a critical aspect of any industry but when
              we talk about the Pharmaceutical sector it becomes paramount
              because of its link to direct human consumption and its effects on
              lives directly. The reliability and trust of the product are
              non-negotiable and involve quality control as well as quality
              assurance. The former involves systematic examination and testing
              of products to meet specifications that have been predetermined.
              The latter on the other hand involves processes and systems to
              prevent quality issues from arising in the first place. Together,
              they form a comprehensive approach to product quality.
              <br />
              <br />
            </p>
            <h6>Understanding GxP solutions:</h6>
            <div className="pl-5 pr-5">
              <img
                src="./Images/gobeyond/Understanding GxP solutions 1 1.svg"
                className="blogimg p-2"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center pl-5 pr-5">
              <div className="pl-5 pr-5">
                <p className="pl-5">
                  Need in the Pharmaceutical sector: Good practices are a set of
                  guidelines that are important to maintain the integrity of
                  data, the safety of products, and the trust of regulatory
                  authorities like CDSCO(Central Drugs Standard Control
                  Organization) in India. The DCGI comes under CDSCO and has a
                  set of roles, responsibilities and guidelines. The global GxP
                  solutions market is projected to grow at a CAGR of
                  approximately 8% from 2023 to 2028. (Source: Market Research
                  Report)
                </p>
              </div>
              <img
                src="./Images/gobeyond/Quality Management System 1 1.svg"
                className="blogimg60per pr-5"
              />
            </div>

            <div>
              <h5 style={{ fontFamily: "Lato" }} className="mt-5 mb-3">
                Why is the GxP solution of such importance in the Pharmaceutical
                industry and other regulatory ones?
              </h5>
              <p>
                <h6 className="mt-4">1. Patient Safety:</h6>
                The purpose of having Gxp solutions is to abide by the
                guidelines laid by Authorities and have products and services
                which meet safety and quality standards. They produce
                medications and therapies intended to save lives and these
                solutions help stick to the standards and maintain quality.
              </p>
              <p>
                <h6 className="mt-4">2. Regulatory Compliance:</h6>
                The Pharmaceutical sector is one of the most heavily regulated
                industries worldwide. Compliance with GxP standards is a legal
                requirement, and failure to adhere to these regulations can
                result in severe penalties, including product recalls and fines.
              </p>
              <p>
                <h6 className="mt-4">3. Product Quality:</h6>
                This part is governed by the GMP and ensures that the
                pharmaceutical companies maintain a high-quality and consistent
                manufacturing process for producing high-quality medicines. 78%
                of pharmaceutical organizations reported improved product
                quality and safety after implementing GxP solutions. (Source:
                Industry Case Study)
              </p>
              <p>
                <h6 className="mt-4">4. Data Integrity:</h6>
                GLP sets the guidelines for proper recording and documentation
                of data ensuring integrity and avoiding fraud or manipulation.
              </p>
              <p>
                <h6 className="mt-4">5. Regulatory Approvals:</h6>
                When a new pharmaceutical product is brought to market, there
                are complex regulatory approval processes to be carried out.
                Adherence to the GxP standards makes the process faster while
                maintaining the standards.
              </p>
              <h6 className="mt-4"> 6. Public Trust:</h6>
              This industry is critical because of its human aspect making it
              very important for professionals, patients and the public to trust
              pharmaceutical products and services for their safety and
              efficiency. The GxP solutions help in making this possible through
              its regulation. of document management, regulatory compliance,
              real-time monitoring and faster time to market. This leads to
              better global operations throughout the lifecycle.
            </div>

            <h5
              style={{ fontFamily: "Roboto", fontStyle: "italic" }}
              className="mt-5"
            >
              Challenges faced by Pharma companies for maintaining quality and
              compliance: With strict regulations and a higher need for quality
              control come various challenges in this highly volatile industry.
            </h5>
            <h6 className="mt-5">
              Here are a few challenges and the solutions that help tackle them:
            </h6>

            <div>
              <p>
                <h6 className="mt-4">1. Evolving regulations:</h6>
                There is a frequent update in regulations with the
                Pharmaceutical sector and staying up to date and maintaining
                compliance standards could be a challenge. Solution: Regular
                checking of agency websites, email, newsletters subscriptions
                and attending industry events, webinars and conferences could be
                a way to tackle the ever-changing nature of the regulations. GxP
                solutions have features which manage and track ensuring that
                pharmaceutical organisations meet and exceed regulatory
                requirements, helping them avoid legal issues, fines, and
                product recalls.
              </p>
              <p>
                <h6 className="mt-4">2. Complex Supply chains:</h6>
                The pharmaceutical supply chain is broad, global and extensive
                which may make it challenging to control every aspect of
                manufacturing and distribution while maintaining safety and
                quality. Solution: There are tools that enable the proper
                storage, handling, and distribution of pharmaceutical products
                in compliance with GDP and GSP guidelines. GxP solutions offer
                real-time monitoring and reporting capabilities, allowing
                organisations to track quality, safety, and compliance metrics
                and respond to issues promptly.
              </p>
              <p>
                <h6 className="mt-4">3. Data Management:</h6>
                Clinical trials and research can be complex especially when
                trying to maintain data integrity and effective data management.
                Solution: GxP solutions have features which support data
                integrity and streamline processes, regulatory compliance, and
                efficient data management which lead to a faster time-to-market
                for new pharmaceutical products which is essential in a
                competitive industry.
              </p>
              <p>
                <h6 className="mt-4">4. Counterfeit Products:</h6>
                Counterfeit or substandard products could be a major problem in
                the Pharmaceutical sector and lead to a major concern risking
                the lives of patients and compromising regulatory compliance.
                Solutions: GxP solutions could help combat this challenge by
                using serialisation, track-and-trace systems, verification and
                authorisation using secure authentication technologies which
                would ensure that there is no counterfeit.
              </p>
              <p>
                <h6 className="mt-4">5. Global operations:</h6>
                It is common for Pharmaceutical companies to operate globally
                but maintaining a global standard and complying with standards
                while maintaining quality and safety could be a challenge. India
                supplies around 20 percent of the global pharmaceuticals demand
                in terms of volume.
              </p>
              <h6 className="mt-4">
                {" "}
                Solutions: GxP standards provide a globally recognized framework
                for quality and compliance, making it easier for companies to
                conduct business across borders. GxP solutions provide great
                benefits in the form of document management, regulatory
                compliance, real-time monitoring and faster time to market. This
                leads to better global operations throughout the lifecycle.
              </h6>
              <p>
                <h6 className="mt-4"> 6. Cost and resource constraints:</h6>
                There is a high cost associated with maintaining high-quality
                manufacturing and research processes with facilities, equipment
                and personnel. In 2022, research and development spending in the
                pharmaceutical industry totalled some 244 billion U.S. dollars
                globally. Solutions: The GxP solutions streamline processes and
                automate workflows which in turn leads to cost savings and
                faster product development. Higher efficiency reduces
                operational costs and automation reduces labour costs associated
                with manual work.
              </p>
              <p>
                <h6 className="mt-4"> 7. Continuous improvement:</h6>
                Quality management in the Pharma industry requires a constant
                commitment like any other sector and more because of the ongoing
                improvement and monitoring which can be resource intensive.
                Solutions: GxP solutions provide tools that focus on mitigating
                risks by identifying and addressing potential risks in time. It
                reduces quality and compliance issues and the likelihood of
                failures while ensuring continuous improvement.
              </p>
              <p>
                <h6 className="mt-4"> 8. Technological advancements:</h6>
                It could be a major challenge to keep up with all the
                technological advancements and integrate them into the existing
                processes to comply with the regulations and quality standards.
                Solution: GxP solutions have integration capabilities with other
                systems like ERPs which help in seamless flow and ensure
                consistency in data across the systems while maintaining the
                safety and quality standards as laid by the authorities.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-top p-5">
          <div className="pl-5 pr-5 pt-5 w-50">
            <div
              style={{ fontStyle: "italic", color: "#F38313" }}
            >
              <h4>
                " How to Choose the right GxP solutions if you are a Pharma
                Company "
              </h4>
            </div>
            <p>
              <h6 className="mt-4">
                1. Asses the current needs and challenges:
              </h6>
              The start could be by identifying current needs through
              assessments, compliance requirements, pain points, scalability
              requirements and future expectations. Setting clear objectives and
              listing specific functional requirements would be a great first
              step to choosing the best solution. Considering the
              industry-specific requirements is also vital to meet the
              particular demands of pharmaceutical manufacturing, research, and
              regulatory compliance.
            </p>

            <p>
              <h6 className="mt-4">2. Evaluate vendor solutions:</h6>
              Researching well the offerings and reputation of the vendor and
              their experience in the Pharma industry should be prioritised.
              Collecting a few references and customer stories while requesting
              possible demos and trials allows for better and smoother
              decision-making. It is crucial to inquire about the vendor support
              and training that they will provide for users along with other
              offerings.
            </p>
            <p>
              <h6 className="mt-4">3. Assess costs and ROI:</h6>
              This approach aims to generate future savings but requires an
              initial substantial investment. Therefore, conducting a thorough
              analysis of the total cost of ownership and comparing it with the
              potential return on investment is a mindful decision before
              implementation
            </p>
            <p>
              <h6 className="mt-4"> 4. Scalability and Future Proofing:</h6>
              It is important to ensure that selected GxP can grow and adapt
              alongside the regulations and the organisation. Verify that the
              GxP solution is designed to support compliance with the specific
              regulations relevant to the pharmaceutical sector.
            </p>
            <p>
              <h6 className="mt-4">5. Risk assessment: </h6>
              It is paramount to perform a risk assessment to identify potential
              data breaches and security risks. Getting user feedback to
              fine-tune the selection process by conducting pilot testing would
              give a quick go to implement the solution.
            </p>
            <p>
              <h6 className="mt-4">
                6. Final Selection, Implementation, Training and Change
                Management:
              </h6>
              The final selection and implementation can proceed after selecting
              the solution. The most important part comes after the
              implementation when an extensive employee-friendly training
              program must be inculcated to facilitate the smooth transition of
              the solution in the organization.
            </p>
            <p>
              <h6 className="mt-4">7. Improvement and Evaluation:</h6>
              Like any other solution, the requirement for constant adjustments
              and improvements is paramount to monitor and evaluate the quality
              of the solution and keep it intact.
            </p>
          </div>
          <img
            src="./Images/gobeyond/Components of 1 1.svg"
            className="blogimg50per pr-5"
          />
        </div>

        <div className="p-5">
          <p>
            <span className="font-weight-bold">
              Key takeaways and Impact of GxP on Pharma industry:{" "}
            </span>
            GxP solutions are the smarter way to uphold the safety and quality
            standards in the Pharma industry. They are critical for compliance
            standards and maintaining data integrity; they assure quality and
            operational efficiency. But like any other technology, they require
            continuous improvements as well. A major key to the success would be
            the active participation of its employees adapting to changes, and
            staying informed on new developments. For a more tailored GxP
            solution, we can assist in deciding and achieving your unique set of
            needs while navigating the ever-volatile pharma industry and its
            regulatory standards.
          </p>
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
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
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
          Why are GxP solutions a smarter way to quality management for Pharma
          sectors?
        </h4>
        <div className="col-12">
          <div className="pt-2">
            <p>
              Quality management is a critical aspect of any industry but when
              we talk about the Pharmaceutical sector it becomes paramount
              because of its link to direct human consumption and its effects on
              lives directly. The reliability and trust of the product are
              non-negotiable and involve quality control as well as quality
              assurance. The former involves systematic examination and testing
              of products to meet specifications that have been predetermined.
              The latter on the other hand involves processes and systems to
              prevent quality issues from arising in the first place. Together,
              they form a comprehensive approach to product quality.
              <br />
              <br />
            </p>
            <h6>Understanding GxP solutions:</h6>
            <div>
              <img
                src="./Images/gobeyond/Understanding GxP solutions 1 1.svg"
                className="blogimg p-2"
              />
            </div>
            <div>
              <p>
                Need in the Pharmaceutical sector: Good practices are a set of
                guidelines that are important to maintain the integrity of data,
                the safety of products, and the trust of regulatory authorities
                like CDSCO(Central Drugs Standard Control Organization) in
                India. The DCGI comes under CDSCO and has a set of roles,
                responsibilities and guidelines. The global GxP solutions market
                is projected to grow at a CAGR of approximately 8% from 2023 to
                2028. (Source: Market Research Report)
              </p>
            </div>
            <img
              src="./Images/gobeyond/Quality Management System 1 1.svg"
              className="blogimg p-2"
            />

            <div>
              <h5 style={{ fontFamily: "Lato" }} className="mt-5 mb-3">
                Why is the GxP solution of such importance in the Pharmaceutical
                industry and other regulatory ones?
              </h5>
              <p>
                <h6 className="mt-4">1. Patient Safety:</h6>
                The purpose of having Gxp solutions is to abide by the
                guidelines laid by Authorities and have products and services
                which meet safety and quality standards. They produce
                medications and therapies intended to save lives and these
                solutions help stick to the standards and maintain quality.
              </p>
              <p>
                <h6 className="mt-4">2. Regulatory Compliance:</h6>
                The Pharmaceutical sector is one of the most heavily regulated
                industries worldwide. Compliance with GxP standards is a legal
                requirement, and failure to adhere to these regulations can
                result in severe penalties, including product recalls and fines.
              </p>
              <p>
                <h6 className="mt-4">3. Product Quality:</h6>
                This part is governed by the GMP and ensures that the
                pharmaceutical companies maintain a high-quality and consistent
                manufacturing process for producing high-quality medicines. 78%
                of pharmaceutical organizations reported improved product
                quality and safety after implementing GxP solutions. (Source:
                Industry Case Study)
              </p>
              <p>
                <h6 className="mt-4">4. Data Integrity:</h6>
                GLP sets the guidelines for proper recording and documentation
                of data ensuring integrity and avoiding fraud or manipulation.
              </p>
              <p>
                <h6 className="mt-4">5. Regulatory Approvals:</h6>
                When a new pharmaceutical product is brought to market, there
                are complex regulatory approval processes to be carried out.
                Adherence to the GxP standards makes the process faster while
                maintaining the standards.
              </p>
              <h6 className="mt-4"> 6. Public Trust:</h6>
              This industry is critical because of its human aspect making it
              very important for professionals, patients and the public to trust
              pharmaceutical products and services for their safety and
              efficiency. The GxP solutions help in making this possible through
              its regulation. of document management, regulatory compliance,
              real-time monitoring and faster time to market. This leads to
              better global operations throughout the lifecycle.
            </div>

            <h5
              style={{ fontFamily: "Roboto", fontStyle: "italic" }}
              className="mt-5"
            >
              Challenges faced by Pharma companies for maintaining quality and
              compliance: With strict regulations and a higher need for quality
              control come various challenges in this highly volatile industry.
            </h5>
            <h6 className="mt-5">
              Here are a few challenges and the solutions that help tackle them:
            </h6>

            <div>
              <p>
                <h6 className="mt-4">1. Evolving regulations:</h6>
                There is a frequent update in regulations with the
                Pharmaceutical sector and staying up to date and maintaining
                compliance standards could be a challenge. Solution: Regular
                checking of agency websites, email, newsletters subscriptions
                and attending industry events, webinars and conferences could be
                a way to tackle the ever-changing nature of the regulations. GxP
                solutions have features which manage and track ensuring that
                pharmaceutical organisations meet and exceed regulatory
                requirements, helping them avoid legal issues, fines, and
                product recalls.
              </p>
              <p>
                <h6 className="mt-4">2. Complex Supply chains:</h6>
                The pharmaceutical supply chain is broad, global and extensive
                which may make it challenging to control every aspect of
                manufacturing and distribution while maintaining safety and
                quality. Solution: There are tools that enable the proper
                storage, handling, and distribution of pharmaceutical products
                in compliance with GDP and GSP guidelines. GxP solutions offer
                real-time monitoring and reporting capabilities, allowing
                organisations to track quality, safety, and compliance metrics
                and respond to issues promptly.
              </p>
              <p>
                <h6 className="mt-4">3. Data Management:</h6>
                Clinical trials and research can be complex especially when
                trying to maintain data integrity and effective data management.
                Solution: GxP solutions have features which support data
                integrity and streamline processes, regulatory compliance, and
                efficient data management which lead to a faster time-to-market
                for new pharmaceutical products which is essential in a
                competitive industry.
              </p>
              <p>
                <h6 className="mt-4">4. Counterfeit Products:</h6>
                Counterfeit or substandard products could be a major problem in
                the Pharmaceutical sector and lead to a major concern risking
                the lives of patients and compromising regulatory compliance.
                Solutions: GxP solutions could help combat this challenge by
                using serialisation, track-and-trace systems, verification and
                authorisation using secure authentication technologies which
                would ensure that there is no counterfeit.
              </p>
              <p>
                <h6 className="mt-4">5. Global operations:</h6>
                It is common for Pharmaceutical companies to operate globally
                but maintaining a global standard and complying with standards
                while maintaining quality and safety could be a challenge. India
                supplies around 20 percent of the global pharmaceuticals demand
                in terms of volume.
              </p>
              <h6 className="mt-4">
                {" "}
                Solutions: GxP standards provide a globally recognized framework
                for quality and compliance, making it easier for companies to
                conduct business across borders. GxP solutions provide great
                benefits in the form of document management, regulatory
                compliance, real-time monitoring and faster time to market. This
                leads to better global operations throughout the lifecycle.
              </h6>
              <p>
                <h6 className="mt-4"> 6. Cost and resource constraints:</h6>
                There is a high cost associated with maintaining high-quality
                manufacturing and research processes with facilities, equipment
                and personnel. In 2022, research and development spending in the
                pharmaceutical industry totalled some 244 billion U.S. dollars
                globally. Solutions: The GxP solutions streamline processes and
                automate workflows which in turn leads to cost savings and
                faster product development. Higher efficiency reduces
                operational costs and automation reduces labour costs associated
                with manual work.
              </p>
              <p>
                <h6 className="mt-4"> 7. Continuous improvement:</h6>
                Quality management in the Pharma industry requires a constant
                commitment like any other sector and more because of the ongoing
                improvement and monitoring which can be resource intensive.
                Solutions: GxP solutions provide tools that focus on mitigating
                risks by identifying and addressing potential risks in time. It
                reduces quality and compliance issues and the likelihood of
                failures while ensuring continuous improvement.
              </p>
              <p>
                <h6 className="mt-4"> 8. Technological advancements:</h6>
                It could be a major challenge to keep up with all the
                technological advancements and integrate them into the existing
                processes to comply with the regulations and quality standards.
                Solution: GxP solutions have integration capabilities with other
                systems like ERPs which help in seamless flow and ensure
                consistency in data across the systems while maintaining the
                safety and quality standards as laid by the authorities.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h5
            className="flex mt-4 mb-2"
            style={{ fontStyle: "italic", color: "#F38313" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F38313"
              class="bi bi-quote"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
            </svg>
            How to Choose the right GxP solutions if you are a Pharma Company:
          </h5>
          <p>
            <h6 className="mt-4">1. Asses the current needs and challenges:</h6>
            The start could be by identifying current needs through assessments,
            compliance requirements, pain points, scalability requirements and
            future expectations. Setting clear objectives and listing specific
            functional requirements would be a great first step to choosing the
            best solution. Considering the industry-specific requirements is
            also vital to meet the particular demands of pharmaceutical
            manufacturing, research, and regulatory compliance.
          </p>

          <p>
            <h6 className="mt-4">2. Evaluate vendor solutions:</h6>
            Researching well the offerings and reputation of the vendor and
            their experience in the Pharma industry should be prioritised.
            Collecting a few references and customer stories while requesting
            possible demos and trials allows for better and smoother
            decision-making. It is crucial to inquire about the vendor support
            and training that they will provide for users along with other
            offerings.
          </p>
          <p>
            <h6 className="mt-4">3. Assess costs and ROI:</h6>
            This approach aims to generate future savings but requires an
            initial substantial investment. Therefore, conducting a thorough
            analysis of the total cost of ownership and comparing it with the
            potential return on investment is a mindful decision before
            implementation
          </p>
          <p>
            <h6 className="mt-4"> 4. Scalability and Future Proofing:</h6>
            It is important to ensure that selected GxP can grow and adapt
            alongside the regulations and the organisation. Verify that the GxP
            solution is designed to support compliance with the specific
            regulations relevant to the pharmaceutical sector.
          </p>
          <p>
            <h6 className="mt-4">5. Risk assessment: </h6>
            It is paramount to perform a risk assessment to identify potential
            data breaches and security risks. Getting user feedback to fine-tune
            the selection process by conducting pilot testing would give a quick
            go to implement the solution.
          </p>
          <p>
            <h6 className="mt-4">
              6. Final Selection, Implementation, Training and Change
              Management:
            </h6>
            The final selection and implementation can proceed after selecting
            the solution. The most important part comes after the implementation
            when an extensive employee-friendly training program must be
            inculcated to facilitate the smooth transition of the solution in
            the organization.
          </p>
          <p>
            <h6 className="mt-4">7. Improvement and Evaluation:</h6>
            Like any other solution, the requirement for constant adjustments
            and improvements is paramount to monitor and evaluate the quality of
            the solution and keep it intact.
          </p>
        </div>
        <img
          src="./Images/gobeyond/Components of 1 1.svg"
          className="blogimg p-3"
        />
        <div className="col-12">
          <p>
            <h6 className="mt-4">
              Key takeaways and Impact of GxP on Pharma industry:
            </h6>
            GxP solutions are the smarter way to uphold the safety and quality
            standards in the Pharma industry. They are critical for compliance
            standards and maintaining data integrity; they assure quality and
            operational efficiency. But like any other technology, they require
            continuous improvements as well. A major key to the success would be
            the active participation of its employees adapting to changes, and
            staying informed on new developments. For a more tailored GxP
            solution, we can assist in deciding and achieving your unique set of
            needs while navigating the ever-volatile pharma industry and its
            regulatory standards.
          </p>
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
