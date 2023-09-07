import React from 'react'
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <meta property="og:image" content="https://testt.smartgig.tech/favicon.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <title>SmartGig {title}</title>
            </Helmet>

            {children}
        </>
    )
}

Layout.defaultProps = {
    title: "Landing",
    description: "SmartGig",
    keywords: "react",
    author: "SmartGig",
}

export default Layout