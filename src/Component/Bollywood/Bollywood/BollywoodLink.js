import React from 'react';
import BollyImg from '../Bollywood/bollyImg.jpg';

function BollywoodLink(props) {
    return (
        <div className='SubLinkContents'>
            <div className='NavbarInnerHeadings'>Vicky Kaushal and Katrina Kaif's wedding</div>
            <hr className='horizontalLineStyling'/>
            <div><img src={BollyImg} alt='' className='reactCoverImg'></img></div>
            <div>
                <p>
                A source close to the development tells ETimes, "Vicky Kaushal and Katrina Kaif's wedding is going to be a private, intimate affair with only immediate family and close friends in attendance. The couple is excited to share their joy with their friends and well-wishers in the industry too. We hear they will be hosting a celebration for the industry at a much later date."
                </p>
                <p>
                The 'intimate' wedding will reportedly have 120 guests in attendance. The District Collector of Sawai Madhopur confirmed the news to media persons while stating that all COVID-19 protocols will have to be followed and insisted that all the guests need to be fully vaccinated.
                </p>
                <p>
                "We have been informed by organisers that a total of 120 guests are invited to the wedding and the events will take place between December 7 to December 10," Rajendra Kishan said.
                </p>
                <p>
                As per our sources, the wedding festivities will kick off with a sangeet on December 7, followed by mehendi on December 8 and the wedding on December 9. The celebrations will conclude with a reception on December 10.
                </p>
                <p>
                To ensure foolproof security, 100 bouncers from Jaipur have been hired and personnel from the Rajasthan Police will also be deployed outside the wedding venue.
                </p>
            </div>
        </div>
    );
}

export default BollywoodLink;