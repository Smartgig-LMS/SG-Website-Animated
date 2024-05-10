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

export default function ManufactoringBlog6() {
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
      The evolution of enterprise resource planning in industry 5.0{" "}
    </Typography>,
  ];

  return (
    <>
      <div className="ManuBlogHeadnigs6">
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
            src="./Images/gobeyond/blog-manufacturing.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h2 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          THE EVOLUTION OF ENTERPRISE RESOURCE PLANNING IN INDUSTRY 5.0
        </h2>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-2">
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-lg-7">
                <p>
                  In the ever-changing landscape of the engineering and
                  manufacturing sector, maintaining a competitive edge and
                  operational effectiveness is crucial. As Industry 5.0 reshapes
                  the landscape with its emphasis on connectivity, automation,
                  and intelligence, Enterprise Resource Planning (ERP) systems
                  have evolved to become indispensable tools for manufacturers.
                  (ERP) software has emerged as a foundational asset for
                  streamlining processes, enhancing productivity, and ensuring
                  seamless operations within the manufacturing sector. As we
                  progress into 2024, ERP has undergone significant evolution to
                  cater to the specific needs of the manufacturing sector. In
                  this article, we'll explore the evolution of ERP, its pivotal
                  role and key benefits that modern manufacturing ERP systems
                  has possessed to thrive in this era of digital transformation.
                </p>
              </div>
              <img
                src="./Images/gobeyond/Rectangle.svg"
                className="p-4"
                style={{ objectFit: "cover", maxWidth: "35%" }}
              />
            </div>
            <div className="p-3">
              <div
                className="d-flex mb-3"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <div>
                  <img
                    src="./Images/gobeyond/Rectangle4.svg"
                    className=""
                    style={{ objectFit: "cover", maxWidth: "100%" }}
                  />
                </div>

                <div className="ml-3">
                  <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                    Brief Evolution of ERP:
                  </h6>
                  The concept of ERP systems traces back to the 1960s, although
                  their modern understanding has only solidified over the last
                  few decades. Originally emerging as Material Requirements
                  Planning (MRP) systems in the 1960s, ERP has undergone
                  significant development since then:
                  <br />
                </div>
              </div>
              <p>
                <span className="font-weight-bold">1960s-1970s:</span> The
                inception of MRP systems occurred through a collaboration
                between IBM and J.I Case, a manufacturer of tractors and
                construction machinery. These early systems enabled companies to
                track inventory and oversee production, albeit with high costs,
                complex maintenance requirements, and the need for on-premises
                infrastructure. While primarily focusing on basic inventory
                management and production functions, MRP systems gradually
                expanded in sophistication throughout the 1970s.
                <br />
                <span className="font-weight-bold">1980s-1990s:</span> The
                evolution of MRP systems led to the emergence of Manufacturing
                Resource Planning (MRP II) solutions. These advanced systems
                incorporated additional functionalities beyond inventory
                management, including enhanced support for scheduling and
                production processes.
                <br />
                <span className="font-weight-bold">1990s-2000s:</span> The term
                "ERP" or Enterprise Resource Planning was introduced by The
                Gartner Group in the 1990s, marking a significant shift in the
                evolution of these systems. Unlike their predecessors, ERP
                systems integrated various departments and functions such as
                accounting, finance, and sales into a single platform,
                facilitating comprehensive business management.
                <br />
                <span className="font-weight-bold">The 2000s-2010s:</span> The
                ERP II, emerging in the early 2000s, offered internet enabled
                software for real-time ERP access. It expanded beyond core
                functions to include CRM, business intelligence, e-commerce,
                SCM, and HCM. Cloud-based solutions gained traction, providing
                remote data access without on-premises infrastructure.
              </p>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "start", alignItems: "start" }}
            >
              <div className="col-lg-9">
                <p>
                  <br />
                  <span className="font-weight-bold">
                    2010 - Present-Day:
                  </span>{" "}
                  In the current era, modern ERP systems are seamlessly
                  incorporating, cloud computing, Internet of Things (IoT)
                  connectivity, and artificial intelligence (AI) to offer
                  instantaneous visibility into diverse business and supply
                  chain activities.
                  <br />
                  In the context of Industry 5.0, these advanced ERPs play a
                  crucial role in integrating with operational and informational
                  technologies like process controllers, execution systems, and
                  data abstraction tools, thereby extracting valuable business
                  insights from raw data. ERP serves as a cornerstone for
                  achieving numerous micro-goals within Industry 5.0, including
                  enhancing industrial productivity and promoting product
                  circularity.
                </p>
              </div>
              <img
                src="./Images/gobeyond/Rectangle2.svg"
                className=""
                style={{ objectFit: "cover", maxWidth: "20%" }}
              />
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Latest ERP Trends And Examples That Are Transforming
                Manufacturing Industry:
              </h6>
              <div className="d-flex">
                <p>
                  <span className="font-weight-bold">
                    {" "}
                    Cloud-Based ERP Solutions:
                  </span>{" "}
                  Cloud-based ERP solutions have revolutionized enterprise
                  operations, driven by the transformative impact of cloud
                  technology on ERP software. In 2023, an increasing number of
                  engineering and manufacturing firms are adopting cloud-based
                  ERP solutions for their scalability, adaptability, reduced
                  upfront costs, and convenient accessibility.
                  <br />
                  <br />
                  These solutions enable instant data exchange and foster
                  collaboration among stakeholders, enhancing operational
                  efficiency and fostering innovation.
                  <br />
                  <span className="font-weight-bold"> Example:</span>{" "}
                  FloraCraft, a producer and distributor of Styrofoam brand foam
                  items, who also supplies products to Walmart, faced challenges
                  with their outdated ERP system, hindering their ability to
                  meet customer demand and expand. After switching to a
                  cloud-based ERP solution, FloraCraft increased production by
                  60%. FloraCraft was also awarded Walmart's Supplier of the
                  Year, a feat they attributed to their cloud ERP system.
                </p>
                <img
                  src="./Images/gobeyond/Rectangle3.svg"
                  alt=""
                  className="pl-4"
                  style={{ objectFit: "cover", maxWidth: "35%" }}
                />
              </div>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Two-Tier ERP:{" "}
              </h6>
              <p>
                Two-Tier ERP, a prominent trend, involves deploying separate ERP
                systems for different organizational levels. Unlike the
                traditional approach of using a single system for headquarters
                and subsidiaries, this strategy allows companies to maintain a
                core ERP system at the corporate level while enabling
                subsidiaries to operate with a different, often cloud-based
                solution. This approach offers cost savings, increased
                flexibility, and faster deployment, making it particularly
                advantageous for organizations with specialized business units
                or experiencing rapid growth.
              </p>
              <p>
                <span className="font-weight-bold"> Example:</span> In May 2020,
                amid the challenges posed by the COVID-19 pandemic, Deloitte
                collaborated with Terumo, a prominent company in the
                development, manufacturing, and marketing of medical devices and
                pharmaceutical products. Together, they embarked on a project to
                implement a two-tier ERP infrastructure using SAP® S/4HANA
                Cloud. The goal was to enhance Terumo's operational efficiency
                and management across the diverse markets of Europe, the Middle
                East, and Africa (EMEA). This innovative solution allowed Terumo
                to standardize its business processes across the region while
                maintaining the flexibility to tailor applications to specific
                needs.
              </p>
              <p>
                <span className="font-weight-bold">
                  {" "}
                  Embracing AI and Machine Learning:
                </span>{" "}
                In ERP, AI and ML systems replace human tasks, managing data
                generation, processing, and reporting across finance,
                production, warehousing, projects, and personnel.
                <br />
                Advancements in AI and ML automate routine tasks and data
                analysis, previously done by humans. For example, conversational
                bots enable users to interact with systems via voice or text,
                handling tasks like order processing and warehouse updates,
                eliminating manual data entry. Example: Oracle ERP Cloud
                utilizes AI and ML to automate data collection and analysis,
                focusing on Intelligent Process Automation. This streamlines
                repetitive tasks, allowing employees to prioritize value-driven
                initiatives. Over 6,000 organizations across 112 countries and
                23 industries rely on Oracle ERP Cloud for its innovative,
                secure platform. Notable users like General Electric (GE)
                leverage its AI, digital assistants, blockchain, and IoT
                capabilities for increased productivity, cost savings, and
                enhanced controls. Gartner recognized Oracle ERP as a Leader in
                Cloud Core Financial Management Suites for midsize businesses
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Mobile ERP:{" "}
              </h6>
              <div className="d-flex">
                <img
                  src="/Images/gobeyond/Rectangle5.svg"
                  alt=""
                  className="pr-4"
                  style={{ objectFit: "cover", maxWidth: "20%" }}
                />
                <p>
                  Mobile ERP applications are increasingly prevalent across
                  various industries due to their perceived convenience in
                  handling everyday tasks. Similarly, manufacturing firms now
                  rely on multiple mobile apps to monitor their daily operations
                  closely. Additionally, as most ERP applications are now
                  cloud-based, mobile usage has become commonplace. With mobile
                  ERP apps readily available, enterprises can ensure that their
                  workforce can access these tools anytime, anywhere, with just
                  a compatible mobile device and a stable internet connection.
                </p>
              </div>
              <p>
                <br />
                <span className="font-weight-bold"> Example: </span> The Mobile
                ERP solution implemented for Coca-Cola Company enabled instant
                access to inventory information, empowering CCBCC to monitor
                stock levels in real-time and make well-informed decisions.
                Sales representatives and delivery drivers utilized mobile.
                devices to access the Mobile ERP system, enabling them to place
                orders, retrieve customer account details, and oversee sales
                transactions while on the move
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Benefits Of ERP Solutions In Industry 5.0:{" "}
              </h6>
              <div className="d-flex">
                <img
                  src="/Images/gobeyond/Rectangle8.svg"
                  alt=""
                  className="pt-2 pb-2 pr-4"
                  style={{ objectFit: "cover", maxWidth: "30%" }}
                />
                <p>
                  <span className="font-weight-bold">
                    {" "}
                    Automation and Efficiency:
                  </span>{" "}
                  A ERP systems streamline standard company procedures by
                  centralizing real-time data, providing comprehensive insight
                  into operations, and empowering end users to monitor
                  production statistics autonomously. This automation
                  accelerates production, minimizes errors, and boosts
                  profitability in manufacturing.
                  <br />
                  <br />
                  <span className="font-weight-bold">
                    {" "}
                    Optimize Cash Flow Management:
                  </span>
                  Integrated ERP manufacturing solutions facilitate effective
                  cash flow management by enabling purchasing and planning
                  reports, tracking overdue invoices, and delivering real-time
                  financial insights. With every transaction recorded,
                  businesses gain accurate visibility into cash inflows and
                  outflows.
                </p>
              </div>
              <p>
                <span className="font-weight-bold">
                  {" "}
                  Streamline Customer Relationship Management (CRM):
                </span>
                ERP manufacturing systems include CRM functionalities,
                eliminating the need for separate CRM solutions. This integrated
                feature allows businesses to maintain detailed records of
                interactions with top clients, expedite lead follow-ups, and
                ensure seamless communication. By centralizing customer data,
                ERP enhances reporting and facilitates proactive customer
                management.
              </p>
              <p>
                <span className="font-weight-bold">
                  {" "}
                  Harnessing the Industrial Internet of Things (IIoT):
                </span>
                Modern ERP systems leverage IIoT technology to connect
                production equipment and parts in real-time, enhancing
                maintenance management and enabling proactive issue resolution.
                For example, In the chemical industry, integrating IoT with ERP
                enhances monitoring efficiency. By automating data collection
                through IoT devices in warehouses, real-time insights on
                parameters like pressure and temperature are seamlessly fed into
                ERP systems. This allows for 24/7 monitoring, offering
                opportunities to reduce insurance costs and identify operational
                inefficiencies.
              </p>
              <p>
                <span className="font-weight-bold">
                  {" "}
                  Empower Informed Decision-Making:{" "}
                </span>
                Open-source ERP solutions provide comprehensive insights into
                business performance, empowering manufacturers to make informed
                decisions swiftly. With access to critical performance metrics
                such as sales margin and overall sales, businesses can align
                strategies, optimize operations, and drive profitability. Drive
                Cost Reduction and Profitability: ERP systems enable cost
                reduction and improved profitability by facilitating rapid
                responses to market dynamics, enhancing organizational
                efficiency, and streamlining inventory management. With
                integrated databases and efficient information processing,
                businesses can identify and address inefficiencies, leading to
                increased profitability.
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Challenges & Solutions:{" "}
              </h6>
              <img
                src="./Images/gobeyond/Rectangle7.svg"
                alt=""
                className="p-3"
                style={{ objectFit: "cover", maxWidth: "100%" }}
              />
              <p>
                Conclusion: As manufacturers embrace the challenges and
                opportunities of Industry 5.0, ERP 5.0 emerges as a cornerstone
                for digital transformation. By harnessing the power of
                intelligent, interconnected systems, manufacturers can
                streamline operations, enhance productivity, and drive
                innovation across the enterprise.
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
            src="./Images/gobeyond/blog-manufacturing.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h2 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          THE EVOLUTION OF ENTERPRISE RESOURCE PLANNING IN INDUSTRY 5.0
        </h2>
        <div className="col-12">
          <div className="pb-3">
            <p>
              In the ever-changing landscape of the engineering and
              manufacturing sector, maintaining a competitive edge and
              operational effectiveness is crucial. As Industry 5.0 reshapes the
              landscape with its emphasis on connectivity, automation, and
              intelligence, Enterprise Resource Planning (ERP) systems have
              evolved to become indispensable tools for manufacturers. (ERP)
              software has emerged as a foundational asset for streamlining
              processes, enhancing productivity, and ensuring seamless
              operations within the manufacturing sector. As we progress into
              2024, ERP has undergone significant evolution to cater to the
              specific needs of the manufacturing sector. In this article, we'll
              explore the evolution of ERP, its pivotal role and key benefits
              that modern manufacturing ERP systems has possessed to thrive in
              this era of digital transformation.
            </p>
            <img
              src="./Images/gobeyond/Rectangle.svg"
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div>
            <div>
              <div className="pb-3">
                <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                  Brief Evolution of ERP:
                </h6>
                The concept of ERP systems traces back to the 1960s, although
                their modern understanding has only solidified over the last few
                decades. Originally emerging as Material Requirements Planning
                (MRP) systems in the 1960s, ERP has undergone significant
                development since then:
                <br />
              </div>
              <img
                src="./Images/gobeyond/Rectangle4.svg"
                className="pb-3"
                style={{ objectFit: "cover", maxWidth: "100%" }}
              />
            </div>
            <p>
              <span className="font-weight-bold">1960s-1970s:</span> The
              inception of MRP systems occurred through a collaboration between
              IBM and J.I Case, a manufacturer of tractors and construction
              machinery. These early systems enabled companies to track
              inventory and oversee production, albeit with high costs, complex
              maintenance requirements, and the need for on-premises
              infrastructure. While primarily focusing on basic inventory
              management and production functions, MRP systems gradually
              expanded in sophistication throughout the 1970s.
              <br />
              <span className="font-weight-bold">1980s-1990s:</span> The
              evolution of MRP systems led to the emergence of Manufacturing
              Resource Planning (MRP II) solutions. These advanced systems
              incorporated additional functionalities beyond inventory
              management, including enhanced support for scheduling and
              production processes.
              <br />
              <span className="font-weight-bold">1990s-2000s:</span> The term
              "ERP" or Enterprise Resource Planning was introduced by The
              Gartner Group in the 1990s, marking a significant shift in the
              evolution of these systems. Unlike their predecessors, ERP systems
              integrated various departments and functions such as accounting,
              finance, and sales into a single platform, facilitating
              comprehensive business management.
              <br />
              <span className="font-weight-bold">The 2000s-2010s:</span> The ERP
              II, emerging in the early 2000s, offered internet enabled software
              for real-time ERP access. It expanded beyond core functions to
              include CRM, business intelligence, e-commerce, SCM, and HCM.
              Cloud-based solutions gained traction, providing remote data
              access without on-premises infrastructure.
            </p>
          </div>
          <div className="pb-3">
            <p>
              <br />
              <span className="font-weight-bold">2010 - Present-Day:</span> In
              the current era, modern ERP systems are seamlessly incorporating,
              cloud computing, Internet of Things (IoT) connectivity, and
              artificial intelligence (AI) to offer instantaneous visibility
              into diverse business and supply chain activities.
              <br />
              In the context of Industry 5.0, these advanced ERPs play a crucial
              role in integrating with operational and informational
              technologies like process controllers, execution systems, and data
              abstraction tools, thereby extracting valuable business insights
              from raw data. ERP serves as a cornerstone for achieving numerous
              micro-goals within Industry 5.0, including enhancing industrial
              productivity and promoting product circularity.
            </p>
            <img
              src="./Images/gobeyond/Rectangle2.svg"
              className=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>

          <div className="pt-3 pb-3">
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              Latest ERP Trends And Examples That Are Transforming Manufacturing
              Industry:
            </h6>
            <p>
              <span className="font-weight-bold">
                {" "}
                Cloud-Based ERP Solutions:
              </span>{" "}
              Cloud-based ERP solutions have revolutionized enterprise
              operations, driven by the transformative impact of cloud
              technology on ERP software. In 2023, an increasing number of
              engineering and manufacturing firms are adopting cloud-based ERP
              solutions for their scalability, adaptability, reduced upfront
              costs, and convenient accessibility.
              <br />
              <br />
              These solutions enable instant data exchange and foster
              collaboration among stakeholders, enhancing operational efficiency
              and fostering innovation.
              <br />
              <span className="font-weight-bold"> Example:</span> FloraCraft, a
              producer and distributor of Styrofoam brand foam items, who also
              supplies products to Walmart, faced challenges with their outdated
              ERP system, hindering their ability to meet customer demand and
              expand. After switching to a cloud-based ERP solution, FloraCraft
              increased production by 60%. FloraCraft was also awarded Walmart's
              Supplier of the Year, a feat they attributed to their cloud ERP
              system.
            </p>
            <img
              src="./Images/gobeyond/Rectangle3.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>

          <div className="pb-3">
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              Two-Tier ERP:{" "}
            </h6>
            <p>
              Two-Tier ERP, a prominent trend, involves deploying separate ERP
              systems for different organizational levels. Unlike the
              traditional approach of using a single system for headquarters and
              subsidiaries, this strategy allows companies to maintain a core
              ERP system at the corporate level while enabling subsidiaries to
              operate with a different, often cloud-based solution. This
              approach offers cost savings, increased flexibility, and faster
              deployment, making it particularly advantageous for organizations
              with specialized business units or experiencing rapid growth.
            </p>
            <p>
              <span className="font-weight-bold"> Example:</span> In May 2020,
              amid the challenges posed by the COVID-19 pandemic, Deloitte
              collaborated with Terumo, a prominent company in the development,
              manufacturing, and marketing of medical devices and pharmaceutical
              products. Together, they embarked on a project to implement a
              two-tier ERP infrastructure using SAP® S/4HANA Cloud. The goal was
              to enhance Terumo's operational efficiency and management across
              the diverse markets of Europe, the Middle East, and Africa (EMEA).
              This innovative solution allowed Terumo to standardize its
              business processes across the region while maintaining the
              flexibility to tailor applications to specific needs.
            </p>
            <p>
              <span className="font-weight-bold">
                {" "}
                Embracing AI and Machine Learning:
              </span>{" "}
              In ERP, AI and ML systems replace human tasks, managing data
              generation, processing, and reporting across finance, production,
              warehousing, projects, and personnel.
              <br />
              Advancements in AI and ML automate routine tasks and data
              analysis, previously done by humans. For example, conversational
              bots enable users to interact with systems via voice or text,
              handling tasks like order processing and warehouse updates,
              eliminating manual data entry. Example: Oracle ERP Cloud utilizes
              AI and ML to automate data collection and analysis, focusing on
              Intelligent Process Automation. This streamlines repetitive tasks,
              allowing employees to prioritize value-driven initiatives. Over
              6,000 organizations across 112 countries and 23 industries rely on
              Oracle ERP Cloud for its innovative, secure platform. Notable
              users like General Electric (GE) leverage its AI, digital
              assistants, blockchain, and IoT capabilities for increased
              productivity, cost savings, and enhanced controls. Gartner
              recognized Oracle ERP as a Leader in Cloud Core Financial
              Management Suites for midsize businesses
            </p>
          </div>

          <div className="pb-3">
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              Mobile ERP:{" "}
            </h6>
            <img
              src="/Images/gobeyond/Rectangle5.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
            <p>
              Mobile ERP applications are increasingly prevalent across various
              industries due to their perceived convenience in handling everyday
              tasks. Similarly, manufacturing firms now rely on multiple mobile
              apps to monitor their daily operations closely. Additionally, as
              most ERP applications are now cloud-based, mobile usage has become
              commonplace. With mobile ERP apps readily available, enterprises
              can ensure that their workforce can access these tools anytime,
              anywhere, with just a compatible mobile device and a stable
              internet connection.
            </p>
            <p>
              <br />
              <span className="font-weight-bold"> Example: </span> The Mobile
              ERP solution implemented for Coca-Cola Company enabled instant
              access to inventory information, empowering CCBCC to monitor stock
              levels in real-time and make well-informed decisions. Sales
              representatives and delivery drivers utilized mobile. devices to
              access the Mobile ERP system, enabling them to place orders,
              retrieve customer account details, and oversee sales transactions
              while on the move
            </p>
          </div>

          <div className="pb-3">
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              Benefits Of ERP Solutions In Industry 5.0:{" "}
            </h6>
            <img
              src="/Images/gobeyond/Rectangle8.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
            <p>
              <span className="font-weight-bold">
                {" "}
                Automation and Efficiency:
              </span>{" "}
              A ERP systems streamline standard company procedures by
              centralizing real-time data, providing comprehensive insight into
              operations, and empowering end users to monitor production
              statistics autonomously. This automation accelerates production,
              minimizes errors, and boosts profitability in manufacturing.
              <br />
              <br />
              <span className="font-weight-bold">
                {" "}
                Optimize Cash Flow Management:
              </span>
              Integrated ERP manufacturing solutions facilitate effective cash
              flow management by enabling purchasing and planning reports,
              tracking overdue invoices, and delivering real-time financial
              insights. With every transaction recorded, businesses gain
              accurate visibility into cash inflows and outflows.
            </p>
            <p>
              <span className="font-weight-bold">
                {" "}
                Streamline Customer Relationship Management (CRM):
              </span>
              ERP manufacturing systems include CRM functionalities, eliminating
              the need for separate CRM solutions. This integrated feature
              allows businesses to maintain detailed records of interactions
              with top clients, expedite lead follow-ups, and ensure seamless
              communication. By centralizing customer data, ERP enhances
              reporting and facilitates proactive customer management.
            </p>
            <p>
              <span className="font-weight-bold">
                {" "}
                Harnessing the Industrial Internet of Things (IIoT):
              </span>
              Modern ERP systems leverage IIoT technology to connect production
              equipment and parts in real-time, enhancing maintenance management
              and enabling proactive issue resolution. For example, In the
              chemical industry, integrating IoT with ERP enhances monitoring
              efficiency. By automating data collection through IoT devices in
              warehouses, real-time insights on parameters like pressure and
              temperature are seamlessly fed into ERP systems. This allows for
              24/7 monitoring, offering opportunities to reduce insurance costs
              and identify operational inefficiencies.
            </p>
            <p>
              <span className="font-weight-bold">
                {" "}
                Empower Informed Decision-Making:{" "}
              </span>
              Open-source ERP solutions provide comprehensive insights into
              business performance, empowering manufacturers to make informed
              decisions swiftly. With access to critical performance metrics
              such as sales margin and overall sales, businesses can align
              strategies, optimize operations, and drive profitability. Drive
              Cost Reduction and Profitability: ERP systems enable cost
              reduction and improved profitability by facilitating rapid
              responses to market dynamics, enhancing organizational efficiency,
              and streamlining inventory management. With integrated databases
              and efficient information processing, businesses can identify and
              address inefficiencies, leading to increased profitability.
            </p>
          </div>

          <div className="pb-3">
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              Challenges & Solutions:{" "}
            </h6>
            <img
              src="./Images/gobeyond/Rectangle7.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
            <p>
              Conclusion: As manufacturers embrace the challenges and
              opportunities of Industry 5.0, ERP 5.0 emerges as a cornerstone
              for digital transformation. By harnessing the power of
              intelligent, interconnected systems, manufacturers can streamline
              operations, enhance productivity, and drive innovation across the
              enterprise.
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
