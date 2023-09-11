import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate();
    const navigateFn = () => {
        navigate("/products");
        console.log("nag");
    }
    const navigateFn2 = () => {
        navigate("/culture");
        console.log("nag2");
    }
    const navigateFn3 = () => {
        navigate("/carrer");
    }
    const navigateFn4 = () => {
        navigate("/contact");
    }
    const navigateFnLP = () => {
        navigate("/landingpage");
    }


    return (
        <div className='Navsection'>
            <div className='d-flex' style={{ justifyContent: "space-between" }}>
                <div style={{ marginLeft: "30px" }} onClick={navigateFnLP}>
                    <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
                </div>
                <div className='d-flex' style={{ justifyContent: "space-between", fontWeight: "500", marginTop: '19px', paddingRight: "60px" }}>
                    <div className='ml-4' onClick={navigateFn}>
                        Products
                    </div>
                    <div className='ml-4' onClick={navigateFn2}>
                        Culture
                    </div>
                    <div className='ml-4' onClick={navigateFn3}>
                        Career
                    </div>
                    <div className='ml-4' onClick={navigateFn4}>
                        Contact Us
                    </div>
                </div>
            </div>
        </div>
    )
}
