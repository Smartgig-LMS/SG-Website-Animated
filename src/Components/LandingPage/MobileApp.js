import React from 'react'

export default function MobileApp() {
    return (
        <div className='TestingContainer row vh-100 pl-5'>
            <div className='col ml-4 pr-0'>
                <div className='MobApp1' >
                    <div>
                        <img src='./Images/gobeyond/Mobile app Development Icon.svg' width="150" height="50" />
                    </div>
                    <div className='webhead'>
                        <h1 style={{ color: "#2563AC", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                            Pave the way through<br />
                        </h1>
                        <h1 style={{ color: "#F38211", fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2 futursticHeading'>
                            Futuristic Mobile Apps<br />
                        </h1>
                    </div>
                    <span>
                        As mobile applications continue to rise as a gateway towards
                        success in this digital realm, we signify the need for crafting them
                        with the vital prospects of high performance, user friendly and
                        visually stunning to captivate audiences and drive business
                        growth as our team of expertise developers  everage Mobile App
                        Development to make your easiest portal to enrich with
                        excellence.
                    </span>

                    <div className='d-flex mt-5'>
                        <div>
                            <div>
                                <div>
                                    <img src='./Images/gobeyond/IOS Icon.png' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        IOS
                                    </h6>
                                </div>
                            </div>
                            <p className='appsDescription'>
                                Experience excellence on iOS <br />
                                with high performance, and <br />
                                visually stunning apps
                            </p>
                        </div>
                        <div className='ml-3'>
                            <div >
                                <div>
                                    <img src='./Images/gobeyond/Adndroid Icon.png' />
                                </div>
                                <div className='mt-2'>
                                    <h6 style={{ fontWeight: "700" }}>
                                        Android
                                    </h6>
                                </div>
                            </div>
                            <p className='appsDescription'>
                                Unlock exponential growth <br />
                                with our expert Android <br />
                                app development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col ml-3'>
                <div className='MobApp2 img-left'>
                    <img src='./Images/gobeyond/7xm289613.png' />
                </div>
            </div>
        </div>
    )
}
