import React from "react";
import Footer from "../LandingPage/Footer";

export default function RefundPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="opHeadnigs">
        <h1>Cancellation & Refund</h1>
      </div>
      <div className="content container my-4">
        <p >
          At <b style={{ color: "#F38211" }}>SmartGig</b>, we strive to provide
          our users with a seamless and satisfactory experience. We understand
          that circumstances may change, and users may need to cancel their
          subscriptions or service requests. To ensure transparency and clarity,
          we have established the following cancellation and refund policy:
        </p>
        <h5 style={{ color: "#F38211" }}>Cancellation: </h5>
        <ul >
          <li>
            Users can cancel their subscription or service request at any time
            by contacting our customer support team.{" "}
          </li>
          <li>
            Cancellations made within 30 days of subscription activation or
            service request will be eligible for a full refund.{" "}
          </li>
          <li>
            No cancellations will be accepted after 30 days from the date of
            subscription activation or service request.
          </li>
        </ul>
        <h5 style={{ color: "#F38211" }}>Refund: </h5>
        <ul >
          <li>
            Refunds will be processed within 15 business days of cancellation
            and will be issued to the original payment method used for the
            transaction.{" "}
          </li>
          <li>
            Refunds will only be provided for the unused portion of the
            subscription or service request.{" "}
          </li>
          <li>
            No refunds will be provided for subscriptions or service requests
            that have been active for more than 30 days.
          </li>
        </ul>
        <h5 style={{ color: "#F38211" }}>Exceptions:</h5>
        <p >
          Refunds will be processed within 15 business days of your cancellation
          request and credited to the original payment method used for the
          purchase.
        </p>
        <h5 style={{ color: "#F38211" }}>Processing Time:</h5>
        <p >
          In case of any exceptional circumstances or issues with the service,
          users are encouraged to reach out to our customer support team for
          assistance. We will review each case on an individual basis and strive
          to find a satisfactory resolution.
        </p>
        <h5 style={{ color: "#F38211" }}> Termination for Cause:</h5>
        <p >
          We reserve the right to terminate your subscription and access to
          SmartGig for cause, such as violation of our terms of service. In such
          cases, a prorated refund may be issued based on the remaining unused
          portion of your subscription.
        </p>
        <h5 style={{ color: "#F38211" }}>Changes to this Policy:</h5>
        <p >
          IWe reserve the right to modify this cancellation and refund policy at
          any time. The revised policy will be effective immediately upon
          posting on our website.
        </p>
        <h5 style={{ color: "#F38211" }}>7. Contact Us:</h5>
        <p >
          If you have any questions regarding our cancellation and refund
          policy, please contact us at:
        </p>
        Email: <a href="mailto:info@smartgig.tech">info@smartgig.tech</a>
        <p>
          By subscribing to SmartGig, you acknowledge that you have read,
          understood, and agree to the terms of this Cancellation and Refund
          Policy.
        </p>
      </div>
      <Footer />
    </>
  );
}
