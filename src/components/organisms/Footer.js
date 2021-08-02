import React from "react";

/**
 * Footer component
 */
const Footer = () => {
    return (
        <footer >
            <div className="row justify-content-center">
                <div className="col col-md-6">
                    <h2>About</h2>
                    <p>This is a simple demo app utilizing third party APIs to predict a name.</p>
                    <p>
                        Front end tech stack : <code>React</code>, <code>Redux</code>,  <code>jest</code>, <code>testing-library</code>.
                    </p>
                    <p>
                        Code can be found in :
                        <a href="https://github.com/marsonparulian/name-analyzer"
                            target="_blank" rel="noreferrer"> Github repository </a>
                    </p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;
