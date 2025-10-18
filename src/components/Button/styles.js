import styled from 'styled-components'

export const Button = styled.button`
    background: linear-gradient(-30deg,rgb(243, 87, 30), #2b8bff, #2E8B57, #646cff);
    background-size: 400% 400%;
    animation: gradientBG 6s ease infinite;
    box-shadow: 0 10px 5px rgba(0,0,0,.7);
    width: clamp(120px, 22vw, 150px);
    height: 50px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: clamp(14px, 2.2vw, 18px);
    font-weight: 500;
    color: #eee;
    

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

    &:hover {
        transform: scale(1.05);
        opacity: .8;
        transition: .4s;
        border: 1px solid #646cff;
    }

    &:active {
        opacity: .5;
    }
`