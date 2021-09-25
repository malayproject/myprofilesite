import React from 'react'
import star from '../star-symbol.svg'
import blackStar from '../black-star.svg'

function Skills() {
    return (
        <div className='Skills'>
            Skills:
            <div className='SkillsContainer'>
                <div className='SkillContainer'>
                <div className='NameContainer'>
                        DSA
                    </div>
                    <div className='RatingContainer'>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                    </div>
                </div>
                <div className='SkillContainer'>
                <div className='NameContainer'>
                        Javascript
                    </div>
                    <div className='RatingContainer'>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                    </div>
                </div>
                <div className='SkillContainer'>
                    <div className='NameContainer'>
                        React
                    </div>
                    <div className='RatingContainer'>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                    </div>
                </div>
                <div className='SkillContainer'>
                <div className='NameContainer'>
                        Redux
                    </div>
                    <div className='RatingContainer'>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={star} style={{height: '20px'}} alt='star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                        <img src={blackStar} style={{height: '20px'}} alt='black star logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
