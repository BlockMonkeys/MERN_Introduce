import React from 'react';
import styled from "styled-components";
import { Row, Col } from "antd";
import Card from "./sections/Card";

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
                <Row gutter={[24, 24]} style={{ display: "flex", justifyContent: "center" }}>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Introduce App"
                            description="[개인] 소개페이지 Using, React ﹠ Node"
                            githubLink="https://github.com/BlockMonkeys/React_Introduce" 
                            cardImg="http://localhost:5000/static/introProject.png"
                            goHomeFunc={MyIntroduceAppFunc}
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Team Blog App"
                            description="[NinjaCoders] 팀 블로그 페이지 Using, MERN"
                            githubLink="https://github.com/BlockMonkeys/Team_TeamBlog" 
                            cardImg="http://localhost:5000/static/ninjaCoders.png"
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Coin Community App"
                            description="[NinjaCoders] 코인 커뮤니티 사이트 제작 예정... Using, MERN"
                            githubLink
                            cardImg="http://localhost:5000/static/blockmonkey.jpeg"
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Default"
                            description="Default"
                            githubLink
                            cardImg="http://localhost:5000/static/blockmonkey.jpeg"
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
