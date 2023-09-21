import React, { useRef } from 'react'
import {
    MDBCard,
} from 'mdb-react-ui-kit';
import Footer from '../LandingPage/Footer';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, Typography } from '@mui/material';
// import Select from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { parse, stringify, toJSON, fromJSON } from 'flatted';

export default function ContactUsPage() {

    // const clientId = '15739ebc-b8af-452f-af9e-4c3dade66b72';
    // const clientSecret = 'c33814ab-aeb1-4a0d-8e12-cdf15454d82e';

    const formVar = useRef();
    const [flag1, setFlag1] = React.useState(true);
    const [flag2, setFlag2] = React.useState(true);
    const [flag3, setFlag3] = React.useState(true);
    const [flag4, setFlag4] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm("service_i6lti6c", "template_07tu2i8", formVar.current, "MI_VKeA2nr8s0vNpD")
            .then((result) => {
                // show the user a success message
                console.log(result, "success");
                window.alert("Email Sent Successfully");
                navigate("/contact");
                // toast.success("Email Sent Successfully");
            }, (error) => {
                // show the user an error   
                console.log(error, "failed");
                window.alert("Can't Sent Email");
                // toast.warning("Can't Sent Email")
            });
    };

    const handleClickProduct = () => {
        navigate("/Partnerships")
    };

    const handleClickCareer = () => {
        navigate("/career")
    };

    return (
        <>
            <div>
                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                    {/*  xs, sm, md, lg , xl for width*/}
                    {/* <form action="swadeepdwivedia2@gmail.com" method="post" enctype="text/plain"> */}
                    <form ref={formVar} onSubmit={handleSubmit}>
                        {/* <form > */}
                        <div className='modalOnContact'>
                            <img src='./Images/gobeyond/Group 427321194 (3).png' width="120" height="35px" />
                            <DialogTitle className='DialogTitle'>
                                <h1>
                                    Request for services
                                </h1>
                            </DialogTitle>
                            <DialogContent>
                                <h5 style={{ fontWeight: "800" }}>
                                    Customer satisfaction is our priority.
                                    Contact us for a seamless experience.
                                </h5>
                                <DialogContentText >
                                    We appreciate your attention to the mandatory fields marked with an asterisk(*).
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    required
                                    label="Full Name"
                                    type="text"
                                    name="full_name"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    name="phone_no"
                                    id="Phone"
                                    required
                                    label="Phone"
                                    // pattern="[0-9]*"
                                    // inputProps={{
                                    //     maxLength: 10
                                    // }}
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    name="email_address"
                                    id="email"
                                    required
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    name="company"
                                    id="name"
                                    label="Company"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    name="details"
                                    id="details"
                                    label="To enhance our ability to assist you, kindly provide more details or context relevant to your request."
                                    type="text"
                                    multiline
                                    rows={3}
                                    variant="standard"
                                    fullWidth
                                />

                                {/* <TextField
                                    margin="dense"
                                    name="relation"
                                    id="relation"
                                    label="RELATIONSHIP WITH SMARTGIG"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                /> */}
                                {/* <label style={{ marginTop: "1rem", textAlign: "start" }}>RELATIONSHIP WITH SMARTGIG</label> */}
                                {/* <FormControl fullWidth style={{ marginTop: "2rem" }}>
                                    <InputLabel id="demo-simple-select-label">RELATIONSHIP WITH SMARTGIG</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Employee</MenuItem>
                                    <MenuItem value={20}>Client</MenuItem>
                                </Select>
                            </FormControl> */}

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
            </div >

            <div className='contactPg'>
                <div className='firstContact'>
                    <h1 className='ContactHeadnig'>
                        How can we help<br />
                        you?
                    </h1>
                </div>
                <div className='secondContact'>
                    <h3
                    >I’m Looking for
                    </h3>
                    <p>
                        Please select your area of interest below. An <br />
                        SmartGig representative will contact you shortly<br />
                        after receiving your request.
                    </p>
                </div>
                <div className='thirdContact'>
                    <div className='thirdContact1'>
                        <div className='card shadow' style={{ height: "130px", width: "500px", cursor: "pointer" }}>
                            <div onClick={handleClickOpen}>
                                <h6>
                                    Request for service
                                </h6>
                            </div>
                        </div>

                        <div className='card shadow' style={{ height: "130px", width: "500px" }}>
                            <a href='https://infionic.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>
                                <h6>
                                    More about infionic product
                                </h6>
                            </a>
                        </div>
                    </div>

                    <div className='thirdContact2'>
                        <div className='card shadow' style={{ height: "130px", width: "500px" }}>
                            <a href='https://Occultcybersecurity.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>
                                <h6>
                                    More about occult cyber security
                                </h6>
                            </a>
                        </div>

                        <div className='card shadow' style={{ height: "130px", width: "500px", cursor: "pointer" }}>
                            <div onClick={handleClickCareer}>
                                <h6>
                                    Career related Queries
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='forthContact'>
                    <div className='cardBlue'>
                        <h2>Locations</h2>
                        <h5>Explore our service offerings and subsidiaries</h5>
                        <div className='AddressImg'>
                            <div className='AddressText1' onMouseEnter={() => setFlag1(false)} onMouseLeave={() => setFlag1(true)}>
                                {
                                    flag1
                                        ?
                                        (
                                            <h4>Tirupati</h4>
                                        )
                                        :
                                        (
                                            <div className='real1'>
                                                <h5>
                                                    Address:
                                                </h5>
                                                <p>
                                                    306, 3rd Floor, Eden ECCO Greens, <br />
                                                    Karakambadi Rd, Madhav Puram, <br />
                                                    Tirupati, Andhra Pradesh 517507
                                                </p>
                                            </div>
                                        )
                                }
                            </div>
                            <div className='AddressText2' onMouseEnter={() => setFlag2(false)} onMouseLeave={() => setFlag2(true)}>
                                {
                                    flag2
                                        ?
                                        (
                                            <h4>Banglore</h4>
                                        )
                                        :
                                        (
                                            <div className='real2'>
                                                <h5>
                                                    Address:
                                                </h5>
                                                <p>
                                                    306, Brigade IRV Centre, <br />
                                                    Nallurhalli, Whitefield, <br />
                                                    Banglore, Karnataka 560066
                                                </p>
                                            </div>
                                        )
                                }
                            </div>
                            <div className='AddressText3' onMouseEnter={() => setFlag3(false)} onMouseLeave={() => setFlag3(true)}>
                                {
                                    flag3
                                        ?
                                        (
                                            <h4>Hyderabad</h4>
                                        )
                                        :
                                        (
                                            <div className='real3'>
                                                <h5>
                                                    Address:
                                                </h5>
                                                <p>
                                                    4th floor, Sanali Spazio, Software <br />
                                                    Units Layout, Madhapur, <br />
                                                    Hyderabad, TS 500081
                                                </p>
                                            </div>
                                        )
                                }
                            </div>
                            <div className='AddressText4' onMouseEnter={() => setFlag4(false)} onMouseLeave={() => setFlag4(true)}>
                                {
                                    flag4
                                        ?
                                        (
                                            <h4>Singapore</h4>
                                        )
                                        :
                                        (
                                            <div className='real4'>
                                                <h5>
                                                    Address:
                                                </h5>
                                                <p>
                                                    105 Cecil Street, #13-00, The <br />
                                                    Octagon, Singapore 069534 <br />
                                                </p>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
