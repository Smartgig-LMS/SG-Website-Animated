import React from 'react'
import OurClients from './ClientPage'
import NavBar from './NavBar';
import Layout from './LayoutPage';
import WebDev from './WebDev';
import CloudDevops from './CloudDevops';
import MobileApp from './MobileApp';
import Testing from './Testing';
import Integration from './Integration';
import Footer from './Footer';
import Homevideo from './HomeVideo';
import LeadershipTeam from './LeadershipTeam';
import { Outlet } from 'react-router-dom';
import LandingPage from './LandingPage';
import DownSection from './DownSection';
// import LeadershipTeam from './LeaderShip1';
// import OurTeam from './OurTeam';

export default function LayoutPage() {

    const [pageName, setPageName] = React.useState("homeVideo");

    const [active, setActive] = React.useState({
        page: "homeVideo",
        bgColor: "",
    });

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <DownSection />
            </div>
        </>
    )
}
