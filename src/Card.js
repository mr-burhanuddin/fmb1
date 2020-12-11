import React from 'react';
import './Card.css'


function Card({ src, title, Desert, Bread, Dish ,Rice, Curry }) {

    
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <ul>
                 <div>
                <h3> <img className="card__img" alt="rice" src="https://www.flaticon.com/svg/static/icons/svg/2971/2971540.svg" /> &nbsp;{Desert}</h3> 
                </div>
                <div>
                <h3><img className="card__img" alt="rice" src="https://www.flaticon.com/svg/static/icons/svg/3014/3014502.svg" />&nbsp;{Bread}</h3>
                </div>
                <div>
                <h3> <img className="card__img" alt="rice" src="https://www.flaticon.com/svg/static/icons/svg/1046/1046751.svg" />&nbsp;{Dish}</h3> 
                </div>
                <div>
                <h3><img className="card__img" alt="rice" src="https://www.flaticon.com/svg/static/icons/svg/2934/2934108.svg" />&nbsp;{Rice}</h3>
                </div>
                <div>
                <h3><img className="card__img" alt="rice" src="https://www.flaticon.com/svg/static/icons/svg/894/894870.svg" />&nbsp;{Curry}</h3>
                </div>
                </ul>
            </div>
            <div className="card__button">
                
            </div>
        </div>
    )
}

export default Card
