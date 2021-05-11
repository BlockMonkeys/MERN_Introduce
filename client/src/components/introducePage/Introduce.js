import React from 'react';
import styled from "styled-components";
import IntroduceMsg from "./sections/IntroduceMsg";
import ExperienceMsg from "./sections/ExperienceMsg";
import Educated from "./sections/Educated";
import Certificated from "./sections/Certificate";

function Introduce(props) {
    return (
        <div>
            
            <IntroduceMsg />

            <ExperienceMsg />

            <Educated />

            <Certificated />

            <UpBtn onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}>⬆️</UpBtn>
        </div>
    )
}

export default Introduce;




const UpBtn = styled.button`
    position: fixed;
    bottom: 30px;
    right: 10px;
    border: none;
    opacity: 0.3;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    &:focus{
        outline: none;
    }
`;