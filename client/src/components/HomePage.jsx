import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button'
const HomePage = () => {
    return (
        <>
            <div className='Home_page'>
                <div className='Home_Heading_content'>

                    <p style={{ textAlign: 'center' }}>Combine fine images</p>
                    <p style={{ textAlign: 'center' }}> To represent a product</p>

                </div>
                <div className='Info_divs'>
                    <div className="wrapper">
                        <div className="home-hero">
                            <div className="feature">
                                <h3>Image title</h3>
                            </div>
                            <div className="special">
                            <h3>Caption</h3>
                            </div>
                            <div className="amazing">
                            </div>
                            <div className="news">
                            </div>
                            <div className="photos">
                            </div>
                            <div className="cta">
                                <a className="spam-button" href="#a">Learn more</a>
                            </div>



                        </div>
                    </div>
                </div>
                <div >
                    <div className='Home_Heading_content'><p style={{ textAlign: 'center' }}>Affordable pricing</p></div>
                    <div className='Home_Heading_content_small'><p style={{ textAlign: 'center' }}>Bill me monthly or Yearly</p></div>
                    <div className='Pricing_div'>
                        <div className='Pricing_card'>
                            <p className='pricing_heading'> Like a pussy</p>
                            <p className='Price'> Free/forever</p>
                            <p> <CheckCircleIcon /> component driven system</p>
                            <p>  <CheckCircleIcon /> sales-boosting landing page</p>
                            <p> <CheckCircleIcon />  Awesome feather icons pack</p>
                            <p> <Button style={{ textAlign: 'center' }} variant="outlined">Try for free </Button></p>
                            
                        </div>
                        <div className='Pricing_card'>
                            <p className='pricing_heading'> individual</p>
                            <p className='Price'> $24/month</p>
                            <p> <CheckCircleIcon /> component driven system</p>
                            <p> <CheckCircleIcon /> sales-boosting landing page</p>
                            <p>  <CheckCircleIcon /> Awesome feather icons pack</p>
                            <p>  <CheckCircleIcon /> Themed into three different styles</p>
                            <p>  <CheckCircleIcon /> Will help to learn figma</p>
                            <p>   <Button style={{ textAlign: 'center' }} variant="outlined">Regural lisence</Button></p>
                           
                           
                        </div>
                        <div className='Pricing_card'>
                            <p className='pricing_heading'> Corporate</p>
                            <p className='Price'> $12/Editor</p>
                            <p> Corporate</p>
                            <p> <CheckCircleIcon /> component driven system</p>
                            <p> <CheckCircleIcon /> sales-boosting landing page</p>
                            <p>  <CheckCircleIcon /> Awesome feather icons pack</p>
                            <p>  <CheckCircleIcon /> Themed into three different styles</p>
                            <p>  <Button  style={{ textAlign: 'center' }} variant="outlined">Extended lisence</Button></p>
                            
                           
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
};

export default HomePage;
