import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './ArticleTemplate.elements';

const ArticleTemplate = ({title, content, photoLink}) => {

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </ColumnLeft>
                <ColumnRight>
                    <img src={photoLink} alt='SomePhoto' />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default ArticleTemplate;