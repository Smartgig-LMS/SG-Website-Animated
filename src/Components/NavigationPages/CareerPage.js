import React, { useEffect, useRef } from 'react'
import Footer from '../LandingPage/Footer'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export default function CareerPage() {

    const [star, setStar] = React.useState("");
    const formVar = useRef();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // Load the Glassdoor widget script
        const script = document.createElement('script');
        script.src = 'https://www.glassdoor.com/static/js/api/widget/v1.js';
        script.async = true;
        document.body.appendChild(script);

        const reviewContent = document.getElementsByClassName("reviewContent")[0];
        console.log(reviewContent, "reviewContent");
        // Check if the element exists
        if (reviewContent != undefined) {
            // Hide the element
            reviewContent.style.display = 'none';
        }

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };

    }, []);

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }

    function myFunction2() {
        var dots = document.getElementById("dots2");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("myBtn2");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction3() {
        var dots = document.getElementById("dots3");
        var moreText = document.getElementById("more3");
        var btnText = document.getElementById("myBtn3");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction4() {
        var dots = document.getElementById("dots4");
        var moreText = document.getElementById("more4");
        var btnText = document.getElementById("myBtn4");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction5() {
        var dots = document.getElementById("dots5");
        var moreText = document.getElementById("more5");
        var btnText = document.getElementById("myBtn5");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction6() {
        var dots = document.getElementById("dots6");
        var moreText = document.getElementById("more6");
        var btnText = document.getElementById("myBtn6");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction7() {
        var dots = document.getElementById("dots7");
        var moreText = document.getElementById("more7");
        var btnText = document.getElementById("myBtn7");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }

    function myFunction8() {
        var dots = document.getElementById("dots8");
        var moreText = document.getElementById("more8");
        var btnText = document.getElementById("myBtn8");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction9() {
        var dots = document.getElementById("dots9");
        var moreText = document.getElementById("more9");
        var btnText = document.getElementById("myBtn9");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction10() {
        var dots = document.getElementById("dots10");
        var moreText = document.getElementById("more10");
        var btnText = document.getElementById("myBtn10");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction11() {
        var dots = document.getElementById("dots11");
        var moreText = document.getElementById("more11");
        var btnText = document.getElementById("myBtn11");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    function myFunction12() {
        var dots = document.getElementById("dots12");
        var moreText = document.getElementById("more12");
        var btnText = document.getElementById("myBtn12");
        console.log(dots, moreText, btnText);
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Show more";
            moreText.style.display = "none";
            // window.scrollTo({ top: "700px", left: 0, behavior: 'smooth' });
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Show less";
            moreText.style.display = "inline";
        }

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm("service_i6lti6c", "template_pkoebp8", formVar.current, "MI_VKeA2nr8s0vNpD")
            .then((result) => {
                // show the user a success message
                console.log(result, "success");
                window.alert("Email Sent Successfully");
                setOpen(false);
                // toast.success("Email Sent Successfully");
            }, (error) => {
                // show the user an error   
                console.log(error, "failed");
                window.alert("Email Failed");
                setOpen(false);
                // toast.warning("Can't Sent Email")
            });
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <iframe width="940px" height="940px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=yGm9mQ7PR0ey76f0YV3EO1u5dVf9_KVDjPCkcvodfsBUMVZJNEY1QUo4OFJKNUZTSVlDRlFXSU9YMi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            </Dialog >

            <div className='CareerPg'>
                <div className='firstCareerDiv'>
                    <h1 className='CareerHeadnig'>
                        Career for everyone
                    </h1>
                    <span className='firstCareerDivSpan'>
                        Join us on a journey to elevate your professional career. Our aim is to empower you to achieve <br />
                        significant growth through transformative career opportunities
                    </span>
                </div>

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Android Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots" style={{ display: "inline" }}>
                                <h6>
                                    Minimum Qualification
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Design or equivalent practical experience.
                                    </li>
                                    <li>Experience collaborating with multidisciplinary teams of Designers, Researchers, Engineers, Content Strategists, and Product Managers throughout the
                                        design process.
                                    </li>
                                    <li>
                                        Portfolio highlighting multiple projects that demonstrates experience crafting digital interfaces, and designing consumer-focused, app/mobile products
                                    </li>
                                </ul>
                            </span>
                            <span id='more' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are looking for an Android developer responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices. Your primary focus will be the development of Android applications and their integration with back-end services. You will be working along-side other engineers and developers working on different layers of the infrastructure. Therefore, commitment to collaborative problem solving, sophisticated design, and creating quality products is essential.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Translate designs and wireframes into high quality code
                                    </li>
                                    <li>
                                        Design, build, and maintain high performance, reusable, and reliable Java code
                                    </li>
                                    <li>
                                        Ensure the best possible performance, quality, and responsiveness of the application
                                    </li>
                                    <li>
                                        Identify and correct bottlenecks and fix bugs
                                    </li>
                                    <li>
                                        Help maintain code quality, organisation, and automatisation.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes
                                    </li>
                                    <li>
                                        Familiarity with RESTful APIs to connect Android applications to back-end services
                                    </li>
                                    <li>
                                        Strong knowledge of Android UI design principles, patterns, and best practices
                                    </li>
                                    <li>
                                        Experience with offline storage, threading, and performance tuning
                                    </li>
                                    <li>
                                        Ability to design applications around natural user interfaces, such as “touch”
                                    </li>
                                    <li>
                                        Familiarity with the use of additional sensors, such as gyroscopes and accelerometers
                                    </li>
                                    <li>
                                        Knowledge of the open-source Android ecosystem and the libraries available for common tasks
                                    </li>
                                    <li>
                                        Ability to understand business requirements and translate them into technical requirements
                                    </li>
                                    <li>
                                        Familiarity with cloud message APIs and push notifications
                                    </li>
                                    <li>
                                        A knack for benchmarking and optimisation
                                    </li>
                                    <li>
                                        Understanding of Google’s Android design principles and interface guidelines
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools, such as Git
                                    </li>
                                    <li>
                                        Familiarity with continuous integration
                                    </li>
                                    <li>
                                        Hands on Experience with Java and Kotlin must
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction} id="myBtn">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2nd */}

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        IOS Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots2" style={{ display: "inline", textAlign: "left" }}>
                                <p>
                                    This is a full-time on-site role for an iOS Developer. The iOS Developer will be responsible for the day-to-day tasks associated with mobile application development, iOS development, mobile applications, software development. The iOS Developer will be collaborating with the software development team to develop, test, and deploy high quality mobile applications. The role involves working out of our office in Hyderabad.
                                </p>                         </span>
                            <span id='more2' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    This is a full-time on-site role for an iOS Developer. The iOS Developer will be responsible for the day-to-day tasks associated with mobile application development, iOS development, mobile applications, software development. The iOS Developer will be collaborating with the software development team to develop, test, and deploy high quality mobile applications. The role involves working out of our office in Hyderabad.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Looking 4+ years of exp in ios, Objective-C and Swift , React Native.
                                    </li>
                                    <li>
                                        iOS frameworks such as Core Data
                                    </li>
                                    <li>
                                        Restful APIs to connect iOS applications to back-end services.
                                    </li>
                                    <li>
                                        Understanding of Apple's design principles and interface guidelines ,
                                    </li>
                                    <li>
                                        Familiarity with cloud message APIs and push notifications.
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools such as Git, SVN, bit bucket and continuous integration.
                                    </li>
                                    <li>
                                        Have excellent knowledge MVVM MVVC about the performance optimisation of mobile applications.
                                    </li>
                                </ul>

                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction2} id="myBtn2">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3rd one */}

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Test Engineer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots3" style={{ display: "inline", textAlign: "left" }}>
                                <p>
                                    We are seeking a skilled and experienced Test Engineer with a proven track record in software testing. As a Test Engineer, you will play a critical role in ensuring the quality and reliability of our software products. You will collaborate with cross-functional teams, including developers, designers, and product managers, to identify, plan, and execute effective testing strategies. The ideal candidate will have at least 4 years of professional experience in software testing and a deep understanding of testing methodologies, tools, and best practices.                                </p>
                            </span>
                            <span id='more3' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a skilled and experienced Test Engineer with a proven track record in software testing. As a Test Engineer, you will play a critical role in ensuring the quality and reliability of our software products. You will collaborate with cross-functional teams, including developers, designers, and product managers, to identify, plan, and execute effective testing strategies. The ideal candidate will have at least 4 years of professional experience in software testing and a deep understanding of testing methodologies, tools, and best practices.                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Develop and execute comprehensive test plans, test cases, and test scripts to validate software functionality, performance, and reliability.
                                    </li>
                                    <li>
                                        Collaborate with the development team to define testing requirements and ensure testability of software features and enhancements.
                                    </li>
                                    <li>
                                        Perform functional, regression, integration, and system-level testing to identify defects and ensure adherence to quality standards.
                                    </li>
                                    <li>
                                        Conduct thorough defect analysis, accurately document and track issues, and work closely with the development team to resolve them.
                                    </li>
                                    <li>
                                        Participate in design and code reviews to provide input on testability, usability, and performance aspects of the software.
                                    </li>
                                    <li>
                                        Identify and implement test automation opportunities to improve testing efficiency and coverage.
                                    </li>
                                    <li>
                                        Stay up-to-date with industry trends and advancements in testing methodologies, tools, and technologies.
                                    </li>
                                    <li>
                                        Continuously improve testing processes and contribute to the overall quality assurance efforts within the organization.
                                    </li>
                                    <li>
                                        Collaborate with cross-functional teams to ensure that test environments and test data are set up properly for effective testing.
                                    </li>
                                    <li>
                                        Communicate test progress, test results, and other relevant information to stakeholders in a clear and concise manner.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction3} id="myBtn3">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4th */}

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Dotnet Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots4" style={{ display: "inline" }}>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Good programming experience and a demonstrated proficiency and Experience in .NET Development
                                    </li>
                                    <li>
                                        Handling support tickets and working on prioritization
                                    </li>
                                    <li>
                                        Good verbal and written communication skills
                                    </li>
                                    <li>
                                        Strong understanding of .NET core, MVC, Web API's, C#, ADO.net, SQL, OOPs Concepts, and CI/CD is a plus.
                                    </li>
                                </ul>
                            </span>
                            <span id='more4' style={{ display: "none", textAlign: "start" }}>

                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Good programming experience and a demonstrated proficiency and Experience in .NET Development
                                    </li>
                                    <li>
                                        Handling support tickets and working on prioritization
                                    </li>
                                    <li>
                                        Good verbal and written communication skills
                                    </li>
                                    <li>
                                        Strong understanding of .NET core, MVC, Web API's, C#, ADO.net, SQL, OOPs Concepts, and CI/CD is a plus.
                                    </li>
                                    <li>
                                        Good exposure in both database and Front-end development.
                                    </li>
                                    <li>
                                        Strong troubleshooting and communication skills
                                    </li>
                                    <li>
                                        Strong in at least one of the .NET languages (e.g., C#, Visual Basic .NET) and HTML5/CSS3/jQuery
                                    </li>
                                    <li>
                                        Ability to independently learn new technologies.
                                    </li>
                                    <li>
                                        Ability to show initiative and work independently with minimal direction.
                                    </li>
                                    <li>
                                        Demonstrate a desire to remain current with industry technologies and standards.
                                    </li>
                                    <li>
                                        Understanding of Agile methodologies
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools, such as Git, TFS.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction4} id="myBtn4">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 5th */}

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        UI Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots5" style={{ display: "inline", textAlign: "left" }}>
                                <p>
                                    We are seeking a talented and experienced UI Developer to join our team. As a UI Developer, you will be responsible for creating visually appealing and user-friendly interfaces for our web and mobile applications. You will work closely with our design and development teams to implement and enhance the user interface components, ensuring a seamless and engaging user experience.                                </p>
                            </span>
                            <span id='more5' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a talented and experienced UI Developer to join our team. As a UI Developer, you will be responsible for creating visually appealing and user-friendly interfaces for our web and mobile applications. You will work closely with our design and development teams to implement and enhance the user interface components, ensuring a seamless and engaging user experience.                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Collaborate with designers and developers to translate wireframes, mockups, and concepts into functional user interfaces. Develop high-quality, responsive web and mobile interfaces using HTML, CSS, and JavaScript frameworks.
                                    </li>
                                    <li>
                                        Implement interactive and dynamic elements, such as animations, transitions, and user input validations.
                                    </li>
                                    <li>
                                        Optimize application performance and ensure cross-browser compatibility.
                                    </li>
                                    <li>
                                        Work closely with back-end developers to integrate front-end components with server-side logic.
                                    </li>
                                    <li>
                                        Stay up to date with the latest UI trends, technologies, and best practices.
                                    </li>
                                    <li>
                                        Continuously improve the user interface by gathering feedback and conducting usability testing.
                                    </li>
                                    <li>
                                        Collaborate with the UX team to ensure a consistent and intuitive user experience throughout the application.
                                    </li>
                                    <li>
                                        Document code and maintain a clean and organized codebase.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Computer Science, Web Design, or a related field.
                                    </li>
                                    <li>
                                        3 to 5 years of professional experience as a UI Developer or a similar role.
                                    </li>
                                    <li>
                                        Strong proficiency in HTML, CSS, and JavaScript.
                                    </li>
                                    <li>
                                        Experience with JavaScript frameworks such as React, Angular, or Vue.js.
                                    </li>
                                    <li>
                                        Solid understanding of responsive design principles and mobile-first development.
                                    </li>
                                    <li>
                                        Proficient understanding of cross-browser compatibility and accessibility standards.
                                    </li>
                                    <li>
                                        Experience with version control systems, such as Git.
                                    </li>
                                    <li>
                                        Familiarity with front-end build tools and preprocessors, such as Webpack, Gulp, or SASS.
                                    </li>
                                    <li>
                                        Excellent problem-solving skills and attention to detail.
                                    </li>
                                    <li>
                                        Strong communication and collaboration skills to work effectively within a team.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction5} id="myBtn5">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 6th */}

                <div className='mt-5'>
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Java Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots6" style={{ display: "inline", textAlign: "left" }}>
                                <p>
                                    We are seeking a skilled Java Developer with 4+years of experience to join our development team. As a Java Developer, you will be responsible for designing, developing, and maintaining high-quality software applications using Java and related technologies. The ideal candidate will have strong experience in Spring Boot, Microservices, and Kafka, along with a solid understanding of software development principles and best practices.
                                </p>
                            </span>
                            <span id='more6' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a skilled Java Developer with 4+years of experience to join our development team. As a Java Developer, you will be responsible for designing, developing, and maintaining high-quality software applications using Java and related technologies. The ideal candidate will have strong experience in Spring Boot, Microservices, and Kafka, along with a solid understanding of software development principles and best practices.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Design, develop, and maintain robust and scalable Java-based applications using Spring Boot, Microservices, and Kafka.
                                    </li>
                                    <li>
                                        Collaborate with cross-functional teams, including product managers, architects, and other developers, to gather and analyse requirements, and translate them into technical specifications.
                                    </li>
                                    <li>
                                        Write clean, efficient, and maintainable code following coding standards and best practices.
                                    </li>
                                    <li>
                                        Perform code reviews to ensure adherence to coding standards, quality, and performance requirements.
                                    </li>
                                    <li>
                                        Troubleshoot and debug issues reported by users or stakeholders, and provide timely resolutions.
                                    </li>
                                    <li>
                                        Implement and integrate third-party APIs and libraries as needed.
                                    </li>
                                    <li>
                                        Develop and execute unit tests and automated test suites to ensure software quality and reliability.
                                    </li>
                                    <li>
                                        Optimize application performance and ensure scalability and responsiveness.
                                    </li>
                                    <li>
                                        Collaborate with DevOps teams to deploy and maintain applications in production environments.
                                    </li>
                                    <li>
                                        Stay updated with the latest industry trends and technologies, and share knowledge with the team.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Computer Science, Software Engineering, or a related field.
                                    </li>
                                    <li>
                                        Experience as a Java Developer, with a focus on Spring Boot, Microservices, and Kafka.
                                    </li>
                                    <li>
                                        Strong proficiency in Java programming language and object-oriented design principles.
                                    </li>
                                    <li>
                                        Experience with Spring Boot and Spring Framework for building enterprise applications.
                                    </li>
                                    <li>
                                        Hands-on experience with Microservices architecture and design patterns.
                                    </li>
                                    <li>
                                        Familiarity with Kafka messaging system and event-driven architectures.
                                    </li>
                                    <li>
                                        Solid understanding of software development principles, practices, and methodologies.
                                    </li>
                                    <li>
                                        Proficient in using build tools such as Maven or Gradle.
                                    </li>
                                    <li>
                                        Experience with version control systems, such as Git.
                                    </li>
                                    <li>
                                        Familiarity with database systems and SQL.
                                    </li>
                                    <li>
                                        Strong problem-solving and analytical skills.
                                    </li>
                                    <li>
                                        Excellent communication and collaboration abilities.
                                    </li>
                                    <li>
                                        Ability to work independently and as part of a team.
                                    </li>
                                    <li>
                                        Knowledge of front-end technologies (e.g., HTML, CSS, JavaScript) is a plus.
                                    </li>
                                    <li>
                                        Experience with cloud platforms (e.g., AWS, Azure) is a plus.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction6} id="myBtn6">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className='glassdoor'>
                    <div className='glassdoor2'>
                        <h1>
                            What People are saying about us !
                        </h1>
                    </div>
                    <div className='glassdoor3'>
                        <div className='glassdoor4'>
                            <img src='./Images/gobeyond/Group 427321712.svg' width="269" height="130" />
                        </div>
                        <div className='glassdoor4'>
                            <img src='./Images/gobeyond/Group 427321705.svg' width="338" height="132" />
                        </div>
                        <div className='glassdoor4'>
                            <img src='./Images/gobeyond/Group 427321326.svg' width="265" height="133" />
                        </div>
                        {/* <div className="gdWidget">
                            <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-m&t.a=c&format=400x250&employerId=5163282" target="_gd">
                                SmartGig Reviews
                            </a> |
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div >

            {/* for mobile-------------------------------------------------------------------------- */}

            <div className='CareerPgForMobile'>
                <div className='firstCareerDiv'>
                    <h4>
                        Career for everyone
                    </h4>
                </div>
                <p className='col-lg-7 mt-3 text-center'>
                    Join us on a journey to elevate your professional career. Our aim is to empower you to achieve <br />
                    significant growth through transformative career opportunities
                </p>
                <div className='mt-3 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Android Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots7" style={{ display: "inline" }}>
                                {/* <h6>
                                    Minimum Qualification
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Design or equivalent practical experience.
                                    </li>
                                    <li>Experience collaborating with multidisciplinary teams of Designers, Researchers, Engineers, Content Strategists, and Product Managers throughout the
                                        design process.
                                    </li>
                                    <li>
                                        Portfolio highlighting multiple projects that demonstrates experience crafting digital interfaces, and designing consumer-focused, app/mobile products
                                    </li>
                                </ul> */}
                            </span>
                            <span id='more7' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are looking for an Android developer responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices. Your primary focus will be the development of Android applications and their integration with back-end services. You will be working along-side other engineers and developers working on different layers of the infrastructure. Therefore, commitment to collaborative problem solving, sophisticated design, and creating quality products is essential.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Translate designs and wireframes into high quality code
                                    </li>
                                    <li>
                                        Design, build, and maintain high performance, reusable, and reliable Java code
                                    </li>
                                    <li>
                                        Ensure the best possible performance, quality, and responsiveness of the application
                                    </li>
                                    <li>
                                        Identify and correct bottlenecks and fix bugs
                                    </li>
                                    <li>
                                        Help maintain code quality, organisation, and automatisation.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes
                                    </li>
                                    <li>
                                        Familiarity with RESTful APIs to connect Android applications to back-end services
                                    </li>
                                    <li>
                                        Strong knowledge of Android UI design principles, patterns, and best practices
                                    </li>
                                    <li>
                                        Experience with offline storage, threading, and performance tuning
                                    </li>
                                    <li>
                                        Ability to design applications around natural user interfaces, such as “touch”
                                    </li>
                                    <li>
                                        Familiarity with the use of additional sensors, such as gyroscopes and accelerometers
                                    </li>
                                    <li>
                                        Knowledge of the open-source Android ecosystem and the libraries available for common tasks
                                    </li>
                                    <li>
                                        Ability to understand business requirements and translate them into technical requirements
                                    </li>
                                    <li>
                                        Familiarity with cloud message APIs and push notifications
                                    </li>
                                    <li>
                                        A knack for benchmarking and optimisation
                                    </li>
                                    <li>
                                        Understanding of Google’s Android design principles and interface guidelines
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools, such as Git
                                    </li>
                                    <li>
                                        Familiarity with continuous integration
                                    </li>
                                    <li>
                                        Hands on Experience with Java and Kotlin must
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction7} id="myBtn7">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2nd */}

                <div className='mt-5 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        IOS Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots8" style={{ display: "inline", textAlign: "left" }}>
                                {/* <p>
                                    This is a full-time on-site role for an iOS Developer. The iOS Developer will be responsible for the day-to-day tasks associated with mobile application development, iOS development, mobile applications, software development. The iOS Developer will be collaborating with the software development team to develop, test, and deploy high quality mobile applications. The role involves working out of our office in Hyderabad.
                                </p>*/}
                            </span>
                            <span id='more8' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    This is a full-time on-site role for an iOS Developer. The iOS Developer will be responsible for the day-to-day tasks associated with mobile application development, iOS development, mobile applications, software development. The iOS Developer will be collaborating with the software development team to develop, test, and deploy high quality mobile applications. The role involves working out of our office in Hyderabad.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Looking 4+ years of exp in ios, Objective-C and Swift , React Native.
                                    </li>
                                    <li>
                                        iOS frameworks such as Core Data
                                    </li>
                                    <li>
                                        Restful APIs to connect iOS applications to back-end services.
                                    </li>
                                    <li>
                                        Understanding of Apple's design principles and interface guidelines ,
                                    </li>
                                    <li>
                                        Familiarity with cloud message APIs and push notifications.
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools such as Git, SVN, bit bucket and continuous integration.
                                    </li>
                                    <li>
                                        Have excellent knowledge MVVM MVVC about the performance optimisation of mobile applications.
                                    </li>
                                </ul>

                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction8} id="myBtn8">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3rd one */}

                <div className='mt-5 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Test Engineer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots9" style={{ display: "inline", textAlign: "left" }}>
                                {/* <p>
                                    We are seeking a skilled and experienced Test Engineer with a proven track record in software testing. As a Test Engineer, you will play a critical role in ensuring the quality and reliability of our software products. You will collaborate with cross-functional teams, including developers, designers, and product managers, to identify, plan, and execute effective testing strategies. The ideal candidate will have at least 4 years of professional experience in software testing and a deep understanding of testing methodologies, tools, and best practices.                                </p> */}
                            </span>
                            <span id='more9' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a skilled and experienced Test Engineer with a proven track record in software testing. As a Test Engineer, you will play a critical role in ensuring the quality and reliability of our software products. You will collaborate with cross-functional teams, including developers, designers, and product managers, to identify, plan, and execute effective testing strategies. The ideal candidate will have at least 4 years of professional experience in software testing and a deep understanding of testing methodologies, tools, and best practices.                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Develop and execute comprehensive test plans, test cases, and test scripts to validate software functionality, performance, and reliability.
                                    </li>
                                    <li>
                                        Collaborate with the development team to define testing requirements and ensure testability of software features and enhancements.
                                    </li>
                                    <li>
                                        Perform functional, regression, integration, and system-level testing to identify defects and ensure adherence to quality standards.
                                    </li>
                                    <li>
                                        Conduct thorough defect analysis, accurately document and track issues, and work closely with the development team to resolve them.
                                    </li>
                                    <li>
                                        Participate in design and code reviews to provide input on testability, usability, and performance aspects of the software.
                                    </li>
                                    <li>
                                        Identify and implement test automation opportunities to improve testing efficiency and coverage.
                                    </li>
                                    <li>
                                        Stay up-to-date with industry trends and advancements in testing methodologies, tools, and technologies.
                                    </li>
                                    <li>
                                        Continuously improve testing processes and contribute to the overall quality assurance efforts within the organization.
                                    </li>
                                    <li>
                                        Collaborate with cross-functional teams to ensure that test environments and test data are set up properly for effective testing.
                                    </li>
                                    <li>
                                        Communicate test progress, test results, and other relevant information to stakeholders in a clear and concise manner.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction9} id="myBtn9">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4th */}

                <div className='mt-5 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Dotnet Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots10" style={{ display: "inline" }}>
                                {/* <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Good programming experience and a demonstrated proficiency and Experience in .NET Development
                                    </li>
                                    <li>
                                        Handling support tickets and working on prioritization
                                    </li>
                                    <li>
                                        Good verbal and written communication skills
                                    </li>
                                    <li>
                                        Strong understanding of .NET core, MVC, Web API's, C#, ADO.net, SQL, OOPs Concepts, and CI/CD is a plus.
                                    </li>
                                </ul> */}
                            </span>
                            <span id='more10' style={{ display: "none", textAlign: "start" }}>

                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Good programming experience and a demonstrated proficiency and Experience in .NET Development
                                    </li>
                                    <li>
                                        Handling support tickets and working on prioritization
                                    </li>
                                    <li>
                                        Good verbal and written communication skills
                                    </li>
                                    <li>
                                        Strong understanding of .NET core, MVC, Web API's, C#, ADO.net, SQL, OOPs Concepts, and CI/CD is a plus.
                                    </li>
                                    <li>
                                        Good exposure in both database and Front-end development.
                                    </li>
                                    <li>
                                        Strong troubleshooting and communication skills
                                    </li>
                                    <li>
                                        Strong in at least one of the .NET languages (e.g., C#, Visual Basic .NET) and HTML5/CSS3/jQuery
                                    </li>
                                    <li>
                                        Ability to independently learn new technologies.
                                    </li>
                                    <li>
                                        Ability to show initiative and work independently with minimal direction.
                                    </li>
                                    <li>
                                        Demonstrate a desire to remain current with industry technologies and standards.
                                    </li>
                                    <li>
                                        Understanding of Agile methodologies
                                    </li>
                                    <li>
                                        Proficient understanding of code versioning tools, such as Git, TFS.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction10} id="myBtn10">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 5th */}

                <div className='mt-5 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        UI Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <div className='threeDiv2'>
                                15 days or Immediate
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots11" style={{ display: "inline", textAlign: "left" }}>
                                {/* <p>
                                    We are seeking a talented and experienced UI Developer to join our team. As a UI Developer, you will be responsible for creating visually appealing and user-friendly interfaces for our web and mobile applications. You will work closely with our design and development teams to implement and enhance the user interface components, ensuring a seamless and engaging user experience.
                                </p> */}
                            </span>
                            <span id='more11' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a talented and experienced UI Developer to join our team. As a UI Developer, you will be responsible for creating visually appealing and user-friendly interfaces for our web and mobile applications. You will work closely with our design and development teams to implement and enhance the user interface components, ensuring a seamless and engaging user experience.                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Collaborate with designers and developers to translate wireframes, mockups, and concepts into functional user interfaces. Develop high-quality, responsive web and mobile interfaces using HTML, CSS, and JavaScript frameworks.
                                    </li>
                                    <li>
                                        Implement interactive and dynamic elements, such as animations, transitions, and user input validations.
                                    </li>
                                    <li>
                                        Optimize application performance and ensure cross-browser compatibility.
                                    </li>
                                    <li>
                                        Work closely with back-end developers to integrate front-end components with server-side logic.
                                    </li>
                                    <li>
                                        Stay up to date with the latest UI trends, technologies, and best practices.
                                    </li>
                                    <li>
                                        Continuously improve the user interface by gathering feedback and conducting usability testing.
                                    </li>
                                    <li>
                                        Collaborate with the UX team to ensure a consistent and intuitive user experience throughout the application.
                                    </li>
                                    <li>
                                        Document code and maintain a clean and organized codebase.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Computer Science, Web Design, or a related field.
                                    </li>
                                    <li>
                                        3 to 5 years of professional experience as a UI Developer or a similar role.
                                    </li>
                                    <li>
                                        Strong proficiency in HTML, CSS, and JavaScript.
                                    </li>
                                    <li>
                                        Experience with JavaScript frameworks such as React, Angular, or Vue.js.
                                    </li>
                                    <li>
                                        Solid understanding of responsive design principles and mobile-first development.
                                    </li>
                                    <li>
                                        Proficient understanding of cross-browser compatibility and accessibility standards.
                                    </li>
                                    <li>
                                        Experience with version control systems, such as Git.
                                    </li>
                                    <li>
                                        Familiarity with front-end build tools and preprocessors, such as Webpack, Gulp, or SASS.
                                    </li>
                                    <li>
                                        Excellent problem-solving skills and attention to detail.
                                    </li>
                                    <li>
                                        Strong communication and collaboration skills to work effectively within a team.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction11} id="myBtn11">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 6th */}

                <div className='mt-5 text-center col-lg-7'>
                    <div className='card p-4 w-100 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='d-flex' style={{ alignItems: "center" }}>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Java Developer
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                4 + Years
                            </div>
                            <span className='threeDiv2'>
                                15 days or Immediate
                            </span>
                            <div className='threeDiv3'>
                                Hyderabad(WFO)
                            </div>
                        </div>
                        <hr />
                        <div>
                            <span id="dots12" style={{ display: "inline", textAlign: "left" }}>
                                {/* <p>
                                    We are seeking a skilled Java Developer with 4+years of experience to join our development team. As a Java Developer, you will be responsible for designing, developing, and maintaining high-quality software applications using Java and related technologies. The ideal candidate will have strong experience in Spring Boot, Microservices, and Kafka, along with a solid understanding of software development principles and best practices.
                                </p> */}
                            </span>
                            <span id='more12' style={{ display: "none", textAlign: "start" }}>
                                <p>
                                    We are seeking a skilled Java Developer with 4+years of experience to join our development team. As a Java Developer, you will be responsible for designing, developing, and maintaining high-quality software applications using Java and related technologies. The ideal candidate will have strong experience in Spring Boot, Microservices, and Kafka, along with a solid understanding of software development principles and best practices.
                                </p>
                                <h6>
                                    Responsibilities:
                                </h6>
                                <ul>
                                    <li>
                                        Design, develop, and maintain robust and scalable Java-based applications using Spring Boot, Microservices, and Kafka.
                                    </li>
                                    <li>
                                        Collaborate with cross-functional teams, including product managers, architects, and other developers, to gather and analyse requirements, and translate them into technical specifications.
                                    </li>
                                    <li>
                                        Write clean, efficient, and maintainable code following coding standards and best practices.
                                    </li>
                                    <li>
                                        Perform code reviews to ensure adherence to coding standards, quality, and performance requirements.
                                    </li>
                                    <li>
                                        Troubleshoot and debug issues reported by users or stakeholders, and provide timely resolutions.
                                    </li>
                                    <li>
                                        Implement and integrate third-party APIs and libraries as needed.
                                    </li>
                                    <li>
                                        Develop and execute unit tests and automated test suites to ensure software quality and reliability.
                                    </li>
                                    <li>
                                        Optimize application performance and ensure scalability and responsiveness.
                                    </li>
                                    <li>
                                        Collaborate with DevOps teams to deploy and maintain applications in production environments.
                                    </li>
                                    <li>
                                        Stay updated with the latest industry trends and technologies, and share knowledge with the team.
                                    </li>
                                </ul>

                                <h6>
                                    Skills:
                                </h6>
                                <ul>
                                    <li>
                                        Bachelor's degree in Computer Science, Software Engineering, or a related field.
                                    </li>
                                    <li>
                                        Experience as a Java Developer, with a focus on Spring Boot, Microservices, and Kafka.
                                    </li>
                                    <li>
                                        Strong proficiency in Java programming language and object-oriented design principles.
                                    </li>
                                    <li>
                                        Experience with Spring Boot and Spring Framework for building enterprise applications.
                                    </li>
                                    <li>
                                        Hands-on experience with Microservices architecture and design patterns.
                                    </li>
                                    <li>
                                        Familiarity with Kafka messaging system and event-driven architectures.
                                    </li>
                                    <li>
                                        Solid understanding of software development principles, practices, and methodologies.
                                    </li>
                                    <li>
                                        Proficient in using build tools such as Maven or Gradle.
                                    </li>
                                    <li>
                                        Experience with version control systems, such as Git.
                                    </li>
                                    <li>
                                        Familiarity with database systems and SQL.
                                    </li>
                                    <li>
                                        Strong problem-solving and analytical skills.
                                    </li>
                                    <li>
                                        Excellent communication and collaboration abilities.
                                    </li>
                                    <li>
                                        Ability to work independently and as part of a team.
                                    </li>
                                    <li>
                                        Knowledge of front-end technologies (e.g., HTML, CSS, JavaScript) is a plus.
                                    </li>
                                    <li>
                                        Experience with cloud platforms (e.g., AWS, Azure) is a plus.
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career' onClick={myFunction12} id="myBtn12">
                                Show more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className='glassdoor col-lg-7 mt-3 p-4'>
                    <div className='glassdoor2 mb-3'>
                        <h5>
                            What People are saying about us!
                        </h5>
                    </div>
                    <div className='d-flex' style={{ gap: 10 }}>
                        <div className='img-left '>
                            <img src='./Images/gobeyond/Group 427321712.svg' />
                        </div>
                        <div className='img-left'>
                            <img src='./Images/gobeyond/Group 427321705.svg' />
                        </div>
                        <div className='img-left'>
                            <img src='./Images/gobeyond/Group 427321326.svg' />
                        </div>
                    </div>
                </div>
                <div className='footerForMobile'>
                    <hr />
                    Copyright © 2023 SmartGig. All Rights Reserved.
                </div>
            </div >
        </>
    )
}
