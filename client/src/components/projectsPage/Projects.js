import React from 'react';
import styled from "styled-components";
import { Row, Col } from "antd";
import Card from "./sections/Card";

function Projects(props) {
    //사이트를 배포한 뒤, 배포한 데모 페이지로 보낼 함수.
    const MyIntroduceAppFunc = () => {
        alert("준비중입니다.")
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
                            title="PetTube App"
                            description="[개인] 유튜브와 유사한 펫 관련 동영상을 올리는 웹 Using, Node ﹠ Express ﹠ MongoDB ﹠ Pug"
                            githubLink="https://github.com/BlockMonkeys/Express_Mongo_petTube" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/petTube.png"
                            docLink="https://www.notion.so/PetTube-2020-12-26335dde6d3c4adda16042c3cdc3627c"
                            goHomeFunc={MyIntroduceAppFunc}
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Introduce App"
                            description="[개인] 소개페이지 Using, React ﹠ Node"
                            githubLink="https://github.com/BlockMonkeys/React_Introduce" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/introProject.png"
                            goHomeFunc={MyIntroduceAppFunc}
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Team Blog App"
                            description="[NinjaCoders] 팀 블로그 페이지 Using, MERN"
                            githubLink="https://github.com/BlockMonkeys/Team_TeamBlog" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/ninjaCoders.png"
                        />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card 
                            title="Coin Community App"
                            description="[NinjaCoders] 코인 커뮤니티 사이트 제작중... Using, MERN"
                            githubLink
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/blockmonkeylogo.jpeg"
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
