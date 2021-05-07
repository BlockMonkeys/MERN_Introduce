import React from 'react';
import styled from "styled-components";
import Card from "./sections/Card";
import { Row, Col } from "antd";

function Projects(props) {
    const MyIntroduceAppFunc = () => {
        alert("현재 보고계신 페이지 입니다. 😁")
    }
    return (
        <ProjectComponent>
            <SubTitle> Projects </SubTitle>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems: "center"
            }}>
                <Row gutter={[24, 24]}>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="My Introduce App"
                            description="[개인] 개인 소개페이지 Using, React Node"
                            githubLink="https://github.com/BlockMonkeys/React_Introduce" 
                            cardImg="http://localhost:5000/static/introProject.png"
                            goHomeFunc={MyIntroduceAppFunc}
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Team Introduce App"
                            description="[ninjaCoders] 팀 소개페이지 Using, MERN"
                            githubLink="https://github.com/BlockMonkeys/Team_TeamBlog" 
                            cardImg="http://localhost:5000/static/ninjaCoders.png"
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="My Introduce App"
                            description="[개인] 소개페이지 제작 Using, React Node"
                            githubLink="https://github.com/BlockMonkeys/React_Introduce" 
                            cardImg="http://localhost:5000/static/introProject.png"
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="My Introduce App"
                            description="[개인] 소개페이지 제작 Using, React Node"
                            githubLink="https://github.com/BlockMonkeys/React_Introduce" 
                            cardImg="http://localhost:5000/static/introProject.png"
                        />
                    </Col>
                </Row>
            </div>
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
    font-weight: 800;
    text-decoration: underline;
    margin: 25px;
`;
