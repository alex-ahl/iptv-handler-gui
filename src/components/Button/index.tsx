import React, { HTMLAttributes } from 'react'
import { StyledButton, Wrapper } from './styles'
import { Oval } from 'react-loader-spinner'
import { theme } from 'src/styles/theme'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    loading: boolean
}

export const Button = ({ children, loading, ...props }: ButtonProps): JSX.Element => {
    return (
        <>
            <StyledButton type="button" {...props}>
                <Wrapper>{children}</Wrapper>

                <Wrapper>
                    {loading && (
                        <Oval
                            color={theme.colors.secondary}
                            secondaryColor={theme.colors.main}
                            height={20}
                            width={20}
                        />
                    )}
                </Wrapper>
            </StyledButton>
        </>
    )
}
