import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const ArticlePin = ({id, image, title, description}) => {
    
    return (
        <>
        <Link to={{
                pathname: `/details/${id}`,
                state: {id: id}
            }}>
            <div className="article_pin" >
                
                <img src={image} alt="img" />
                <div className="element">
                    <div className="title">
                        {title}
                    </div>
                    <div className="subject">
                        {description}
                    </div>
                </div>
            </div> 
            </Link>
        </>
    )
}

export default ArticlePin
