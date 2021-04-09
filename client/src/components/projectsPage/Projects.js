import React from 'react';
import styled from "styled-components";
import Card from "./sections/Card";

function Projects(props) {
    return (
        
        <ProjectComponent>
            <SubTitle>Projects MySelf 👊🏼</SubTitle>
            <CardsComponent>
                <Card title="개인 프로젝트0" description="프로젝트 디스크립션..." />
                <Card title="개인 프로젝트1" description="프로젝트 디스크립션..." />
                <Card title="개인 프로젝트2" description="프로젝트 디스크립션..." />
                <Card title="개인 프로젝트3" description="프로젝트 디스크립션..." />
            </CardsComponent>
            <SubTitle>Projects with Team 🤝</SubTitle>
            <CardsComponent>
                <Card title="팀 프로젝트0" description="프로젝트 디스크립션..." />
                <Card title="팀 프로젝트1" description="프로젝트 디스크립션..." />
                <Card title="팀 프로젝트2" description="프로젝트 디스크립션..." />
                <Card title="팀 프로젝트3" description="프로젝트 디스크립션..." />
            </CardsComponent>
        </ProjectComponent>
    )
}

export default Projects;

const ProjectComponent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const SubTitle = styled.h2`
    font-size: 25px;
    font-weight: 600;
    font-style: italic;
`;

const CardsComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 15px 0;
`;