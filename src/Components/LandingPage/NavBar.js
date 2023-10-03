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
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }


    return (
        <div className='Navsection'>
            <div className='d-flex' style={{ justifyContent: "space-between" }}>
                <div style={{ marginLeft: "30px" }} onClick={navigateFnLP}>
                    <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
                </div>

                <ul className='navbarStyle'>
                    <li className='ml-4' onClick={navigateFnLP} >
                        Home
                    </li>
                    <li className='ml-4' onClick={navigateFn} >
                        Partnerships
                    </li>
                    <li className='ml-4' onClick={navigateFn2} >
                        Culture
                    </li>
                    <li className='ml-4' onClick={navigateFn3} >
                        Career
                    </li>
                    <li className='ml-4' onClick={navigateFn4} >
                        Contact Us
                    </li>
                </ul>
            </div >
        </div >
    )
}
