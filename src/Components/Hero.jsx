import React from 'react';
import pozarenew from '../assets/pozarenew.jpg';
import "../Styles/Hero.css"
import paper from '../assets/paper.jpg'
import CV from '../assets/Resume Cornel Georgian Zamfir - Copy.pdf'

export default function Hero() {
    return (
        <div className='hero--bg'>
        <div className='hero'>
                <div className='main--text'>
                    <h1><span className='main--text--junior--frontend'>Junior FrontEnd</span><br /> <span className='main--text--developer'> Developer</span></h1>
                    <h3>I am a Junior Frontend Developer, <br />excited to learn new things everyday, <br />trying to find a friendly environment to improve my skills.</h3>
                    <a href="https://download1590.mediafire.com/niyrlvs4t22gKzTUIITd1yzoD--Abqfyn-ozd7NqthtaLneiW0H-ud5A79ZTXNQ8LOOrV8ayahtoydm5XTwB2cWBHVc_IiF_Gxjqqn2X1WJZxhjhFFOdulBRVgfywJ_N9r8pgDflqCr4TsmGXEs0nmWPU_wrgEwHS4EfoIQvcI4/um2786voh74wgql/Resume+Cornel+Georgian+Zamfir.pdf" download={CV}><button>Download CV</button></a>
                </div>
          <img src={pozarenew} className='main--img'/>
          
        </div>
        </div>
    )
}