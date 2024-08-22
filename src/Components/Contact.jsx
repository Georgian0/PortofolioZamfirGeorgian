import React from 'react';
import '../Styles/Contact.css';
import Hero from './Hero';


export default function Contact() {
    return (
        <div className='contact'>

            <div className='outline'>
            <h1 id='Contact'>Contact me!</h1>

            <div className='contact--links'>
                
                <div className='Mail'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/2048px-Mail_%28iOS%29.svg.png' width={36}/>
                    <p>georgian0zamfir@gmail.com</p>
                </div>
                <div className='Linkedin'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png' width={36}/>
                <a href='https://www.linkedin.com/in/georgian-zamfir-7b556a2a8' target='_blank'><p>Linkedin</p></a>
                </div>
                <div className='Phone'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png' width={36}/>
                    <p>+40733366923</p>
                    
                </div>
                
            
                
            </div>
            

            </div>


        </div>
    )
}