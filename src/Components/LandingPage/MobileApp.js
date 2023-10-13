import React from 'react'

export default function MobileApp() {
    return (
        <div className='TestingContainer'>
            <div className='col-lg-7'>
                <div>
                    <img src='./Images/gobeyond/Mobile app Development Icon.svg' width="150" height="50" />
                </div>
                <div >
                    <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className='mt-2'>
                        Pave the way through<br />
                    </h1>
                    <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className='webhead mb-3 futursticHeading'>
                        Futuristic Mobile Apps<br />
                    </h1>
                </div>
                <span>
                    As mobile applications continue to rise as a primary mode of Digital Accessibility, we signify the need for crafting them with the vital prospects of high performance, user-friendliness, and visually stunning designs to captivate audiences. Whether native or hybrid, our aim is to deliver enhanced user experiences, functionality, security, and personalized apps swiftly, promoting business growth.
                </span>

                <div className='d-flex mt-5 text-center'>
                    <div className="mb-2 mr-lg-2 card p-3 w-100" >
                        <div>
                            <div className='mb-2'>
                                <img src='./Images/gobeyond/AplleIOS.svg' />
                            </div>
                            <h6 style={{ fontWeight: "700" }}>
                                IOS
                            </h6>
                        </div>
                        <p >
                            Experience excellence on IOS
                            through high performance, and
                            visually stunning apps
                        </p>
                    </div>
                    <div className="mr-lg-2 card p-3 w-100">
                        <div >
                            <div className='mb-2'>
                                <img src='./Images/gobeyond/Android.svg' />
                            </div>
                            <h6 style={{ fontWeight: "700" }}>
                                Android
                            </h6>
                        </div>
                        <p >
                            Unlock exponential growth
                            with our expert Android
                            app development services
                        </p>
                    </div>
                </div>
                <div className='mt-2 cloudcontents mb-2 card'>

                    <div>
                        <div>
                            <img className='mobileAppIcon' src='./Images/gobeyond/Flutter.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/PhoneGap.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/node.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/xamarin.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/corona.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/Ionic.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/Titanium.png' />

                            <img className='mobileAppIcon' src='./Images/gobeyond/React.png' />
                        </div>
                    </div>


                </div>

            </div>
            <div className='col-lg-5 img-left'>
                <img src='./Images/gobeyond/MobileAppSmartphone1.png' />
            </div>
        </div>
    )
}
