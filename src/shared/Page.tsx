import {StaticImage} from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";
import "../css/index.scss";

interface MetaProps {
    title?: string;
    description?: string;
    keywords?: string[];
    imageUrl?: string;
}
function Meta({title, description, keywords}: MetaProps): JSX.Element {
    const defaults = {
        title: "Linear Viewer",
        description: "Linear Viewer"
    };

    const actual = {
        title: title ? `${title} | ${defaults.title}` : defaults.title,
        description: description || defaults.description,
        keywords: keywords?.join(", ")
    };
    return (
        <Helmet>
            <html lang="en" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{actual.title}</title>

            <meta name="description" content={actual.description} />
            {actual.keywords && <meta name="keywords" content={actual.keywords} />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={actual.title} />
            <meta property="og:description" content={actual.description} />

            <meta name="twitter:title" content={actual.title} />
            <meta name="twitter:site" content="@lexisother" />
            <meta name="twitter:creator" content="@lexisother" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={actual.description} />
        </Helmet>
    );
}

function Navigation(): JSX.Element {
    return (
        <div className="navbar grid grid-cols-1 md:grid-cols-3 justify-items-center bg-navbg text-navfg px-24 py-4 shadow-md mb-4">
            <div className="flex items-center">
                {/* I promise I would've used a StaticImage here but it just doesn't fucking work. */}
                <img
                    className="inline h-6 mr-2 rounded"
                    src="https://avatars.githubusercontent.com/u/91933425?s=200&v=4"
                />
                <p className="inline">linear</p>
            </div>
            <a
                style={{textDecoration: "none", color: "inherit"}}
                className="navbar-back <md:hidden group flex items-center pr-2"
                href="https://cumcord.com"
            >
                <StaticImage
                    className="navbar-back-image rounded transition-all duration-250 opacity-0 -mr-6 w-0 h-0 group-hover:opacity-100 group-hover:mr-2 group-hover:w-6 group-hover:h-6 group-focus:opacity-100 group-focus:mr-2 group-focus:w-6 group-focus:h-6"
                    alt="Cumcord logo"
                    src="../images/cumcord.png"
                />
                {/*<img
                    className="navbar-back-image rounded transition-all duration-250 opacity-0 -mr-6 w-0 h-0 group-hover:opacity-100 group-hover:mr-2 group-hover:w-6 group-hover:h-6 group-focus:opacity-100 group-focus:mr-2 group-focus:w-6 group-focus:h-6"
                    src="https://avatars.githubusercontent.com/u/81397549?s=200&v=4"
                />*/}
                back to cumcord
            </a>
            <a className="flex items-center" href="https://github.com/Cumcord" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    version="1.1"
                    className="navbar-github h-6 fill-navfg <md:hidden"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>
            </a>
        </div>
        /*<div className="grid grid-cols-1 md:grid-cols-3 justify-items-center bg-navbg text-navfg w-full px-24 py-4 shadow-md mb-4">
            <div>
                <StaticImage className="inline h-6 mr-2 rounded" alt="Condom logo" src="../images/condom.png" />
                <p className="inline">cumdump</p>
            </div>
            <a className="<md:hidden group flex items-center pr-2" href="https://cumcord.com">
                <StaticImage
                    className="rounded transition-all duration-250 opacity-0 -mr-6 w-0 h-0 group-hover:opacity-100 group-hover:mr-2 group-hover:w-6 group-hover:h-6 group-focus:opacity-100 group-focus:mr-2 group-focus:w-6 group-focus:h-6"
                    alt="Cumcord logo"
                    src="../images/cumcord.png"
                />
                back to cumcord
            </a>
            <a href="https://github.com/Cumcord" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    version="1.1"
                    className="h-6 fill-navfg <md:hidden"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>
            </a>
        </div>*/
    );
}

interface PageProps extends MetaProps {
    children: React.ReactNode;
}
const Page = ({children, ...props}: PageProps): JSX.Element => {
    return (
        <div className="page-container font-mono">
            <Meta {...props} />
            <Navigation />

            <main>{children}</main>
        </div>
    );
};

export default Page;
