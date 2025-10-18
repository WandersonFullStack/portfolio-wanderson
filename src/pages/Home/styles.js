import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg, #161616 0%, #242424 100%);
`

export const Title = styled.div`
    background: rgba(0,0,0, 0);
    width: 100%;
    min-height: 280px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    padding: 40px var(--container-padding);

    img {
        width: 230px;
    }

    h1 {
        background: linear-gradient(-45deg, #B0E0E6);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientText 7s ease infinite;
        font-size: clamp(36px, 6vw, 86px);
        font-weight: 800;
        text-align: center;
        text-shadow: rgba(0, 0, 0, .7) 0 15px 10px;
    }

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
`

export const Main = styled.div`
    background: rgba(0,0,0, 0);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px var(--container-padding);

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    width: 100%;
    border-left: 1px solid #B0E0E6;
`

export const Contacts = styled.div`

    display: flex;
    /* gap: 15px; */
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    a {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ddd;
        z-index: 5;

        &:hover {
            transform: scale(1.1);
            transition: .4s;
            color: rgba(255,255,255,1);
        }
    }

    @media (max-width: 480px) {
        gap: 10px;
        a svg { font-size: 28px; }
    }
`

export const Technologies = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 5;

    @media (max-width: 480px) {
        gap: 8px;
        svg { font-size: 28px; }
    }
`

export const AvatarUser = styled.img`

    width: clamp(64px, 10vw, 90px);

`

export const Content = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;
    margin-bottom: 80px;
    z-index: 5;

    h2 {
        text-align: start;
        font-size: clamp(22px, 4vw, 38px);
        font-weight: 600;
        color: #ddd;
    }

    p {
        text-align: start;
        font-size: clamp(16px, 2.5vw, 24px);
        font-weight: 300;
        color: rgba(255, 255, 255, .7);
        /* margin: 30px 80px 0 0; */
    }
`