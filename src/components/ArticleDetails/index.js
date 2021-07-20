import React from 'react'
import Comments from '../Comments'
import './index.css'

const ArticleDetails = ({title, image, author, content}) => {
    return (
        <div className="details">
            <h2 className="article-header">{title}</h2>
            <img src={image} alt="img"/>
            <div className="author-holder">
                <h5 className="author-name">{author}</h5>
            </div>
            <div className="article-description">
                {content}
            </div>
            <Comments />
        </div>
    )
}

export default ArticleDetails
