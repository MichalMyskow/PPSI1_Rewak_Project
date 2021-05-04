import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

export const Container = styled.div`
    padding: 3rem 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 1090px) {
        grid-template-columns: 1fr;
    }
`;

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: 1;
    /* order: ${({reverse}) => (reverse ? '2' : '1')}; */
    /* overflow: auto; */

    h1 {
        position: relative;
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p {
        margin-bottom: 1rem;
    }
`;

export const ColumnRight = styled.div`
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 1090px) {
            width: 95%;
            height: 95%;
        }
    }
`;