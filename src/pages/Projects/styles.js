import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, #161616, #242424);
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px var(--container-padding);

    h1{
        color: #ddd;
        font-size: clamp(28px, 5vw, 58px);
        text-shadow: rgba(0, 0, 0, .8) 0 10px 10px;
        background: linear-gradient(-45deg, #B0E0E6);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientText 7s ease infinite;

        @keyframes gradientText {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    }
`

export const MainPrjects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 10px var(--container-padding) 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 92%;
    height: 100%;
    padding: 10px 20px;
    background: #242424;

    h3 {
        color: #ddd;
        font-size: clamp(16px, 2.5vw, 24px);
        margin: 15px;
        display: flex;
        justify-content: space-between;
    }

    a {
        width: auto;
        height: auto;
        text-align: start;
        text-decoration: none;
        color: #eee;
        font-size: 16px;
        border: none;

    }
`

export const Apresented = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;


    img {
        width: clamp(220px, 28vw, 300px);
        height: 110%;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`

export const TechProject = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;

    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: start;
    }
`