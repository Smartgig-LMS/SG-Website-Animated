import React from 'react'
import OurClients from './ClientPage'
import GoBeyond from './GoBeyond';
import NavBar from './NavBar';
import Layout from './Layout';
import WebDev from './WebDev';
import CloudDevops from './CloudDevops';
import MobileApp from './MobileApp';
import Testing from './Testing';
import Integration from './Integration';
import Footer from './Footer';
import LeadershipTeam from './LeadershipTeam';
// import LeadershipTeam from './LeaderShip1';
// import OurTeam from './OurTeam';

export default function LandingPage() {

    const [pageName, setPageName] = React.useState("homeVideo");

    const [active, setActive] = React.useState({
        page: "homeVideo",
        bgColor: "",
    });

    return (
        <div className="main-omesection">
            {/* <Layout title={"- Home"}> */}
            <></>
            <NavBar />
            <GoBeyond />
            <div className='homesection2'>
                <WebDev />
                <CloudDevops />
                <MobileApp />
                <Testing />
            </div>
            <Integration />
            <LeadershipTeam />
            {/* <div className="main-homesection" id='our-team'>
                <OurTeam />
            </div> */}
            <OurClients />
            <Footer />

            {/* </Layout> */}
        </div>
    )
}
