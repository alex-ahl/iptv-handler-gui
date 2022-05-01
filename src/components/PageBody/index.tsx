import ProviderForm from 'components/Form'
import React from 'react'
import { Container, LeftContainer, RightContainer, BoldText } from './styles'

const PageBody: React.FC = () => {
    return (
        <Container>
            <LeftContainer>
                <BoldText>TEMP</BoldText>
            </LeftContainer>
            <RightContainer>
                <ProviderForm />
            </RightContainer>
        </Container>
    )
}

export default PageBody
