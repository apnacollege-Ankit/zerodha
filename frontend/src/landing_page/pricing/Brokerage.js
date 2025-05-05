import React from 'react';

function Brokerage() {
    return (  
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-8 p-4 text-left'>
                    <a href='' style={{textDecoration: "none"}}><h3 className='fs-5'>Brokerage calulator</h3></a>
                    <ul style={{textAlign: "left", lineHeight: "2.5"}} className='text-muted'>
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of 
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹50 + GSt per order</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{textDecoration: "none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;