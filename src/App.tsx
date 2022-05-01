import Navbar from 'components/Navbar'
import PageBody from 'components/PageBody'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { theme } from './styles/theme'

const App: React.FC = () => (
    <>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <PageBody />
        </ThemeProvider>
    </>
)

export default App
