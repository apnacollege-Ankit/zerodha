import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&Q.'/><br/>
                    <a href=''>Track account opening </a>&nbsp;&nbsp;
                    <a href=''>Track segment activation</a>&nbsp;&nbsp;
                    <a href=''>Intraday margins </a>&nbsp;&nbsp;
                    <a href=''>Kite user manual</a>&nbsp;&nbsp;
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li>
                        <a href='' style={{textDecoration:"none"}}>Quantity Freeze Limits for Indices from May 02, 2025</a>
                        </li>
                        <li><a href='' style={{textDecoration:"none"}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;