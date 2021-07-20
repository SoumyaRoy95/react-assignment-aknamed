import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ArticlePin from '../../components/ArticlePin'
import './index.css'
import InfiniteScroll from 'react-infinite-scroll-component'


const Home = () => {
    const [articles, setArticles] = useState([])
    const [articlesToDisplay, setArticlesToDisplay] = useState([])
    const [more, setMore] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/articles')
        .then(res =>{ return res.json() })
        .then(data => {
            setArticles(data);
            setArticlesToDisplay(data.slice(0,20))
        })
    }, [])

    const fetchMoreData = () => {
        if(articlesToDisplay.length === articles.length){
            setMore(false)
            return
        }
        setTimeout(() => {
            const newArticles = [...articlesToDisplay, ...articles.slice(articlesToDisplay.length, articlesToDisplay.length + 10)]
            setArticlesToDisplay(newArticles)
        }, 500)
    }
    
    return (
        <>
            <Navbar selected="Home"/>
            <div className="list">
                <h2 className="home-header">Home</h2>
                <InfiniteScroll 
                    dataLength={articlesToDisplay.length}
                    endMessage={
                        <p className="endMessage">No more articles available</p>
                    }
                    hasMore={more}
                    next={fetchMoreData}
                    >
                    {articlesToDisplay && articlesToDisplay.map(item => 
                        <div key={item.id}>
                            <ArticlePin id={item.id} image={item.urlToImage} title={item.title} description={item.description}/>
                        </div>
                    )}
                </InfiniteScroll>           
            </div>
        </>
    )
}

export default Home
