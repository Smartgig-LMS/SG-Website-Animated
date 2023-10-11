import React from 'react'
import { useNavigate } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

export default function NavBar() {

    const [isopen, setIsopen] = React.useState(false);
    const navigate = useNavigate();
    const navigateFn = () => {
        setIsopen(false);
        navigate("/partnerships");
    }
    const navigateFn2 = () => {
        setIsopen(false);
        navigate("/culture");
    }
    const navigateFn3 = () => {
        setIsopen(false);
        navigate("/career");
    }
    const navigateFn4 = () => {
        setIsopen(false);
        navigate("/contact");
    }
    const navigateFnLP = () => {
        navigate("/");
        setIsopen(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const handleStateChange = (e) => {
        setIsopen(e.isOpen);
    }

    return (
        <div className='Navsection'>
            <div className='d-flex' style={{ justifyContent: "space-between" }}>
                <div style={{ marginLeft: "30px" }} onClick={navigateFnLP}>
                    <img src='./Images/gobeyond/SmartGig-logo.png' height="70px" width="131px" />
                </div>

                <div className='hamburgerMenuforWeb'>
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
                            Careers
                        </li>
                        <li className='ml-4' onClick={navigateFn4} >
                            Contact Us
                        </li>
                    </ul>
                </div>

                <div className='hamburgerMenu'>
                    <div id="outer-container">
                        <Menu right isOpen={isopen} customBurgerIcon={<img src='./Images/gobeyond/Subtract.svg'></img>}
                            customCrossIcon={<img src='./Images/gobeyond/close.svg' />}
                            onStateChange={(e) => handleStateChange(e)}
                        >
                            <li className='menu-item' onClick={navigateFnLP} >
                                Home
                            </li>
                            <li className="menu-item" onClick={navigateFn} >
                                Partnerships
                            </li>
                            <li className="menu-item" onClick={navigateFn2} >
                                Culture
                            </li>
                            <li className="menu-item" onClick={navigateFn3} >
                                Careers
                            </li>
                            <li className="menu-item" onClick={navigateFn4} >
                                Contact Us
                            </li>
                        </Menu>
                    </div>
                </div>
            </div >
        </div >
    )
}
