import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
    display: grid;
    grid-template-columns: 1fr repeat(1, auto) 1fr;
    grid-column-gap: 5px;

    font-size: 14px;
    background-color: transparent;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.main};
    border-radius: 5%;
    width: 130px;
    height: 40px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.smoke};
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-self: center;

    :nth-child(1) {
        grid-column-start: 2;
    }

    :nth-child(2) {
        padding: 0 5px 0 0;
        margin-left: auto;
    }
`
