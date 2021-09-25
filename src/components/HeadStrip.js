import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function HeadStrip() {

    const [icon, setIcon] = useState('fa-angle-left')
    const [show, setShow] = useState(false)
    let handleClick = e=>{
        if(icon === 'fa-angle-left')    {
            setIcon('fa-angle-right') 
        }
        else setIcon('fa-angle-left')
        setShow(!show)
        
    }
    return (
        <div className="HeadStrip">
            {show? <div className='HSContents'>
                    <Link to='/' className='tabs'>Intro</Link>
                    <Link to='/Skills' className='tabs'>Skills</Link>
                    <Link to='/Contacts' className='tabs'>Contacts</Link>
                </div>
            : null}
            <i className={`fas ${icon}`} style={{fontSize : 'xx-large'}} onClick={e => handleClick()}></i>
        </div>
    )
}



export default HeadStrip
