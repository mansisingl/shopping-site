import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    row-gap: 50px;
    column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
`

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
    text-transform: uppercase;
`
