import React from "react";
import Footer from "./Footer";
import BlogManuFactoring from "./BlogManuFactoring";
import BlogPharma from "./BlogPharma";
import BlogReatil from "./BlogReatil";

export default function BlogPage() {

  const [ManuFactoringFlag, setManuFactoringFlag] = React.useState(false);
  const [PharmaFlag, setPharmaFlag] = React.useState(false);
  const [RetailFlag, setRetailFlag] = React.useState(false);

  const ManuFactoring = () => {
    setPharmaFlag(false);
    setRetailFlag(false);
    setManuFactoringFlag(true);
  };

  const Pharma = () => {
    setRetailFlag(false);
    setManuFactoringFlag(false);
    setPharmaFlag(true);
  };

  const Retail = () => {
    setPharmaFlag(false);
    setManuFactoringFlag(false);
    setRetailFlag(true);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
  }, [ManuFactoringFlag,PharmaFlag,RetailFlag]);

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
          gap:"3%",
          padding:"3%",
        }}
      >
        <div className="BlogCard" onClick={ManuFactoring}>
          <img src="./Images/gobeyond/Group 427321948.svg" />
        </div>

        <div className="BlogCard" onClick={Pharma}>
          <img src="./Images/gobeyond/Group 427321949.svg" />
        </div>

        <div className="BlogCard" onClick={Retail}>
          <img src="./Images/gobeyond/Group 427321950.svg" />
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
