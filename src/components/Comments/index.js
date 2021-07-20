import React, {useState} from 'react'
import './index.css'

const Comments = () => {
    const [commentValue, setCommentValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [commentList, setCommentList] = useState ([]);
    const handleComment = e => {
        setCommentValue(e.target.value)
    }
    const handleName = e => {
        setNameValue(e.target.value)
    }

    const handleSubmit = () =>{
        const itemDetails = {
            id: Math.floor(Math.random *1000),
            comment: commentValue,
            name: nameValue
        }
        const newCommentList = [itemDetails, ...commentList]
        setCommentList(newCommentList)
        setCommentValue("")
        setNameValue("")
        
    }
    return (
        <>
           <div className="comments-section">
                <h5 className="comment-header">Comments</h5>
                <input className="comment" type="text" placeholder="Type your comment here..." onChange={e=>handleComment(e)} value={commentValue}/>
                <div className="name">
                    <input className="username" type="text" placeholder="Your name..." onChange={e => handleName(e)} value={nameValue}/>
                    <button type="button" className="submit-button" disabled={!nameValue} onClick={e =>handleSubmit(e)}>Submit Comment</button>
                </div>
                {commentList && 
                commentList.map( item => 
                    <div className="read-comments" key={item.id}>
                        <span>Comment {item.name} on 00-00-0000</span>
                        <span>{item.comment}</span>
                    </div>
                    )
                }
           </div>
           
        </>
    )
}

export default Comments
