import React from "react";
import Footer from "../LandingPage/Footer";

export default function TermsPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="opHeadnigs">
        <h1>Terms of Services</h1>
      </div>

      <div className="container my-4">
        <p>
          <b style={{ color: "#F38211" }}>
            Welcome to SmartGig Technology Private Limited!
          </b>{" "}
          These Terms of Service govern your access to and use of the SmartGig
          Technologies Pvt Ltd website and its services, including but not
          limited to browsing, purchasing subscriptions, and accessing content
          (collectively referred to as the "Services"). Please read these Terms
          carefully before using the Site or Services.
        </p>

        <h5 style={{ color: "#F38211" }}>Acceptance of Terms: </h5>
        <ul>
          <li>
            By accessing or using the Site or Services, you agree to be bound by
            these Terms and our Privacy Policy.{" "}
          </li>
          <li>
            If you do not agree to these Terms, you may not access or use the
            Site or Services.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Use of Services: </h5>
        <ul>
          <li>
            You agree to use the Site and Services only for lawful purposes and
            in compliance with these Terms.
          </li>
          <li>
            You may not use the Site or Services in any manner that violates any
            applicable laws or regulations.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Account Registration: </h5>
        <ul>
          <li>
            In order to access certain features of the Site or Services, you may
            be required to create an account.
          </li>
          <li>
            You agree to provide accurate and complete information during the
            registration process and to keep your account information up to
            date.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Payment and Subscription: </h5>
        <ul>
          <li>
            Payment for subscriptions and services offered on the Site is
            subject to our payment terms and conditions.{" "}
          </li>
          <li>
            By purchasing a subscription, you agree to pay the applicable fees
            and charges.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Intellectual Property: </h5>
        <ul>
          <li>
            All content and materials available on the Site, including but not
            limited to text, graphics, logos, images, and software, are the
            property of SmartGig Technology Private Limited or its licensors and
            are protected by copyright, trademark, and other intellectual
            property laws.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Privacy: </h5>
        <ul>
          <li>
            Our Privacy Policy governs the collection, use, and disclosure of
            your personal information.{" "}
          </li>
          <li>
            By using the Site or Services, you consent to the collection, use,
            and disclosure of your personal information as described in our
            Privacy Policy.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Disclaimer of Warranties: </h5>
        <ul>
          <li>
            The Site and Services are provided on an "as is" and "as available"
            basis, without any warranties of any kind, either express or
            implied.
          </li>
          <li>
            SmartGig Technology Private Limited disclaims all warranties,
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Limitation of Liability: </h5>
        <ul>
          <li>
            To the fullest extent permitted by law, SmartGig Technologies Pvt
            Ltd shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your
            use of the Site or Services, whether based on warranty, contract,
            tort (including negligence), or any other legal theory.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Governing Law: </h5>
        <ul>
          <li>
            These Terms shall be governed by and construed in accordance with
            the laws of [insert governing jurisdiction].{" "}
          </li>
          <li>
            Any disputes arising out of or relating to these Terms shall be
            subject to the exclusive jurisdiction of the courts located in
            [insert jurisdiction].
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Modifications to Terms: </h5>
        <ul>
          <li>
            {" "}
            SmartGig Technology Private Limited reserves the right to modify or
            update these Terms at any time without prior notice.
          </li>
          <li>
            Changes to these Terms will be effective upon posting on the Site.{" "}
          </li>
          <li>
            Your continued use of the Site or Services after the posting of any
            modified Terms constitutes your acceptance of the modified Terms.
          </li>
        </ul>

        <h5 style={{ color: "#F38211" }}>Contact Us: </h5>

        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at{" "}
          <a href="mailto:info@smartgig.tech">info@smartgig.tech</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
