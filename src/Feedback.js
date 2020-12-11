import React from 'react'
import { Button } from '@material-ui/core';
import './Feedback.css'

function Feedback() {
    const feedback = (e) => {
        e.preventDefault();
        window.location.href= "https://docs.google.com/forms/d/e/1FAIpQLScI8X9d8rzfZIYkyqE8elf3HAPPbnQ-AdqBIhzQjk98cIqCKw/viewform?embedded=true";
    }
    const customize = (e) => {
        e.preventDefault();
        window.location.href="https://forms.gle/F9fxheMz7gafHxav5";
    }
    return (
        <div className="feedback">
            <Button className="feedback__button" variant="outlined" color="secondary" type="button" onClick={customize} >Customize Tomorrow's Thali</Button>
            
            <Button className="feedback__button" variant="outlined" color="secondary" type="button" onClick={feedback}>FeedBack For Previous Thali</Button>
            
        </div>
    )
}

export default Feedback
