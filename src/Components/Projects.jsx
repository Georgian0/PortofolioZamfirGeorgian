import React from 'react';
import '../Styles/Projects.css';
import FLIPBOARD from '../assets/FLIPBOARD.png'

export default function Projects() {
    return (
        <div className='projects' id='Projects'>
                <h1>Projects</h1>

                <div className='project--1'>
                    
                    <img src={FLIPBOARD} width={400}/>

                    <div className='project--1--text'>
                        <h2>Flipboard</h2>
                        <p>Flipboard is a news aggregator and social network aggregation company based in Palo Alto, <br /> California, with offices in New York, Vancouver, and Beijing. Its software, also known as Flipboard,<br /> was first released in July 2010. It aggregates content from social media, news feeds, photo sharing<br /> sites, and other websites, presents it in magazine format, and allows users to "flip" through the articles,<br /> images, and videos being shared.</p>
                        <a  href="https://flipboard-project1.netlify.app/" target='_blank'><button>Visit page</button></a>
                    </div>

                    
                </div>

                    <div className='working'>
                        <h2>Currently working on more projects...</h2>
                    </div>
        </div>
    )
}