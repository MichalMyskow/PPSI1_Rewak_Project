import React, {useEffect, useState} from 'react';
import ArticleTemplate from '../../components/ArticleTemplate/ArticleTemplate';
// import { Article2Data } from './Article2Data';

const Article2 = () => {

    const [post, setPost] = useState("");

    useEffect(() => {
        const url1 = 'http://blogapi.local/api/posts/2';
        fetch(url1).then(resp => resp.json())
        .then(resp => setPost(resp))
      }, []);

    const title = `${post.title}`
    const content = `${post.content}`
    const photoLink = `${post.photoLink}`

    return (
        <div>
            <ArticleTemplate  title={title} content={content}   photoLink={photoLink}/>
        </div>
    );
}

export default Article2;