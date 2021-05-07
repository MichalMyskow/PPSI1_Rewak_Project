import React, {useState, useEffect} from 'react';
import ArticleTemplate from '../../components/ArticleTemplate/ArticleTemplate';
import { Article1Data} from './Article1Data';

const Article1 = () => {

    const [post, setPost] = useState("");

    useEffect(() => {
        const url1 = 'http://blogapi.test/api/posts/3';
        fetch(url1).then(resp => resp.json())
        .then(resp => setPost(resp))
      }, []);

    const title = `${post.title}`
    const content = `${post.content}`
    return (
        <div>
            <ArticleTemplate  title={title} content={content} />
        </div>
    );
}

export default Article1;