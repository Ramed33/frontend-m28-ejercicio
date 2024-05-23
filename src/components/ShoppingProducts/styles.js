import styled from "styled-components";

const ContainerProduct = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    background-color: #87ceeb;
`;

const TitleProduct = styled.h1`
    font-size: x-large;
`;

export {
    ContainerProduct,
    TitleProduct
}