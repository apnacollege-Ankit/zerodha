import React from 'react';

function Universe() {
    return (  
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4'>
                    <img src="media/images/zerodhaFundhouse.png"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>

                <div className='col-4'>
                    <img src="media/images/sensibullLogo.svg"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>

                <div className='col-4'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>

                <div className='col-4'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>

                <div className='col-4'>
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>

                <div className='col-4'>
                    <img src="media/images/smallcaseLogo.svg"/>
                    <p className='text-small text-muted'>thematic investment platform</p>
                </div>
                <button className="p-3 btn btn-primary" style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;