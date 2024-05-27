import React from "react";
import Footer from "../LandingPage/Footer";

export default function PrivacyPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="opHeadnigs">
        <h1>Privacy Policy</h1>
      </div>
      <div className="content container my-4">
        <p >
          This Privacy Policy outlines how we collect, use, disclose, and
          safeguard your personal information when you visit our website,
          internal tools or interact with our services. We respect your privacy
          and are committed to protecting your personal data.
        </p>

        <h5 style={{ color: "#F38211" }}>Information We Collect: </h5>

        <ul >
          <li>
            We may collect personal information such as your name, email
            address, phone number, and other relevant details when you
            voluntarily provide them to us.{" "}
          </li>
          <li>
            We may also automatically collect certain information about your
            device, including your IP address, browser type, and operating
            system, for analytical purposes.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>How We Use Your Information: </h5>

        <ul >
          <li>
            We use the information we collect to provide and improve our
            services, respond to inquiries, and personalize your experience.{" "}
          </li>
          <li>
            We may use your contact information to send you relevant updates,
            newsletters, or promotional materials.{" "}
          </li>
          <li>
            We may analyse usage data to enhance the functionality and
            performance of our website, internal tools and services.{" "}
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>
          Information Sharing and Disclosure:{" "}
        </h5>
        <ul >
          <li>
            We do not sell, trade, or rent your personal information to third
            parties without your consent.{" "}
          </li>
          <li>
            We may disclose your information to comply with legal obligations or
            respond to lawful requests from governmental authorities.
          </li>
          <li>
            We may share your information with trusted service providers who
            assist us in operating our website or providing our services,
            subject to strict confidentiality obligations.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Data Security: </h5>

        <ul >
          <li>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.{" "}
          </li>
          <li>
            However, please note that no method of transmission over the
            internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Your Choices and Rights: </h5>

        <ul >
          <li>
            You have the right to access, update, or delete your personal
            information at any time. Please contact us if you wish to exercise
            these rights.{" "}
          </li>
          <li>
            You may opt-out of receiving promotional communications from us by
            following the unsubscribe instructions provided in our emails.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}> Changes to This Privacy Policy: </h5>

        <ul >
          <li>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            revised policy on our website.{" "}
          </li>
          <li>
            We encourage you to review this Privacy Policy periodically for any
            updates.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Contact Us: </h5>

        <p >
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at{" "}
          <a href="mailto:info@smartgig.tech">info@smartgig.tech</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
