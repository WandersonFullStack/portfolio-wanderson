import styled from 'styled-components'

export const CardProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 530px;
    min-height: 255px;
    background: linear-gradient(-30deg, rgb(243, 87, 30), #2b8bff, #2E8B57, #646cff);
    background-size: 400% 400%;
    animation: gradientBG 6s ease infinite;
    box-shadow: 0 15px 10px rgba(0, 0, 0, .8);  
    border-radius: 10px;
    margin: 10px 0 30px 0;

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
