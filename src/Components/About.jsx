import React, {useEffect} from 'react';
import '../Styles/About.css';
import bootstrap from '../assets/bootstrap.png';
import HTML from '../assets/HTML.png';
import JS from '../assets/JS.png';
import REACT from '../assets/REACT.png';
import CSS from '../assets/CSS.png';
import NEXT from '../assets/next-js.svg';
import GITHUB from '../assets/github.png';

export default function About() {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller")

        if (!window.matchMedia("(prefers-reduced-motions: reduce)").matches) {
            addAnimation();
        }
    
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
    
                const scrollerInner = scroller.querySelector(".scroller--inner");
                const scrollerContent = Array.from(scrollerInner.children);
    
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                })
            });
        }
    }, []);
    

    return (
        <div className='About--section' id='About'>    


        <div className='about--everything'>
            <div className='about--text'>
                <h1 className='about--title'>About <span className='title--span'>Me</span></h1>
                <p className='about--p'>&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Zamfir Georgian, a 20-year-old web development<br /> enthusiast from Romania. My passion for creating dynamic<br /> and user-friendly websites drives my continuous learning and growth<br /> in the field. I'm eager to apply my skills and <br /> creativity to real-world projects and am actively seeking<br /> a junior web development position. Let's build something amazing together!
                </p>
            </div>
            
        <div className='scroller--holder'>
            <div className='scroller'>
            <ul className='scroller--inner'>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'><img src={HTML} /></a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'><img src={CSS}/></a>  </li>  
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'><img src={JS}/></a></li>
                <li><a href="https://react.dev/" target='_blank'><img src={REACT}/></a></li>
                <li><a href="https://getbootstrap.com/" target='_blank'><img src={bootstrap}/></a></li>
                <li><a href="https://nextjs.org/" target='_blank'><img src={NEXT}/></a></li>
                <li><a href="https://github.com/" target='_blank'><img src={GITHUB}/></a></li>
            </ul>
            </div>
        </div>

        </div>
            
        </div>
    )
}