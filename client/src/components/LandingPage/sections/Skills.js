import React from 'react';
import styled from "styled-components";
import {Row, Col} from "antd";

function Skills(props) {
    return (
        <div>

            {/* 주스킬 */}
            <Title>Main Skills</Title>
                <Row gutter={[24, 24]} style={{ display: "flex", justifyContent:"center", marginBottom: "45px"}}>
                    <Col>
                        <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mongodb.png' style={{width:"55px", height:"25px"}}/>
                        <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/express.png' style={{width:"55px", height:"25px"}}/>
                        <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/react.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/nodejs.png' style={{width:"25px", height:"25px"}}/>
                    </Col>
                </Row>

            {/* 다루어본 스킬 */}
            <Title>My Skills</Title>
                <Row gutter={[24, 24]} style={{ display: "flex", justifyContent:"center"}}>

                    <Col lg={5} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Language﹠Framework</h2>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/html5.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/css3.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/javascript.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/nodejs.png' style={{width:"25px", height:"25px"}}/>
                            <br />
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/express.png' style={{width:"55px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/pug.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/react.png' style={{width:"25px", height:"25px"}}/>
                            <br />
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={5} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Database</h2>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mongodb.png' style={{width:"55px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/mysql.png' style={{width:"25px", height:"25px"}}/>
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={5} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Infrastructure</h2>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/git.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/github.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/aws.png' style={{width:"25px", height:"25px"}}/>
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={5} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Others</h2>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/toeic.jpg' style={{width:"25px", height:"25px"}}/>
                            <Badges src='https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/docker.png' style={{width:"25px", height:"25px"}}/>
                        </DividedBadgeContainer>
                    </Col>
                </Row>
        </div>
    )
}

export default Skills;


const Title = styled.div`
    font-size: 25px;
    font-weight: 800;
    margin : 15px 0;
    text-align: center;
    font-family: "Lobster", cursive;
`;

const DividedBadgeContainer = styled.div`
    width: 300px;
    height: 150px;
    text-align: center;
`;

const Badges = styled.img`
    margin: 10px 15px;
`;