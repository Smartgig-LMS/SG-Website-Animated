import React from 'react'
import Homevideo from './HomeVideo';

export default function GoBeyond() {

    const [pageName, setPageName] = React.useState("homeVideo");

    return (
        <div>
            <div className="main-homesection" id={'homeVideo'}>
                <Homevideo pageName={pageName} />
            </div>
        </div>
    )
}
