import { createGlobalStyle } from 'styled-components'

//CSS global aplicado em toda aplicação
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --webkit-font-smoothing: antialiased;
    }
    :root {
        --white: #FFFFFF;
        --gray: #868686;
        --background-color: #37517e;
        --primary-color: #47b2e4;
        --navbar-height: 6.5rem;
        --footer-height: 6rem;
    }
    #root {
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
`