import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './index.css'
import { useParams, useHistory } from 'react-router'
import ArticleDetails from '../../components/ArticleDetails'
import InfiniteScroll from 'react-infinite-scroll-component'

const Details = () => {
    const [articleList, setArticleList] = useState([])
    const [more, setMore] = useState(true)
    const history = useHistory()
    let {id} = useParams() 
    let idToEdit = Number(id)
    const [nextID, setNextID] = useState(idToEdit)


    useEffect(()=>{
        fetch(`http://localhost:8000/articles/${id}`)
        .then(res => {return res.json()})
        .then(data => {
            const newArticleList = [...articleList, data]
            setArticleList(newArticleList)
        })
    }, [])

    const fetchMoreData = () => {
        if(nextID > 40){
            setMore(false)
            return
        } 
        let newID = nextID + 1     
        setTimeout(() => {
            fetch(`http://localhost:8000/articles/${nextID}`)
            .then(res => {return res.json()})
            .then(data => {
                const nextArticleList = [...articleList, data]
                setArticleList(nextArticleList)
            })        
        }, 500)
        setNextID(newID)

    }

    useEffect(()=> {
        history.push(`/details/${nextID}`)
    }, [history, nextID])

    return (
        <>
            <Navbar />
            <div className="background">
                <InfiniteScroll 
                    dataLength={articleList.length}
                    endMessage={
                        <p className="endMessage">No more articles available</p>
                    }
                    hasMore={more}
                    next={fetchMoreData}
                >
                    {articleList && articleList.map(item => 
                        <div key={item.id}>
                            <ArticleDetails title={item.title} image={item.urlToImage} author={item.author} content={item.content}/>
                        </div>   
                    )}
                </InfiniteScroll>
            </div>
            
        </>
    )
}

export default Details
