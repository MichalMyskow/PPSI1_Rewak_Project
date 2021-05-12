import React from 'react';
import styled from 'styled-components';

const Row = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: transparent;
`;

export const RowWrapper = styled.li`
    display: flex;
    border: 1px solid #000;

    p{
        border: 1px solid #000;
        margin-left: 20px;
        padding: 15px;
    }
`;

// export const Title = styled.p`

// `;

// export const Subtitle = styled.p`

// `;


const OneRow = ({ title, subtitle }) => {
    return (
        <>
            <Row>
                <RowWrapper>
                    <p>{title}</p>
                    <p>{subtitle}</p>
                </RowWrapper>
            </Row>
        </>
    )
}

export default OneRow
