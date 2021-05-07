import React from 'react';
import ArticleTemplate from '../../components/ArticleTemplate/ArticleTemplate';
import { Article2Data } from './Article2Data';

const Article2 = () => {
    return (
        <>
            <ArticleTemplate {...Article2Data} />
        </>
    );
}

export default Article2;