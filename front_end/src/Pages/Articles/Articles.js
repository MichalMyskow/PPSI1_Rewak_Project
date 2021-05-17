import React, { useEffect, useState } from 'react'
import ArtInfo from '../../components/ArtInfo/ArtInfo';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'http://blogapi.local/api/posts?published=true';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(resp => resp.json())
            .then(resp => setArticles(resp))
    }, []);

    return (
        <div>
            {
                articles.map((articles, index) => (
                    <ArtInfo title={articles.title} content={articles.content} photoLink={articles.photoLink} key={index}/>
                ))
            }
        </div>
    );
};

export default Articles;