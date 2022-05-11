import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto" id='theFooter'>
            <br/>
            <div className="container justify-content-center">
                <div className="row ">
                    <div className="col-sm-12 ">
                        <p>
                            <a href="https://github.com/yusra-tahir" target="_blank" id="socialButton"><button type="button" className="btn btn-social-icon btn-outline-github"><i className="fa fa-github"></i></button></a>
                            <a href="https://github.com/WalkingZ3d?tab=repositories" target="_blank" id="socialButton"><button type="button" className="btn btn-social-icon btn-outline-github"><i className="fa fa-github"></i></button></a>
                        </p>
                    </div>
                </div>
            </div>       
            <p id="nameEnd">Yusra Tahir & Dan Willis </p>
        </footer>
    )
}

export default Footer;