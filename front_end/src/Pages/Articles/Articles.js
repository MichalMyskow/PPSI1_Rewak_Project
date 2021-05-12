import React, { useEffect, useState } from 'react'
import ArtInfo from '../../components/ArtInfo/ArtInfo';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = 'http://blogapi.local/api/posts?page=1&published=true';
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                //'Authorization': 'BEARER '+ localStorage.getItem('JWT'),
                'Accept': 'application/json'},
            credentials: 'include'
        }).then(resp => resp.json())
<<<<<<< HEAD
            // .then(resp => setArticle(resp))
            .then(resp => console.log(resp))
    }, []);

=======
            .then(resp => setArticles(resp))
            //.then(resp => console.log(resp))
    }, []);

    const title = `${articles.title}`;
    const content = `${articles.content}`;
    const photoLink = `${articles.photoLink}`

>>>>>>> bf1d6ee21917f5c06c8b7c53db1ccece7705a1b5
    return (
        <div>
            {/* {
                articles.map(articles => (
                    <ArtInfo title={articles.title} content={articles.content} photoLink={articles.photoLink}/>
                ))
            } */}
        </div>
    );
};

export default Articles;