import React, {useState, useEffect} from 'react'
import ArticleDetails from '../../components/ArticleDetails'
import Navbar from '../../components/Navbar'
import './index.css'

const AllArticles = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/articles')
        .then(res =>{ return res.json() })
        .then(data => {
            setArticles(data);
        })
    }, [])

    return (
        <>
            <Navbar selected="Articles" />
            <div className="background">
                <h2 className="page-header">All Articles</h2>
                {articles && articles.map( item => 
                    <div key={item.id}>
                        <ArticleDetails title={item.title} image={item.urlToImage} author={item.author} content={item.content}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default AllArticles
