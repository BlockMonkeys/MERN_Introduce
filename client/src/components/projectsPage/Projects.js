import React from 'react';
import styled from "styled-components";
import { Row, Col } from "antd";
import Card from "./sections/Card";

function Projects(props) {
    //사이트를 배포한 뒤, 배포한 데모 페이지로 보낼 함수.
    const myPetTubeAppLink = () => {
        alert("미배포 앱입니다.");
    };
    const myIntroduceAppLink = () => {
        window.open("http://13.125.218.44/", '_blank');
    };
    const teamblogProjectAppLink = () => {
        window.open("http://13.125.230.121/", '_blank');
    };

    return (
        <ProjectComponent>
            <SubTitle> Projects </SubTitle>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems: "center"
            }}>
                <Row gutter={[24, 24]} style={{ display: "flex", justifyContent: "center" }}>
                    <Col xl={8} lg={8} md={12} sm={24}>
                        <Card 
                            title="PetTube App"
                            description="[개인] 유튜브와 유사한 펫 관련 동영상을 올리는 웹 Using, Node ﹠ Express ﹠ MongoDB ﹠ Pug"
                            githubLink="https://github.com/BlockMonkeys/Express_Mongo_petTube" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/petTube.png"
                            docLink="https://www.notion.so/PetTube-2020-12-26335dde6d3c4adda16042c3cdc3627c"
                            goHomeFunc={myPetTubeAppLink}
                        />
                    </Col>
                    <Col xl={8} lg={8} md={12} sm={24}>
                        <Card 
                            title="Introduce App"
                            description="[개인] 소개페이지 Using, React ﹠ Node"
                            githubLink="https://github.com/BlockMonkeys/MERN_Introduce" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/introProject.png"
                            docLink="https://github.com/BlockMonkeys/MERN_Introduce"
                            goHomeFunc={myIntroduceAppLink}
                        />
                    </Col>
                    <Col xl={8} lg={8} md={12} sm={24}>
                        <Card 
                            title="Team Blog App"
                            description="[NinjaCoders] 팀 블로그 페이지 Using, MERN"
                            githubLink="https://github.com/BlockMonkeys/Team_TeamBlog" 
                            cardImg="https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/ninjaCoders.png"
                            goHomeFunc={teamblogProjectAppLink}
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
    margin: 25px;
    font-family: "Lobster", cursive;
`;
