import React, { useEffect } from 'react'
import Carousel from "./utils/Carousel";
import styled from "styled-components";
import Skills from "./skill/Skills";


function Home(props) {
    return (
        <HomeComponent>

                <Carousel />

                <Skills />

        </HomeComponent>
    )
}

export default Home;

const HomeComponent = styled.div`
    display:flex;
    flex-direction: column;
`;

