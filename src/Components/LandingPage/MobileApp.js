import React from 'react'

export default function MobileApp() {
    return (
        <div className='TestingContainer col-12 pt-5 vh-100'>
            <div className='MobApp1' >
                <div>
                    <img src='./Images/gobeyond/Mobile app Development Icon (1).png' width="150" height="50" />
                </div>
                <h1 style={{ fontWeight: "700", width: "458", height: "124" }} className=' mb-3 mt-2'>
                    We make it effortless<br />
                    Mobile Apps<br />
                </h1>
                <span>
                    As mobile applications continue to rise as a gateway towards <br />
                    success in this digital realm, we signify the need for crafting them<br />
                    with the vital prospects of high performance, user friendly and <br />
                    visually stunning to captivate audiences and drive business<br />
                    growth as our team of expertise developers  everage Mobile App <br />
                    Development to make your easiest portal to enrich with<br />
                    excellence.
                </span>
                <hr />
                <div className='d-flex'>
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
                        <p>
                            Get a powerful analytics tool<br /> in your
                            own brand name.
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
                        <p>
                            Easily converse with
                            your data <br />using
                            everyday language.
                        </p>
                    </div>
                </div>
            </div>
            <div className='MobApp2'>
                <img src='./Images/gobeyond/Image.png' />
            </div>
        </div>
    )
}
