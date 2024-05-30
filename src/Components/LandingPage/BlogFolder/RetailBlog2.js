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

export default function RetailBlog2() {
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

  const handleRetail = () => {
    navigate("/blogs", {
      state: { RetailFlag: true, activeRetail: "active" },
    });
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="white" onClick={handleBlog}>
      Blogs
    </Link>,
    <Link underline="hover" key="2" color="white" onClick={handleRetail}>
      Retail
    </Link>,
    <Typography key="3" color="white">
      Cyber Security in Retail{" "}
    </Typography>,
  ];

  return (
    <>
      <div className="RetailBlogHeadnigs2">
        <h1>Retail</h1>
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
            src="./Images/gobeyond/Retail-Blog.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          Cyber Security in the Age of Cardless Transactions 
        </h4>
        <div className="col-12">
          <div className="pl-5 pr-5 pt-3">
            <div className="d-flex justify-content-center align-items-center">
              <div className="w-50">
                <p>
                  In the digital era, especially after the pandemic, cashless
                  transactions became a part of our daily lives. The convenience
                  of making payments without the need for physical cash or cards
                  is undeniable. With the rise of mobile wallets, contactless
                  payment methods, and online banking, our financial
                  interactions have been streamlined. However, as technology
                  advances, so do the tactics of cyber criminals. In this blog,
                  we'll delve into the world of cyber security in the age of
                  cardless transactions and explore how you can protect yourself
                  from potential threats.
                </p>
              </div>
              <div className="w-50">
                <img
                  className="retailimg100per"
                  src="./Images/gobeyond/cyber 1.svg"
                />
              </div>
            </div>
            <div
              className="pt-5"
              style={{ fontStyle: "italic", color: "#F38313" }}
            >
              <h4>"The Cardless Transaction Revolution"</h4>
            </div>
            <p>
              The landscape of financial transactions is undergoing a
              revolutionary transformation with the advent of cardless
              transactions. A technology like cardless transactions that no one
              would have thought about a decade ago has become super common.
              These transactions, encompassing mobile payment apps and Near
              Field Communication (NFC) technology, are reshaping the way
              individuals manage their finances. By eliminating the necessity
              for physical cards, this revolution brings forth unprecedented
              convenience. However, along with this convenience, new security
              challenges emerge. Mobile payment apps and NFC technology are at
              the forefront of the cardless transaction revolution. Mobile
              wallets, such as Apple Pay, Google Pay, and Samsung Pay, exemplify
              this shift by storing credit card information on smartphones. This
              not only streamlines the payment process but also introduces a
              crucial dependence on the security of our mobile devices. As we
              jump in this technically advanced era, it becomes essential to
              strike a balance between the ease of cardless transactions and the
              robust security measures required to safeguard our financial data
              from evolving cyber threats.
            </p>

            <h6 className="pt-4">The Digital Wallets</h6>
            <p>
              Digital wallets have become increasingly popular for their
              seamless and efficient payment experiences. Apple Pay, Google Pay,
              and Samsung Pay, among others, allow users to make payments with a
              simple tap using stored credit card information. However, the
              convenience of digital wallets comes with a heightened focus on
              the security of the devices housing them. To ensure the safety of
              digital wallets, users should implement strong, unique passcodes
              or leverage biometric authentication methods like fingerprint or
              facial recognition. Additionally, enabling remote wipe features
              adds an extra layer of protection, allowing users to safeguard
              their data in case of device loss or theft. As the usage of
              digital wallets continues to rise, understanding and implementing
              these security measures become paramount in safeguarding personal
              financial information.
            </p>

            <div className="d-flex justify-content-center align-items-center pt-3">
              <div className="w-25">
                <img
                  className="retailimg100per"
                  src="./Images/gobeyond/10 (1) 2.svg"
                />
              </div>
              <div className="w-75 p-5">
                <h5>Contactless Payments</h5>
                <p>
                  Contactless payment cards have become commonplace, allowing
                  you to make transactions by just tapping your card on a
                  reader. As per Precedence Research, “The global contactless
                  payment market was valued at USD 29.89 billion in 2022 and is
                  expected to reach over USD 132.42 billion by 2032, projected
                  to register a CAGR of around 16.1% from 2023 to 2032.” Despite
                  the speed and efficiency of contactless payments, users must
                  remain vigilant against potential risks. Protective
                  RFID-blocking wallets or cardholders serve as effective
                  countermeasures, preventing cybercriminals from skimming card
                  information without the cardholder's knowledge. As contactless
                  payments become increasingly prevalent, understanding and
                  mitigating associated risks become integral to ensuring a
                  secure financial landscape.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h6>Online Banking and Cyber Threats </h6>
              <p>
                While traditional online banking has evolved to incorporate
                enhanced security measures, it remains a prime target for cyber
                threats. Phishing scams, malware attacks, and social engineering
                tactics persist as prevalent threats to online financial
                accounts. To fortify online bank accounts, users should embrace
                two-factor authentication, a proven method for enhancing
                security. Vigilance in verifying the authenticity of
                communications from banks and refraining from interacting with
                suspicious links or downloads further bolsters online banking
                security. In the ongoing battle against cyber threats, staying
                informed and implementing proactive measures are essential to
                safeguarding financial assets in the digital realm.
              </p>
            </div>

            <div className="pt-3">
              <h6>Tips for Safe Cardless Transactions</h6>
              <p>
                As we navigate the realm of cardless transactions in the digital
                age, ensuring the safety of our financial information is
                paramount. Here are essential tips to enhance the security of
                cardless transactions, incorporating a mix of paragraphs and
                bullet points:
              </p>
            </div>

            <div>
              <h6>Keep Your Devices Updated: </h6>
              <li>
                Regularly update your smartphones, tablets, and any devices used
                for cardless transactions to ensure they have the latest
                security patches. Operating systems and applications frequently
                release updates that address vulnerabilities, making it crucial
                to stay current.
              </li>

              <h6>Monitor Financial Statements: </h6>
              <li>
                Regularly scrutinize your financial statements for any
                unauthorized transactions or suspicious activities. Set up
                alerts with your bank to receive real-time notifications for
                transactions above a certain threshold, enhancing your ability
                to detect and address potential fraud promptly.
              </li>

              <h6>Strong and Unique Passwords: </h6>
              <li>
                Use robust, unique passwords for your digital wallets and online
                banking accounts. Incorporate a combination of letters, numbers,
                and special characters to create a strong password that is less
                susceptible to hacking.
              </li>

              <h6>Exercise Caution with Personal Information: </h6>
              <li>
                Be cautious about sharing personal information and account
                details, even if someone claims to be from your bank. Avoid
                responding to unsolicited emails or messages requesting
                sensitive information, as these could be phishing attempts.
              </li>

              <h6>Enable Security Features: </h6>
              <li>
                Utilize biometric authentication (fingerprint or facial
                recognition) and two-factor authentication wherever possible to
                add layers of security. Enable device-specific security
                features, such as remote wipe, to protect your data in case your
                device is lost or stolen.
              </li>
            </div>

            <div className="d-flex justify-content-center align-items-center pt-4 pb-5">
              <div>
                <h6>VPN for Public Wi-Fi Transactions: </h6>
                <li>
                  Consider using a Virtual Private Network (VPN) when making
                  transactions over public Wi-Fi networks.
                </li>
                <li>
                  VPNs encrypt your data, reducing the risk of unauthorized
                  access or interception of sensitive information while using
                  public networks.
                </li>
                <p className="pt-4">
                  In the rapidly evolving landscape of digital finance, these
                  tips serve as a proactive defense against potential threats.
                  By incorporating these practices into your routine, you can
                  enjoy the benefits of cardless transactions while minimizing
                  the risks associated with cyber threats.
                </p>
              </div>
              <div className="pr-4">
                <img
                  className="retailimg100per"
                  src="./Images/gobeyond/11 (1) 1.svg"
                />
              </div>
            </div>

            <div className="pb-4">
              <p>
                <span style={{ fontWeight: "bold" }}>Conclusion: </span>
                Cardless transactions offer convenience and efficiency in our
                fast-paced world, but they also come with the responsibility of
                safeguarding our financial information. The age of cardless
                transactions demands heightened awareness of cyber security. All
                you have to do is take necessary precautions and stay informed
                about the latest threats, you can enjoy the benefits of digital
                finance while keeping your hard-earned money safe from
                cybercriminals. In this digital age, knowledge and vigilance are
                your best allies in the world of cardless transactions. Stay
                secure, stay informed, and embrace the future of finance with
                confidence.
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
            src="./Images/gobeyond/Retail-Blog.svg"
            style={{
              height: "52px",
              width: "245px",
            }}
          />
        </div>
        <h4 className="text-center mt-3" style={{ fontWeight: "bold" }}>
          Cyber Security in the Age of Cardless Transactions 
        </h4>
        <div className="col-12">
          <div>
            <p>
              In the digital era, especially after the pandemic, cashless
              transactions became a part of our daily lives. The convenience of
              making payments without the need for physical cash or cards is
              undeniable. With the rise of mobile wallets, contactless payment
              methods, and online banking, our financial interactions have been
              streamlined. However, as technology advances, so do the tactics of
              cyber criminals. In this blog, we'll delve into the world of cyber
              security in the age of cardless transactions and explore how you
              can protect yourself from potential threats.
            </p>
          </div>
          <div>
            <img
              //   className="retailimg60per"
              src="./Images/gobeyond/cyber 1 (1).svg"
            />
            <div
              className="pt-5"
              style={{ fontStyle: "italic", color: "#F38313" }}
            >
              <h4>"The Cardless Transaction Revolution"</h4>
            </div>
            <p>
              The landscape of financial transactions is undergoing a
              revolutionary transformation with the advent of cardless
              transactions. A technology like cardless transactions that no one
              would have thought about a decade ago has become super common.
              These transactions, encompassing mobile payment apps and Near
              Field Communication (NFC) technology, are reshaping the way
              individuals manage their finances. By eliminating the necessity
              for physical cards, this revolution brings forth unprecedented
              convenience. However, along with this convenience, new security
              challenges emerge. Mobile payment apps and NFC technology are at
              the forefront of the cardless transaction revolution. Mobile
              wallets, such as Apple Pay, Google Pay, and Samsung Pay, exemplify
              this shift by storing credit card information on smartphones. This
              not only streamlines the payment process but also introduces a
              crucial dependence on the security of our mobile devices. As we
              jump in this technically advanced era, it becomes essential to
              strike a balance between the ease of cardless transactions and the
              robust security measures required to safeguard our financial data
              from evolving cyber threats.
            </p>

            <h6 className="pt-4">The Digital Wallets</h6>
            <p>
              Digital wallets have become increasingly popular for their
              seamless and efficient payment experiences. Apple Pay, Google Pay,
              and Samsung Pay, among others, allow users to make payments with a
              simple tap using stored credit card information. However, the
              convenience of digital wallets comes with a heightened focus on
              the security of the devices housing them. To ensure the safety of
              digital wallets, users should implement strong, unique passcodes
              or leverage biometric authentication methods like fingerprint or
              facial recognition. Additionally, enabling remote wipe features
              adds an extra layer of protection, allowing users to safeguard
              their data in case of device loss or theft. As the usage of
              digital wallets continues to rise, understanding and implementing
              these security measures become paramount in safeguarding personal
              financial information.
            </p>

            <div>
              <img
                className="retailimg100per"
                src="./Images/gobeyond/10 (1) 2 (1).svg"
              />
            </div>
            <div className="pt-5">
              <h5>Contactless Payments</h5>
              <p>
                Contactless payment cards have become commonplace, allowing you
                to make transactions by just tapping your card on a reader. As
                per Precedence Research, “The global contactless payment market
                was valued at USD 29.89 billion in 2022 and is expected to reach
                over USD 132.42 billion by 2032, projected to register a CAGR of
                around 16.1% from 2023 to 2032.” Despite the speed and
                efficiency of contactless payments, users must remain vigilant
                against potential risks. Protective RFID-blocking wallets or
                cardholders serve as effective countermeasures, preventing
                cybercriminals from skimming card information without the
                cardholder's knowledge. As contactless payments become
                increasingly prevalent, understanding and mitigating associated
                risks become integral to ensuring a secure financial landscape.
              </p>
            </div>

            <div className="pt-4">
              <h6>Online Banking and Cyber Threats </h6>
              <p>
                While traditional online banking has evolved to incorporate
                enhanced security measures, it remains a prime target for cyber
                threats. Phishing scams, malware attacks, and social engineering
                tactics persist as prevalent threats to online financial
                accounts. To fortify online bank accounts, users should embrace
                two-factor authentication, a proven method for enhancing
                security. Vigilance in verifying the authenticity of
                communications from banks and refraining from interacting with
                suspicious links or downloads further bolsters online banking
                security. In the ongoing battle against cyber threats, staying
                informed and implementing proactive measures are essential to
                safeguarding financial assets in the digital realm.
              </p>
            </div>

            <div className="pt-4">
              <h6>Tips for Safe Cardless Transactions</h6>
              <p>
                As we navigate the realm of cardless transactions in the digital
                age, ensuring the safety of our financial information is
                paramount. Here are essential tips to enhance the security of
                cardless transactions, incorporating a mix of paragraphs and
                bullet points:
              </p>
            </div>

            <div className="pt-4">
              <h6>Keep Your Devices Updated: </h6>
              <li className="mb-3">
                Regularly update your smartphones, tablets, and any devices used
                for cardless transactions to ensure they have the latest
                security patches. Operating systems and applications frequently
                release updates that address vulnerabilities, making it crucial
                to stay current.
              </li>

              <h6>Monitor Financial Statements: </h6>
              <li className="mb-3">
                Regularly scrutinize your financial statements for any
                unauthorized transactions or suspicious activities. Set up
                alerts with your bank to receive real-time notifications for
                transactions above a certain threshold, enhancing your ability
                to detect and address potential fraud promptly.
              </li>

              <h6>Strong and Unique Passwords: </h6>
              <li className="mb-3">
                Use robust, unique passwords for your digital wallets and online
                banking accounts. Incorporate a combination of letters, numbers,
                and special characters to create a strong password that is less
                susceptible to hacking.
              </li>

              <h6>Exercise Caution with Personal Information: </h6>
              <li className="mb-3">
                Be cautious about sharing personal information and account
                details, even if someone claims to be from your bank. Avoid
                responding to unsolicited emails or messages requesting
                sensitive information, as these could be phishing attempts.
              </li>

              <h6>Enable Security Features: </h6>
              <li className="mb-3">
                Utilize biometric authentication (fingerprint or facial
                recognition) and two-factor authentication wherever possible to
                add layers of security. Enable device-specific security
                features, such as remote wipe, to protect your data in case your
                device is lost or stolen.
              </li>
            </div>

            <div className="pt-4">
              <h6>VPN for Public Wi-Fi Transactions: </h6>
              <li>
                Consider using a Virtual Private Network (VPN) when making
                transactions over public Wi-Fi networks.
              </li>
              <li>
                VPNs encrypt your data, reducing the risk of unauthorized access
                or interception of sensitive information while using public
                networks.
              </li>
              <p className="pt-4">
                In the rapidly evolving landscape of digital finance, these tips
                serve as a proactive defense against potential threats. By
                incorporating these practices into your routine, you can enjoy
                the benefits of cardless transactions while minimizing the risks
                associated with cyber threats.
              </p>
            </div>
            <div>
              <img src="./Images/gobeyond/11 (1) 2.svg" />
            </div>

            <div className="pt-5">
              <p>
                <span style={{ fontWeight: "bold" }}>Conclusion: </span>
                Cardless transactions offer convenience and efficiency in our
                fast-paced world, but they also come with the responsibility of
                safeguarding our financial information. The age of cardless
                transactions demands heightened awareness of cyber security. All
                you have to do is take necessary precautions and stay informed
                about the latest threats, you can enjoy the benefits of digital
                finance while keeping your hard-earned money safe from
                cybercriminals. In this digital age, knowledge and vigilance are
                your best allies in the world of cardless transactions. Stay
                secure, stay informed, and embrace the future of finance with
                confidence.
              </p>
            </div>
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
          Copyright © 2023 SmartGig Technology Private Limited. All Rights
          Reserved.
        </div>{" "}
      </div>
    </>
  );
}
