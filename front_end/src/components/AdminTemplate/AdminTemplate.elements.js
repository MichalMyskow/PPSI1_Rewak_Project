import styled from "styled-components";

// export const AdminContainer = styled.section`
//     background: radial-gradient(
//     ellipse at left bottom,
//     rgba(75, 9, 8, 1) 0%,
//     rgba(131, 16, 14, 0.9) 59%,
//     rgba(98, 25, 0, 0.9) 100%
//     );
//     width: 100%;
//     /* position: relative; */
// `;

// export const TabsWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-items: center;
//     align-items: center;
//     position: relative;
// `;

// export const Tabs = styled.div`
//     /* border: 1px solid #fff; */
//     /* position: relative; */
//     display: flex;
//     min-height: 40px;

//     width: 100%;
//     height: 100%;

//     overflow: hidden;
//     align-items: center;
//     justify-content: left;
//     background: radial-gradient(
//     ellipse at left bottom,
//     rgba(75, 9, 8, 1) 0%,
//     rgba(131, 16, 14, 0.9) 59%,
//     rgba(98, 25, 0, 0.9) 100%
//     );
// `;

// export const TabButton = styled.button`
//     /* border: 1px solid #fff; */
//     border: none;
//     outline: none;
//     width: 200px;
//     height: 100%;
//     min-height: 50px;

//     font-size: 1.5em;
//     /* border: ${props => (props.active ? "1px solid #ccc" : "")}; */

//     /* height: ${props => (props.active ? "3em" : "2.6em; top:.4em")}; */
//     cursor: pointer;
//     color: #fff;
//     background: transparent;
//     /* background: radial-gradient(
//     ellipse at left bottom,
//     rgba(75, 9, 8, 1) 0%,
//     rgba(131, 16, 14, 0.9) 59%,
//     rgba(98, 25, 0, 0.9) 100%
//     ); */
// `;

// export const ContentWrapper = styled.div`
//     display: flex;
//     position: relative;
// `;

// export const Content = styled.div`
//     font-size: 40px;
//     min-height: 790px;
//     ${props => (props.active ? "" : "display:none")}
// `;

export const AdminContainer = styled.section`

`;

export const TabsWrapper = styled.div`

`;

export const Tabs = styled.div`
    overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

export const TabButton = styled.button`
    border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "lightgray")};
  height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};

  :hover {
    background-color: white;
  }
`;

export const ContentWrapper = styled.div`

`;

export const Content = styled.div`
    ${(props) => (props.active ? "" : "display:none")}
`;