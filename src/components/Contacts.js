import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import github from '../github.svg'
import linkedIn from '../linkedin.svg'
import gmail from '../gmail.svg'

function Contacts() {
    const [showEmail, setShowEmail] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        
        setShowEmail(!showEmail)

        //window.addEventListener('click', e => {setShowEmail(false); console.log('clicked')})
    }
    return (
        <div className='Contacts' onClick={e => {if(showEmail) setShowEmail(false)}}>
            Feel free to contact me on:
            {
                showEmail ? <div>mailId : malay.s1006@gmail.com</div> : 
                <div className='LogosContainer'>
                    <div onClick={e => handleClick(e)} className='LogoContainer' style={{padding: '10px', margin: '10px'}}><img src={gmail} style={{height: '50px'}} alt='gmail logo'/></div >
                    <Link  to={{pathname: 'https://github.com/malayproject'}} target='_blank' className='LogoContainer' style={{padding: '10px', margin: '10px'}}><img src={github} style={{height: '50px'}} alt='github logo'/></Link>
                    <Link  to={{pathname: 'https://github.com/malayproject'}} target='_blank' className='LogoContainer' style={{padding: '10px', margin: '10px'}}><img src={linkedIn} style={{height: '50px'}} alt='linkedIn logo'/></Link>
                </div>
            }
            
        </div>
    )
}

export default Contacts
