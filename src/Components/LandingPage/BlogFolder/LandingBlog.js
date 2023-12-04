import React from "react";
import Footer from "../Footer";
import BlogManuFactoring from "./BlogManuFactoring";
import BlogPharma from "./BlogPharma";
import BlogReatil from "./BlogReatil";
import { useLocation } from "react-router-dom";

export default function BlogPage() {
  const location = useLocation();
  console.log(location, "location");

  const [ManuFactoringFlag, setManuFactoringFlag] = React.useState(
    location.state?.ManuFactoringFlag
      ? location.state?.ManuFactoringFlag
      : false
  );
  const [PharmaFlag, setPharmaFlag] = React.useState(
    location.state?.PharmaFlag ? location.state?.PharmaFlag : false
  );
  const [RetailFlag, setRetailFlag] = React.useState(
    location.state?.RetailFlag ? location.state?.RetailFlag : false
  );
  const [addClass, setAddClass] = React.useState(location.state?.active ? location.state?.active : "");
  const [addClass2, setAddClass2] = React.useState(location.state?.activePharma ? location.state?.activePharma : "");
  const [addClass3, setAddClass3] = React.useState(location.state?.activeRetail ? location.state?.activeRetail : "");

  const ManuFactoring = () => {
    setPharmaFlag(false);
    setRetailFlag(false);
    setManuFactoringFlag(true);
    setAddClass("active");
    setAddClass2("");
    setAddClass3("");
  };

  const Pharma = () => {
    setRetailFlag(false);
    setManuFactoringFlag(false);
    setPharmaFlag(true);
    setAddClass2("active");
    setAddClass("");
    setAddClass3("");
  };

  const Retail = () => {
    setPharmaFlag(false);
    setManuFactoringFlag(false);
    setRetailFlag(true);
    setAddClass("");
    setAddClass2("");
    setAddClass3("active");
  };

  React.useEffect(() => {
    window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
  }, [ManuFactoringFlag, PharmaFlag, RetailFlag]);

  return (
    <>
      <div className="BlogHeadnigs">
        <h1>Blogs</h1>
      </div>
      <div className="BlogpageLogo">
        <img src="./Images/gobeyond/Group 427321877.svg" />
      </div>
      <div
        className="mt-4 mb-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: "3%",
          padding: "3%",
          cursor: "pointer",
        }}
      >
        <div className="BlogCard" onClick={ManuFactoring}>
          <img
            className={`ManuFactoringCard${addClass}`}
            src="./Images/gobeyond/Group 427322028.svg"
          />
        </div>

        <div className="BlogCard" onClick={Pharma}>
          <img
            className={`ManuFactoringCard${addClass2}`}
            src="./Images/gobeyond/Group 427322006.svg"
          />
        </div>

        <div className="BlogCard" onClick={Retail}>
          <img
            className={`ManuFactoringCard${addClass3}`}
            src="./Images/gobeyond/Group 427322026.svg"
          />
        </div>
      </div>

      <div>
        {ManuFactoringFlag ? <BlogManuFactoring /> : ""}
        {PharmaFlag ? <BlogPharma /> : ""}
        {RetailFlag ? <BlogReatil /> : ""}
      </div>
    </>
  );
}

// import React from "react";
// import Footer from "./Footer";
// import BlogManuFactoring from "./BlogManuFactoring";
// import BlogPharma from "./BlogPharma";
// import BlogReatil from "./BlogReatil";

// export default function BlogPage() {
//   const [ManuFactoringFlag, setManuFactoringFlag] = React.useState(false);
//   const [PharmaFlag, setPharmaFlag] = React.useState(false);
//   const [RetailFlag, setRetailFlag] = React.useState(false);

//   const ManuFactoring = () => {
//     setPharmaFlag(false);
//     setRetailFlag(false);
//     setManuFactoringFlag(true);
//   };

//   const Pharma = () => {
//     setRetailFlag(false);
//     setManuFactoringFlag(false);
//     setPharmaFlag(true);
//   };

//   const Retail = () => {
//     setPharmaFlag(false);
//     setManuFactoringFlag(false);
//     setRetailFlag(true);
//   };

//   React.useEffect(() => {
//     window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
//   }, [ManuFactoringFlag, PharmaFlag, RetailFlag]);

//   return (
//     <>
//       <div className="BlogPageWeb">
//         <div className="BlogHeadnigs">
//           <h1>Blogs</h1>
//         </div>
//         <div className="BlogpageLogo">
//           <img src="./Images/gobeyond/Group 427321877.svg" />
//         </div>
//         <div
//           className="mt-4 mb-5"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//             gap: "3%",
//             padding: "3%",
//           }}
//         >
//           <div className="BlogCard" onClick={ManuFactoring}>
//             <img src="./Images/gobeyond/Group 427321948.svg" />
//           </div>

//           <div className="BlogCard" onClick={Pharma}>
//             <img src="./Images/gobeyond/Group 427321949.svg" />
//           </div>

//           <div className="BlogCard" onClick={Retail}>
//             <img src="./Images/gobeyond/Group 427321950.svg" />
//           </div>
//         </div>

//         <div>
//           {ManuFactoringFlag ? <BlogManuFactoring /> : ""}
//           {PharmaFlag ? <BlogPharma /> : ""}
//           {RetailFlag ? <BlogReatil /> : ""}
//         </div>
//       </div>

//       {/* mobile screen ----------------------------------------------------------------*/}

//       <div className="BlogPageMobile">
//         <div className="BlogHeadnigs">
//           <h1>Blogs</h1>
//         </div>
//         <div className="BlogpageLogo">
//           <img src="./Images/gobeyond/Group 427321877.svg" />
//         </div>
//         <div className="mt-4 mb-5">
//           <div className="BlogCard p-2" onClick={ManuFactoring}>
//             <img src="./Images/gobeyond/Group 427321948.svg" />
//           </div>

//           <div className="BlogCard p-2" onClick={Pharma}>
//             <img src="./Images/gobeyond/Group 427321949.svg" />
//           </div>

//           <div className="BlogCard p-2" onClick={Retail}>
//             <img src="./Images/gobeyond/Group 427321950.svg" />
//           </div>
//         </div>

//         <div>
//           {ManuFactoringFlag ? <BlogManuFactoring /> : ""}
//           {PharmaFlag ? <BlogPharma /> : ""}
//           {RetailFlag ? <BlogReatil /> : ""}
//         </div>
//       </div>
//     </>
//   );
// }
