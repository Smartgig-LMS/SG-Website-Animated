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
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
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
                setOpen(false);
                // toast.success("Email Sent Successfully");
            }, (error) => {
                // show the user an error   
                console.log(error, "failed");
                window.alert("Can't Sent Email");
                setOpen(false);
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
                    <iframe width="940px" height="940px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=yGm9mQ7PR0ey76f0YV3EO1u5dVf9_KVDjPCkcvodfsBUOFRDVlhBOTFQQjZZNVRIUjhGUEtXTjc3Vi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                </Dialog >

                <Dialog open={open2} onClose={handleClose} fullWidth maxWidth="md">
                    <iframe width="940px" height="940px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=yGm9mQ7PR0ey76f0YV3EO1u5dVf9_KVDjPCkcvodfsBUNEdGUjBHWEE2S0MxQVRMVlU0TFhTNTRPRi4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>                </Dialog >
            </div >

            <div className='contactPg'>
                <div className='firstContact'>
                    <h1 className='ContactHeadnig'>
                        How can we help
                        you?
                    </h1>
                </div>
                <div className='secondContact'>
                    <p>
                        We are happy to assist you in providing comprehensive services, backed by a dedicated team of professionals<br /> who are committed to going the extra mile for you, around the clock, to enhance your experience with unwavering efficiency.<br />
                        {/* Contact us:
                        http://www.smartgig.tech<br />

                        +91 8772999711 */}
                    </p>
                    <h3
                    >I’m Looking for
                    </h3>
                </div>
                <div className='thirdContact'>
                    <div className='thirdContact1'>
                        <div className='card shadow' style={{ height: "248px", width: "286px", cursor: "pointer" }}>
                            <div onClick={handleClickOpen}>
                                <h5>
                                    Request for service
                                </h5>
                            </div>
                        </div>

                        <div className='card shadow' style={{ height: "248px", width: "286px" }}>
                            <a href='https://infionic.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>
                                <h5>
                                    More about Infionic Product
                                </h5>
                            </a>
                        </div>
                        <div className='card shadow' style={{ height: "248px", width: "286px" }}>
                            <a href='https://Occultcybersecurity.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>
                                <h5>
                                    More about Occult Cyber Security
                                </h5>
                            </a>
                        </div>

                        <div className='card shadow' style={{ height: "248px", width: "286px", cursor: "pointer" }}>
                            <div onClick={handleClickOpen2}>
                                <h5>
                                    Career related Queries
                                </h5>
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
                                            <h4>Bengaluru</h4>
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
