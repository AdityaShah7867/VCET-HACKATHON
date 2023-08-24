import React from 'react';
import code from './code.gif'

const Card = ({ color, imgSrc, title, content }) => {
    const cardStyle = {
        '--clr': color,
    };

    return (
        <div className="problems-card" style={cardStyle} >
            <div className="img-box">
                <img src={code} alt={title} />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{content}</p>
                <a className='btn btn-brand'>Read More</a>
            </div>
        </div>
    );
};

const Problem = () => {
    return (
        <div className='mt-5'  id='problems'>
        <div class="text-center mt-5">
        <div class="glitch-wrapper">
   <h1 class="glitch" data-text="Problem Statements">Problem Statements</h1>
</div>    
</div>

    <div className="problems-container">
            <Card
                color="#009688"
                imgSrc={code}
                title="Artificial Intelligence"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
            />

            <Card
                color="#009688"
                imgSrc={code}
                title="Artificial Intelligence"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
            />
            <Card
                color="#009688"
                imgSrc={code}
                title="Artificial Intelligence"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
            />
        </div>
        </div>
    );
};

export default Problem;