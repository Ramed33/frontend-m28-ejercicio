import styled from "styled-components";

const AppHeader = styled.header`
    padding: 25px;
    box-sizing: border-box;
    background-color: #87ceeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ViewCart = styled.text`
    cursor: pointer;
    font-weight: 700;
`;

export {
    AppHeader,
    ViewCart
}