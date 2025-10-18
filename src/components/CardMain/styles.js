import styled from 'styled-components'

export const CardMain = styled.div`
    background: linear-gradient(-30deg, rgb(243, 87, 30), #2b8bff, #2E8B57, #646cff);
    background-size: 400% 400%;
    opacity: .7;
    animation: gradientBG 6s ease infinite;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .8);
    width: clamp(260px, 42vw, 500px);
    height: clamp(140px, 18vw, 200px);
    border: none;
    border-radius: 20px;
    margin: 40px auto 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

    @keyframes gradientBG {
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
