import { Wrapper } from 'components/Navbar/styles'
import { theme } from 'src/styles/theme'
import styled from 'styled-components'

export const Form = styled.form``

export const FormGroup = styled.div`
    color: ${({ theme }) => theme.colors.main};
    display: block;
    width: 300px;
`

export const Label = styled.label`
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.colors.black};

    display: block;
`

export const Input = styled.input`
    padding: 0.5em;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid;

    background: ${({ theme }) => theme.colors.white};
    border-radius: 3px;
    border-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    margin-bottom: 0.5em;
`

export const Message = styled.label`
    margin-bottom: 0.5em;
    color: ${({ theme }) => theme.colors.main};

    display: block;
`

export const SubmitButton = styled.button`
    display: block;
    width: 300px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.complementory1};
`
