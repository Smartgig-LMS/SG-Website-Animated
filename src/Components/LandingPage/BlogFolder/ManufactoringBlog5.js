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

export default function ManufactoringBlog5() {
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
      Transition of Industry 4.0 To 5.0 In Manufacturing
    </Typography>,
  ];

  return (
    <>
      <div className="ManuBlogHeadnigs5">
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
          The Transition of Industry 4.0 To 5.0 In Manufacturing
        </h2>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-2">
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-lg-5">
                <p>
                  In the ever-evolving landscape of manufacturing, Industry 5.0
                  emerges as a beacon of innovation, promising to revolutionize
                  traditional production techniques. Built upon the foundation
                  laid by Industry 4.0, Industry 5.0 embodies a human-centric
                  approach, where advanced technologies like cobots, collaborate
                  seamlessly with human intelligence to drive efficiency,
                  customization, and sustainability. In this blog, let's delve
                  into the benefits, challenges, and solutions associated with
                  Industry 5.0, exploring its transformative potential in
                  shaping the future of manufacturing
                </p>
              </div>
              <img
                src="./Images/gobeyond/Frame 117127597022.svg"
                className="p-4"
                style={{ objectFit: "cover", maxWidth: "50%" }}
              />
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-lg-7">
                <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                  The Transition of Industry 4.0 To 5.0 In Manufacturing:
                </h6>
                <p>
                  The journey of the Industrial Revolution commenced in the 18th
                  Century, progressing through five distinct phases as
                  advancements in technologies and methodologies unfolded
                  through subsequent eras. The Transition of Industry 4.0 To 5.0
                  In Manufacturing:
                  <br />
                  <span className="font-weight-bold">Industry 1.0:</span>{" "}
                  Originated around 1780, the inaugural phase of the Industrial
                  Revolution marked a shift towards mechanized production
                  powered by steam and water.
                  <br />
                  <span className="font-weight-bold">Industry 2.0:</span>{" "}
                  Approximately a century later, around 1870, the second
                  industrial revolution emerged, characterized by the widespread
                  adoption of electrification and the introduction of assembly
                  line-based mass production. Industry 3.0: Advancing another
                  century to 1970,
                  <br />
                  <span className="font-weight-bold">Industry 3.0:</span>{" "}
                  introduced automation through the integration of computers and
                  electronics. This period also witnessed a phase known as
                  Industry 3.5, which involved the globalization of production
                  through offshoring to lower-cost regions.
                </p>
              </div>
              <img
                src="./Images/gobeyond/SmartGig_Industrial 5.svg"
                className=""
                style={{ objectFit: "cover", maxWidth: "35%" }}
              />
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="col-lg-7">
                <p>
                  <br />
                  <span className="font-weight-bold">Industry 4.0:</span>{" "}
                  Presently, we find ourselves amidst the fourth industrial
                  revolution, which revolves around digitalization. Industry 4.0
                  encompasses automation, artificial intelligence (AI),
                  interconnected devices, data analytics, cyber-physical
                  systems, digital transformation, and other cutting-edge
                  technologies.
                  <br />
                  <span className="font-weight-bold">Industry 5.0:</span> Now,
                  as we transition into the fifth industrial revolution, the
                  focus shifts towards the synergy between humans and machines.
                  Centered on personalization and the utilization of
                  collaborative robotics, this phase empowers workers to engage
                  in value-added tasks for clientele. Unlike its predecessors,
                  Industry 5.0 extends beyond manufacturing processes,
                  incorporating elements of enhanced resilience, a human centric
                  ethos, and an emphasis on sustainability, as elaborated upon
                  in subsequent sections. 5.0 revolves around three key ideas:
                  Sustainability, Human centeredness, and Resilience, which
                  influence how it operates and its goals. Let's break down
                  these concepts:
                </p>
              </div>
              <img
                src="./Images/gobeyond/SmartGig_Industrial 6.svg"
                className=""
                style={{ objectFit: "cover", maxWidth: "35%" }}
              />
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Sustainability:{" "}
              </h6>
              <p>
                Previous industrial revolutions often overlooked the
                environmental impact of their operations. While some companies
                showed concern through Corporate Social Responsibility (CSR)
                programs, it didn't create significant change. In Industry 5.0,
                there's a stronger focus on sustainable business practices. This
                means companies need to rethink their strategies to prioritize
                sustainability. They should align with goals like the 17
                Sustainable Development Goals and the Triple Bottom Line (TBL),
                which considers People, Planet, and Profit. Instead of just
                minimizing harm or 'greenwashing, ' true sustainability aims to
                make a positive impact. Companies should focus on improving the
                environment, not just reducing damage. Example: Companies like
                IKEA are using technologies like circular economy and additive
                technologies to make products personalized and eco-friendly. In
                fiscal year 2022, IKEA took the lead on an initiative to recycle
                discarded foam mattresses by using polyols found in the foam to
                create new mattresses. This initiative reduced the amount of
                waste going to landfills and supported the industry's efforts to
                develop foam solutions focused on recycled materials. The
                company have been lauded as leading advocates for climate
                action.
              </p>
            </div>
            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Resilience:{" "}
              </h6>
              <p>
                The Covid-19 pandemic highlighted vulnerabilities in global
                supply chains, causing shortages. This emphasized the need for
                resilient supply chains. Industry 5.0 aims to create supply
                chains that can withstand crises. It's about being prepared for
                the unexpected. Manufacturers need to adapt processes to be more
                flexible and agile, ensuring stability during tough times.
                Example: Siemens Gas and Power division utilized digital twin
                technology to enhance the resilience of their manufacturing
                operations. By creating virtual replicas of their production
                facilities and equipment, they were able to simulate various
                scenarios and optimize processes in real-time. During the
                COVID-19 pandemic, when physical access to factories was
                limited, these digital twins enabled remote monitoring and
                control, ensuring continuity of operations while maintaining
                Human-Centric: safety protocols. This resilience allowed Siemens
                to adapt swiftly to disruptions and maintain productivity levels
                despite challenging circumstances.
              </p>
            </div>
            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Human-Centric:{" "}
              </h6>
              <p>
                Another crucial aspect of Industry 5.0 is putting people first.
                It's about shifting from seeing employees as resources to
                valuing them as essential assets. In manufacturing, companies
                should choose technology that supports their workforce, not the
                other way around. They need to consider how technology can meet
                workers' needs and also promote well-being of workers. A
                human-centric approach means empowering workers and integrating
                technology that complements their skills. While robots can
                handle repetitive tasks efficiently, they can't replace human
                problem-solving abilities. Industry 5.0 is about combining human
                intuition with machine efficiency for better results. Example:
                Hyundai implemented the Exoskeleton (VEX) in their assembly
                lines, where workers often handle heavy components. By wearing
                the exoskeleton, workers experienced reduced strain on their
                backs and arms, leading to fewer instances of workplace
                injuries. This adoption of wearable robotics not only improved
                employee well-being but also enhanced productivity and
                efficiency in manufacturing processes, demonstrating the
                potential of such technologies in Industry 5.0.
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Benefits and Applications of Industrial 5.0:{" "}
              </h6>
              <div className="d-flex">
                <img
                  src="/Images/gobeyond/SmartGig_Industry 5 1.svg"
                  alt=""
                  className="pt-4 pr-4"
                  style={{ objectFit: "cover", maxWidth: "35%" }}
                />
                <p>
                  <br />
                  <span className="font-weight-bold"> Benefits:</span> <br />
                  <span className="font-weight-bold">
                    {" "}
                    Improved Efficiency:
                  </span>{" "}
                  Industry 5.0 integrates human intelligence with advanced
                  technologies, optimizing production processes for maximum
                  efficiency. Enhanced Customization: With human-robot
                  collaboration, manufacturers can offer greater product
                  customization to meet diverse customer demands.
                  <br />
                  <span className="font-weight-bold">
                    {" "}
                    Increased Productivity:
                  </span>{" "}
                  Collaborative robots (cobots) assist workers in repetitive
                  tasks, freeing up time for skilled labour to focus on
                  highervalue activities.
                  <br />
                  <span className="font-weight-bold">
                    {" "}
                    Enhanced Quality Control:
                  </span>{" "}
                  Advanced sensors and AI technologies enable real-time
                  monitoring and predictive maintenance, ensuring consistent
                  product quality.
                </p>
              </div>
              <p>
                <br />
                <span className="font-weight-bold">
                  {" "}
                  Sustainable Practices:{" "}
                </span>{" "}
                Industry 5.0 emphasizes sustainability, promoting resource
                optimization and waste reduction through smarter production
                methods. <br />
                <span className="font-weight-bold">
                  {" "}
                  Competitive Advantage:{" "}
                </span>{" "}
                Adopting Industry 5.0 technologies allows manufacturers to stay
                ahead of the curve, delivering innovative products and services
                to the market.
                <br />
                <span className="font-weight-bold">
                  {" "}
                  Optimizing Manufacturing Operations:{" "}
                </span>{" "}
                In the realm of manufacturing, Industry 5.0 offers opportunities
                for companies to strategically position production facilities in
                regions with lower manufacturing expenses and proximity to
                affordable raw materials. Cloud manufacturing takes charge of
                overseeing plant machinery and managing activities throughout
                the production cycle. Manufacturers aim to enhance production
                efficiency, add value, and expand market presence by integrating
                service components into their production processes. Leveraging a
                cost-effective virtualized platform, manufacturing services are
                meticulously managed and optimized for performance.
              </p>
            </div>
            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Applications:{" "}
              </h6>
              <p>
                Additive Manufacturing: 3D printing technology enables on-demand
                production of complex parts and prototypes, reducing lead times
                and costs. Smart Factories: Connected devices and IoT sensors
                collect data from machines and processes, enabling real-time
                monitoring and decision making for optimized operations.
                Industry 5.0 Challenges And Solutions Workforce Readiness: As
                Industry 5.0 integrates advanced technologies, upskilling and
                reskilling programs are essential to address the skills gap
                among workers. Implement comprehensive upskilling and reskilling
                initiatives to equip the workforce with the necessary skills to
                operate and adapt to IT-driven systems. Augmented Reality (AR)
                and Virtual Reality (VR): AR and VR technologies enhance
                training programs and assist workers in complex assembly tasks,
                reducing errors and improving productivity.
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Industry 5.0 Challenges And Solutions{" "}
              </h6>
              <div className="d-flex">
                <p>
                  <span className="font-weight-bold">
                    {" "}
                    Workforce Readiness:
                  </span>{" "}
                  As Industry 5.0 integrates advanced technologies, upskilling
                  and reskilling programs are essential to address the skills
                  gap among workers. Implement comprehensive upskilling and
                  reskilling initiatives to equip the workforce with the
                  necessary skills to operate and adapt to IT-driven systems.
                  <br />
                  <span className="font-weight-bold">
                    {" "}
                    Cybersecurity Risks:
                  </span>{" "}
                  Interconnected manufacturing ecosystems become susceptible to
                  cyber threats, demanding robust security measures and
                  protocols to mitigate risks. Implement robust security
                  protocols to safeguard sensitive manufacturing data and
                  mitigate cybersecurity risks in interconnected manufacturing
                  environments.
                  <br />
                  <span className="font-weight-bold">
                    {" "}
                    Integration Complexities:
                  </span>{" "}
                  Incorporating industry 5.0 solutions into existing
                  manufacturing systems presents hurdles, particularly due to
                  legacy equipment's compatibility issues. Address integration
                  complexities by carefully planning and implementing IT
                  solutions, considering compatibility issues with legacy
                  equipment.
                </p>
                <img
                  src="/Images/gobeyond/SmartGig_Industrial 53.svg"
                  alt=""
                  className="pl-4"
                  style={{ objectFit: "cover", maxWidth: "35%" }}
                />
              </div>
              <p>
                <br />
                <span className="font-weight-bold">
                  {" "}
                  Ethical Considerations:
                </span>{" "}
                The use of AI and automation raises concerns regarding privacy,
                bias, and accountability, underscoring the need for establishing
                responsible usage guidelines. Develop and adhere to ethical
                guidelines for the responsible usage of AI and automation,
                ensuring privacy, fairness, and accountability in manufacturing
                processes. methods. <br />
                <span className="font-weight-bold">
                  {" "}
                  Infrastructure Limitations:
                </span>{" "}
                Inadequate digital infrastructure and connectivity impede the
                seamless adoption of Industry 5.0, posing challenges for
                manufacturers. Allocate resources to enhance digital
                infrastructure and connectivity, facilitating the seamless
                adoption of Industry 5.0 technologies in manufacturing
                operations.
                <br />
                <span className="font-weight-bold">
                  {" "}
                  Data Management Issues:
                </span>{" "}
                The vast amount of data generated in a digital manufacturing
                environment needs to be managed efficiently, including storage,
                processing, and ensuring data integrity. Implement robust data
                management systems and protocols to efficiently handle and
                secure manufacturing data, ensuring its integrity and
                accessibility for informed decision-making.
              </p>
            </div>

            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Cutting-edge Technologies Shaping the Landscape of Industry 5.0{" "}
              </h6>
              <div className="d-flex">
                <img
                  src="/Images/gobeyond/SmartGig_Industrial 577.svg"
                  alt=""
                  className="pt-2 pb-2 pr-4"
                  style={{ objectFit: "cover", maxWidth: "30%" }}
                />
                <p>
                  <span className="font-weight-bold"> Cobots:</span> A
                  collaborative robot (cobot) is an industrial robot engineered
                  to collaborate safely with humans. It utilizes sensitive
                  sensors to automate tasks by receiving and processing various
                  types of data. These sensors commonly used in manufacturing
                  include humidity, electric, heat, proximity, fluid velocity,
                  infrared, and others Artificial Intelligence: AI in
                  manufacturing aids in detecting production process
                  abnormalities, analyzing customer behavior, predicting demand,
                  automating analytics, and other functions. Numerous companies
                  have reaped benefits from AI implementation. For example, BMW
                  Group employs automated image recognition for inspections and
                  quality checks, while Porsche utilizes AI-driven Autonomous
                  Guided Vehicles (AGVs) to automate the movement of body parts
                  between stations in automotive manufacturing.
                </p>
              </div>
              <p>
                <span className="font-weight-bold"> IoT:</span> The Internet of
                Things serves as valuable technology for enhancing warehouse
                automation, optimizing product delivery routes, and streamlining
                inventory management processes to reduce time consumption.
                Augmented Reality: AR finds diverse applications in
                manufacturing, including equipment maintenance, spatial
                computing, production process design, assembly, and more.
                Technicians can utilize AR headsets to access information, such
                as a 3D model of an engine, guiding them to perform tasks
                accurately.
              </p>
            </div>
            <div className="p-3">
              <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
                Success Stories: Any Satisfactory Results?{" "}
              </h6>
              <div
                className="d-flex"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <p className="pr-3">
                  Volkswagen has deployed (cobots) to support its workforce. The
                  company saw a positive result in terms of putting less
                  physical strain on human workers and assigning robots to
                  handle repetitive and ergonomically challenging tasks.
                  <br />
                  Ford utilizes a cobot named Robbie that helps individuals with
                  disabilities or reduced mobility perform jobs in the
                  manufacturing sector. After an effective 18-month trial with
                  favourable outcomes, Ford has decided to permanently integrate
                  Robbie into its production department.
                </p>
                <img
                  src="/Images/gobeyond/SmartGig_Industrial 5661.svg"
                  alt=""
                  className="pt-2 pb-2 pr-4"
                  style={{ objectFit: "cover", maxWidth: "30%" }}
                />
              </div>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src="/Images/gobeyond/gg9.svg"
                alt=""
                className="pt-2 pb-2 pr-4"
                style={{ objectFit: "cover", maxWidth: "20%" }}
              />
              <p className="pr-3">
                Conclusion: In conclusion, Industry 5.0 holds the promise of
                revolutionizing manufacturing by harmonizing human intelligence
                with advanced technologies. By fostering collaboration between
                humans and machines, Industry 5.0 drives innovation, enhances
                productivity, and promotes sustainability. Embracing Industry
                5.0 principles empowers manufacturers to adapt to evolving
                market demands, drive innovation, and remain competitive in an
                increasingly digital and interconnected world.
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
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          Reshoring and Supply Chain Localization: Crafting Resilience in
          Manufacturing
        </h4>
        <div className="col-12">
          <div>
            <p>
              In the ever-evolving landscape of manufacturing, Industry 5.0
              emerges as a beacon of innovation, promising to revolutionize
              traditional production techniques. Built upon the foundation laid
              by Industry 4.0, Industry 5.0 embodies a human-centric approach,
              where advanced technologies like cobots, collaborate seamlessly
              with human intelligence to drive efficiency, customization, and
              sustainability. In this blog, let's delve into the benefits,
              challenges, and solutions associated with Industry 5.0, exploring
              its transformative potential in shaping the future of
              manufacturing
            </p>
            <img
              src="./Images/gobeyond/Frame 117127597022.svg"
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div>
            <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
              The Transition of Industry 4.0 To 5.0 In Manufacturing:
            </h6>
            <p>
              The journey of the Industrial Revolution commenced in the 18th
              Century, progressing through five distinct phases as advancements
              in technologies and methodologies unfolded through subsequent
              eras. The Transition of Industry 4.0 To 5.0 In Manufacturing:
              <br />
              <span className="font-weight-bold">Industry 1.0:</span> Originated
              around 1780, the inaugural phase of the Industrial Revolution
              marked a shift towards mechanized production powered by steam and
              water.
              <br />
              <span className="font-weight-bold">Industry 2.0:</span>{" "}
              Approximately a century later, around 1870, the second industrial
              revolution emerged, characterized by the widespread adoption of
              electrification and the introduction of assembly line-based mass
              production. Industry 3.0: Advancing another century to 1970,
              <br />
              <span className="font-weight-bold">Industry 3.0:</span> introduced
              automation through the integration of computers and electronics.
              This period also witnessed a phase known as Industry 3.5, which
              involved the globalization of production through offshoring to
              lower-cost regions.
            </p>
            <img
              src="./Images/gobeyond/SmartGig_Industrial 5.svg"
              className=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div>
            <p>
              <br />
              <span className="font-weight-bold">Industry 4.0:</span> Presently,
              we find ourselves amidst the fourth industrial revolution, which
              revolves around digitalization. Industry 4.0 encompasses
              automation, artificial intelligence (AI), interconnected devices,
              data analytics, cyber-physical systems, digital transformation,
              and other cutting-edge technologies.
              <br />
              <span className="font-weight-bold">Industry 5.0:</span> Now, as we
              transition into the fifth industrial revolution, the focus shifts
              towards the synergy between humans and machines. Centered on
              personalization and the utilization of collaborative robotics,
              this phase empowers workers to engage in value-added tasks for
              clientele. Unlike its predecessors, Industry 5.0 extends beyond
              manufacturing processes, incorporating elements of enhanced
              resilience, a human centric ethos, and an emphasis on
              sustainability, as elaborated upon in subsequent sections. 5.0
              revolves around three key ideas: Sustainability, Human
              centeredness, and Resilience, which influence how it operates and
              its goals. Let's break down these concepts:
            </p>
            <img
              src="./Images/gobeyond/SmartGig_Industrial 6.svg"
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>

          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Sustainability:{" "}
          </h6>
          <p>
            Previous industrial revolutions often overlooked the environmental
            impact of their operations. While some companies showed concern
            through Corporate Social Responsibility (CSR) programs, it didn't
            create significant change. In Industry 5.0, there's a stronger focus
            on sustainable business practices. This means companies need to
            rethink their strategies to prioritize sustainability. They should
            align with goals like the 17 Sustainable Development Goals and the
            Triple Bottom Line (TBL), which considers People, Planet, and
            Profit. Instead of just minimizing harm or 'greenwashing, ' true
            sustainability aims to make a positive impact. Companies should
            focus on improving the environment, not just reducing damage.
            Example: Companies like IKEA are using technologies like circular
            economy and additive technologies to make products personalized and
            eco-friendly. In fiscal year 2022, IKEA took the lead on an
            initiative to recycle discarded foam mattresses by using polyols
            found in the foam to create new mattresses. This initiative reduced
            the amount of waste going to landfills and supported the industry's
            efforts to develop foam solutions focused on recycled materials. The
            company have been lauded as leading advocates for climate action.
          </p>
          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Resilience:{" "}
          </h6>
          <p>
            The Covid-19 pandemic highlighted vulnerabilities in global supply
            chains, causing shortages. This emphasized the need for resilient
            supply chains. Industry 5.0 aims to create supply chains that can
            withstand crises. It's about being prepared for the unexpected.
            Manufacturers need to adapt processes to be more flexible and agile,
            ensuring stability during tough times. Example: Siemens Gas and
            Power division utilized digital twin technology to enhance the
            resilience of their manufacturing operations. By creating virtual
            replicas of their production facilities and equipment, they were
            able to simulate various scenarios and optimize processes in
            real-time. During the COVID-19 pandemic, when physical access to
            factories was limited, these digital twins enabled remote monitoring
            and control, ensuring continuity of operations while maintaining
            Human-Centric: safety protocols. This resilience allowed Siemens to
            adapt swiftly to disruptions and maintain productivity levels
            despite challenging circumstances.
          </p>
          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Human-Centric:{" "}
          </h6>
          <p>
            Another crucial aspect of Industry 5.0 is putting people first. It's
            about shifting from seeing employees as resources to valuing them as
            essential assets. In manufacturing, companies should choose
            technology that supports their workforce, not the other way around.
            They need to consider how technology can meet workers' needs and
            also promote well-being of workers. A human-centric approach means
            empowering workers and integrating technology that complements their
            skills. While robots can handle repetitive tasks efficiently, they
            can't replace human problem-solving abilities. Industry 5.0 is about
            combining human intuition with machine efficiency for better
            results. Example: Hyundai implemented the Exoskeleton (VEX) in their
            assembly lines, where workers often handle heavy components. By
            wearing the exoskeleton, workers experienced reduced strain on their
            backs and arms, leading to fewer instances of workplace injuries.
            This adoption of wearable robotics not only improved employee
            well-being but also enhanced productivity and efficiency in
            manufacturing processes, demonstrating the potential of such
            technologies in Industry 5.0.
          </p>

          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Benefits and Applications of Industrial 5.0:{" "}
          </h6>
          <img
            src="/Images/gobeyond/SmartGig_Industry 5 1.svg"
            alt=""
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
          <p>
            <br />
            <span className="font-weight-bold"> Benefits:</span> <br />
            <span className="font-weight-bold"> Improved Efficiency:</span>{" "}
            Industry 5.0 integrates human intelligence with advanced
            technologies, optimizing production processes for maximum
            efficiency. Enhanced Customization: With human-robot collaboration,
            manufacturers can offer greater product customization to meet
            diverse customer demands.
            <br />
            <span className="font-weight-bold">
              {" "}
              Increased Productivity:
            </span>{" "}
            Collaborative robots (cobots) assist workers in repetitive tasks,
            freeing up time for skilled labour to focus on highervalue
            activities.
            <br />
            <span className="font-weight-bold">
              {" "}
              Enhanced Quality Control:
            </span>{" "}
            Advanced sensors and AI technologies enable real-time monitoring and
            predictive maintenance, ensuring consistent product quality.
          </p>
          <p>
            <br />
            <span className="font-weight-bold">
              {" "}
              Sustainable Practices:{" "}
            </span>{" "}
            Industry 5.0 emphasizes sustainability, promoting resource
            optimization and waste reduction through smarter production methods.{" "}
            <br />
            <span className="font-weight-bold">
              {" "}
              Competitive Advantage:{" "}
            </span>{" "}
            Adopting Industry 5.0 technologies allows manufacturers to stay
            ahead of the curve, delivering innovative products and services to
            the market.
            <br />
            <span className="font-weight-bold">
              {" "}
              Optimizing Manufacturing Operations:{" "}
            </span>{" "}
            In the realm of manufacturing, Industry 5.0 offers opportunities for
            companies to strategically position production facilities in regions
            with lower manufacturing expenses and proximity to affordable raw
            materials. Cloud manufacturing takes charge of overseeing plant
            machinery and managing activities throughout the production cycle.
            Manufacturers aim to enhance production efficiency, add value, and
            expand market presence by integrating service components into their
            production processes. Leveraging a cost-effective virtualized
            platform, manufacturing services are meticulously managed and
            optimized for performance.
          </p>
          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Applications:{" "}
          </h6>
          <p>
            Additive Manufacturing: 3D printing technology enables on-demand
            production of complex parts and prototypes, reducing lead times and
            costs. Smart Factories: Connected devices and IoT sensors collect
            data from machines and processes, enabling real-time monitoring and
            decision making for optimized operations. Industry 5.0 Challenges
            And Solutions Workforce Readiness: As Industry 5.0 integrates
            advanced technologies, upskilling and reskilling programs are
            essential to address the skills gap among workers. Implement
            comprehensive upskilling and reskilling initiatives to equip the
            workforce with the necessary skills to operate and adapt to
            IT-driven systems. Augmented Reality (AR) and Virtual Reality (VR):
            AR and VR technologies enhance training programs and assist workers
            in complex assembly tasks, reducing errors and improving
            productivity.
          </p>

          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Industry 5.0 Challenges And Solutions{" "}
          </h6>
          <p>
            <span className="font-weight-bold"> Workforce Readiness:</span> As
            Industry 5.0 integrates advanced technologies, upskilling and
            reskilling programs are essential to address the skills gap among
            workers. Implement comprehensive upskilling and reskilling
            initiatives to equip the workforce with the necessary skills to
            operate and adapt to IT-driven systems.
            <br />
            <span className="font-weight-bold"> Cybersecurity Risks:</span>{" "}
            Interconnected manufacturing ecosystems become susceptible to cyber
            threats, demanding robust security measures and protocols to
            mitigate risks. Implement robust security protocols to safeguard
            sensitive manufacturing data and mitigate cybersecurity risks in
            interconnected manufacturing environments.
            <br />
            <span className="font-weight-bold">
              {" "}
              Integration Complexities:
            </span>{" "}
            Incorporating industry 5.0 solutions into existing manufacturing
            systems presents hurdles, particularly due to legacy equipment's
            compatibility issues. Address integration complexities by carefully
            planning and implementing IT solutions, considering compatibility
            issues with legacy equipment.
          </p>
          <img
            src="/Images/gobeyond/SmartGig_Industrial 53.svg"
            alt=""
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
          <p>
            <br />
            <span className="font-weight-bold">
              {" "}
              Ethical Considerations:
            </span>{" "}
            The use of AI and automation raises concerns regarding privacy,
            bias, and accountability, underscoring the need for establishing
            responsible usage guidelines. Develop and adhere to ethical
            guidelines for the responsible usage of AI and automation, ensuring
            privacy, fairness, and accountability in manufacturing processes.
            methods. <br />
            <span className="font-weight-bold">
              {" "}
              Infrastructure Limitations:
            </span>{" "}
            Inadequate digital infrastructure and connectivity impede the
            seamless adoption of Industry 5.0, posing challenges for
            manufacturers. Allocate resources to enhance digital infrastructure
            and connectivity, facilitating the seamless adoption of Industry 5.0
            technologies in manufacturing operations.
            <br />
            <span className="font-weight-bold">
              {" "}
              Data Management Issues:
            </span>{" "}
            The vast amount of data generated in a digital manufacturing
            environment needs to be managed efficiently, including storage,
            processing, and ensuring data integrity. Implement robust data
            management systems and protocols to efficiently handle and secure
            manufacturing data, ensuring its integrity and accessibility for
            informed decision-making.
          </p>

          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Cutting-edge Technologies Shaping the Landscape of Industry 5.0{" "}
          </h6>
          <img
            src="/Images/gobeyond/SmartGig_Industrial 577.svg"
            alt=""
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
          <p>
            <span className="font-weight-bold"> Cobots:</span> A collaborative
            robot (cobot) is an industrial robot engineered to collaborate
            safely with humans. It utilizes sensitive sensors to automate tasks
            by receiving and processing various types of data. These sensors
            commonly used in manufacturing include humidity, electric, heat,
            proximity, fluid velocity, infrared, and others Artificial
            Intelligence: AI in manufacturing aids in detecting production
            process abnormalities, analyzing customer behavior, predicting
            demand, automating analytics, and other functions. Numerous
            companies have reaped benefits from AI implementation. For example,
            BMW Group employs automated image recognition for inspections and
            quality checks, while Porsche utilizes AI-driven Autonomous Guided
            Vehicles (AGVs) to automate the movement of body parts between
            stations in automotive manufacturing.
          </p>
          <p>
            <span className="font-weight-bold"> IoT:</span> The Internet of
            Things serves as valuable technology for enhancing warehouse
            automation, optimizing product delivery routes, and streamlining
            inventory management processes to reduce time consumption. Augmented
            Reality: AR finds diverse applications in manufacturing, including
            equipment maintenance, spatial computing, production process design,
            assembly, and more. Technicians can utilize AR headsets to access
            information, such as a 3D model of an engine, guiding them to
            perform tasks accurately.
          </p>
          <h6 className="font-weight-bold" style={{ color: "#F38313" }}>
            Success Stories: Any Satisfactory Results?{" "}
          </h6>
          <div>
            <p>
              Volkswagen has deployed (cobots) to support its workforce. The
              company saw a positive result in terms of putting less physical
              strain on human workers and assigning robots to handle repetitive
              and ergonomically challenging tasks.
              <br />
              Ford utilizes a cobot named Robbie that helps individuals with
              disabilities or reduced mobility perform jobs in the manufacturing
              sector. After an effective 18-month trial with favourable
              outcomes, Ford has decided to permanently integrate Robbie into
              its production department.
            </p>
            <img
              src="/Images/gobeyond/SmartGig_Industrial 5661.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
          </div>
          <div>
            <p>
              Conclusion: In conclusion, Industry 5.0 holds the promise of
              revolutionizing manufacturing by harmonizing human intelligence
              with advanced technologies. By fostering collaboration between
              humans and machines, Industry 5.0 drives innovation, enhances
              productivity, and promotes sustainability. Embracing Industry 5.0
              principles empowers manufacturers to adapt to evolving market
              demands, drive innovation, and remain competitive in an
              increasingly digital and interconnected world.
            </p>
            <img
              src="/Images/gobeyond/gg9.svg"
              alt=""
              style={{ objectFit: "cover", maxWidth: "100%" }}
            />
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
          Copyright © 2023 SmartGig Technology Private Limited. All Rights
          Reserved.
        </div>
      </div>
    </>
  );
}
