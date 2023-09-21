import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate();
    const navigateFn = () => {
        navigate("/Partnerships");
        console.log("nag");
    }
    const navigateFn2 = () => {
        navigate("/culture");
        console.log("nag2");
    }
    const navigateFn3 = () => {
        navigate("/career");
    }
    const navigateFn4 = () => {
        navigate("/contact");
    }
    const navigateFnLP = () => {
        navigate("/");
    }


    return (
        <div className='Navsection'>
            <div className='d-flex' style={{ justifyContent: "space-between" }}>
                <div style={{ marginLeft: "30px" }} onClick={navigateFnLP}>
                    <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
                </div>
                <div className='d-flex' style={{ justifyContent: "space-between", fontWeight: "500", marginTop: '19px', paddingRight: "60px" }}>
                    <div className='ml-4' onClick={navigateFnLP} style={{ cursor: "pointer" }}>
                        Home
                    </div>
                    <div className='ml-4' onClick={navigateFn} style={{ cursor: "pointer" }}>
                        Partnerships
                    </div>
                    <div className='ml-4' onClick={navigateFn2} style={{ cursor: "pointer" }}>
                        Culture
                    </div>
                    <div className='ml-4' onClick={navigateFn3} style={{ cursor: "pointer" }}>
                        Career
                    </div>
                    <div className='ml-4' onClick={navigateFn4} style={{ cursor: "pointer" }}>
                        Contact Us
                    </div>
                </div>
            </div>
        </div>
    )
}
