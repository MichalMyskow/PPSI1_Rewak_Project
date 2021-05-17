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

const OneRow = ({ firstValue, secondValue, thirdValue }) => {
    return (
        <>
            <Row>
                <RowWrapper>
                    <p>{firstValue}</p>
                    <p>{secondValue}</p>
                    <p>{thirdValue}</p>
                </RowWrapper>
            </Row>
        </>
    )
}

export default OneRow
