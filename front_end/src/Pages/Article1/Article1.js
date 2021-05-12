import React, {useState, useEffect} from 'react';
import ArticleTemplate from '../../components/ArticleTemplate/ArticleTemplate';
// import { Article1Data} from './Article1Data';

const Article1 = () => {

    const [post, setPost] = useState("");

    useEffect(() => {
        const url1 = 'http://blogapi.local/api/posts/1';
        fetch(url1).then(resp => resp.json())
            .then(resp => setPost(resp))
            // .then(resp => console.log(resp))
    }, []);

    const title = `${post.title}`
    const content = `${post.content}`
    const photoLink = `${post.photoLink}`

    return (
        <div>
            <ArticleTemplate title={title} content={content}  photoLink={photoLink}/>
        </div>
    );
}

export default Article1;