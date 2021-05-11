import React from 'react'
import Carousel from "./sections/Carousel";
import Skills from "./sections/Skills";
import styled from "styled-components";



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

