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

    // React.useEffect(() => {
    //     // axios.post("https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-m&t.a=c&format=300x250&employerId=5163282")
    //     //     .then((res) => {
    //     //         console.log(res.employerRating, "dSAt");
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //     })
    //     // document.getElementsByClassName("reviewContent")[0].style.display = 'none';
    //     // document.getElementById("EmpReviews").style.display = 'none';

    //     document.addEventListener('DOMContentLoaded', function () {
    //         // Get the first element with the class name 'reviewContent'
    //         const reviewContent = document.getElementsByClassName("reviewContent")[0];

    //         // Check if the element exists
    //         if (reviewContent) {
    //             // Hide the element
    //             reviewContent.style.display = 'none';
    //         }
    //     });
    // }, []);

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <form ref={formVar} onSubmit={handleSubmit}>
                    <div className='modalOnContact'>
                        <img src='./Images/gobeyond/Group 427321194 (3).png' width="120" height="35px" />
                        <DialogTitle className='DialogTitle'>
                            <h1>
                                Job Application form
                            </h1>
                        </DialogTitle>
                        <DialogContent>
                            <p style={{ fontWeight: "400" }}>
                                Thank you for your interest in Smartgig. We appreciate your enthusiasm for our organization
                                and look forward to reviewing your application.
                            </p>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Full Name"
                                type="text"
                                name="full_name"
                                fullWidth
                                required
                                variant="standard"
                            />
                            <TextField
                                margin="dense"
                                name="phone_no"
                                id="name"
                                label="Phone"
                                type="number"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                margin="dense"
                                name="email_address"
                                id="email"
                                label="Email Address"
                                type="email"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                margin="dense"
                                name="experience"
                                id="experience"
                                label="Experience"
                                type="text"
                                required
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                margin="dense"
                                name="location"
                                id="location"
                                label="Location"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <div style={{ textAlign: "left" }}>
                                <br />
                                <label required className='form-label'>Upload Resume</label>
                                <sup className='star'>*</sup>
                                <br />
                                <input className='input-group form-control w-100' name="resume" id="resume" type="file" required />
                            </div>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} type='button' style={{ color: "#F38313", justifyContent: "left" }}>Cancel</Button>
                            <Button type='submit' value="Send" style={{ backgroundColor: "#346DAD", color: "white" }} >
                                Submit
                            </Button>
                        </DialogActions>
                    </div>
                </form>
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
                    {/* <MDBCard className='mdcrdForCareer'> */}
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
                            {/* <div>
                            ₹20 - 40k / Year
                        </div> */}
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
                    {/* </MDBCard> */}
                </div>
                <div className='mt-5'>
                    {/* <MDBCard className='mdcrdForCareer'> */}
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Full Stack Developer
                                    </h4>
                                </div>
                            </div>
                            {/* <div>
                            ₹30 - 80k / Year
                        </div> */}
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                Full Time
                            </div>
                            <div className='threeDiv2'>
                                FEA Analysis
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h6>
                                Minimum Qualification
                            </h6>
                            <ul>
                                <li>Bachelor's degree in Design or equivalent practical experience.</li>
                                <li>Experience collaborating with multidisciplinary teams of Designers, Researchers, Engineers, Content Strategists, and Product Managers throughout the
                                    design process.
                                </li>
                                <li>
                                    Portfolio highlighting multiple projects that demonstrates experience crafting digital interfaces, and designing consumer-focused, app/mobile products.
                                </li>
                            </ul>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career'>
                                learn more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                    {/* </MDBCard> */}
                </div>
                <div className='mt-5'>
                    {/* <MDBCard className='mdcrdForCareer'>   */}
                    {/* <div className='card shadow-lg p-4 w-75 mdcrdForCareer'> */}
                    <div className='card p-4 w-75 mdcrdForCareer'>
                        <div className='careerRate'>
                            <div className='careerRate2'>
                                <div>
                                    <img src='./Images/gobeyond/Group 427321267.png' />
                                </div>
                                <div>
                                    <h4 className='ml-3'>
                                        Project Manager
                                    </h4>
                                </div>
                            </div>
                            {/* <div>
                            ₹25 - 50k / Year
                        </div> */}
                        </div>
                        <div className='threeDiv'>
                            <div className='threeDiv1'>
                                Full Time
                            </div>
                            <div className='threeDiv2'>
                                FEA Analysis
                            </div>
                            <div className='threeDiv3'>
                                Hyderabad
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h6>
                                Minimum Qualification
                            </h6>
                            <ul>
                                <li>Bachelor's degree in Design or equivalent practical experience.</li>
                                <li>Experience collaborating with multidisciplinary teams of Designers, Researchers, Engineers, Content Strategists, and Product Managers throughout the
                                    design process.
                                </li>
                                <li>
                                    Portfolio highlighting multiple projects that demonstrates experience crafting digital interfaces, and designing consumer-focused, app/mobile products.
                                </li>
                            </ul>
                        </div>
                        <div className='btnsCareer'>
                            <button className='bt1Career'>
                                learn more
                            </button>
                            <button onClick={handleClickOpen} className='bt2Career'>
                                Apply Now
                            </button>
                        </div>
                    </div>
                    {/* </MDBCard> */}
                </div>

                <div className='glassdoor'>
                    <div className='glassdoor2'>
                        <h1>
                            Latest Reviews on Glassdoor
                        </h1>
                    </div>
                    <div className='glassdoor3'>
                        <div className='glassdoor4'>
                            <img src='./Images/gobeyond/Group 427321323.png' width="318" height="169" />
                        </div>
                        {/* <div className="gdWidget">
                        <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-combo&t.s=w-m&t.a=c&format=700x400&employerId=5163282&activeTab=R" target="_gd">
                            SmartGig Salaries
                        </a>
                        | More details for
                        <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-jobs&t.s=w-m&t.a=c&employerId=5163282" target="_gd">
                            SmartGig Jobs
                        </a>
                        | <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-m&t.a=c&employerId=5163282" target="_gd">
                            SmartGig Reviews
                        </a>
                        | <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-interview&t.s=w-m&t.a=c&employerId=5163282" target="_gd">
                            SmartGig Interview Questions &amp; Reviews
                        </a>
                    </div> */}
                        {/* <div class="gdWidget"><a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-m&t.a=c&format=300x250&employerId=5163282" target="_gd">SmartGig Reviews</a> | <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-jobs&t.s=w-m&t.a=c&employerId=5163282" target="_gd">SmartGig Jobs</a> | <a href="https://www.glassdoor.com/Reviews/index.htm?t.s=w-m&t.a=c" target="_gd">Company reviews</a> from employees</div><script src="https://www.glassdoor.com/static/js/api/widget/v1.js"></script> */}
                        <div className="gdWidget">
                            <a href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-m&t.a=c&format=400x250&employerId=5163282" target="_gd">
                                SmartGig Reviews
                            </a> |
                        </div>
                        {/* <div>
                        {star}
                    </div> */}
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}
