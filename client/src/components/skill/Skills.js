import React from 'react';
import styled from "styled-components";
import {Row, Col} from "antd";

function Skills(props) {
    return (
        <div>
            <Title><u>My Skills</u></Title>
                <Row gutter={[24, 24]} style={{ display: "flex", justifyContent:"center"}}>

                    <Col lg={6} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Language﹠Framework</h2>
                            <Badges src='http://localhost:5000/static/html5.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/css3.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/javascript.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/nodejs.png' style={{width:"25px", height:"25px"}}/>
                            <br />
                            <Badges src='http://localhost:5000/static/express.png' style={{width:"55px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/pug.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/react.png' style={{width:"25px", height:"25px"}}/>
                            <br />
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={6} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Database</h2>
                            <Badges src='http://localhost:5000/static/mongodb.png' style={{width:"55px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/mysql.png' style={{width:"25px", height:"25px"}}/>
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={6} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Infrastructure</h2>
                            <Badges src='http://localhost:5000/static/git.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/github.png' style={{width:"25px", height:"25px"}}/>
                            <Badges src='http://localhost:5000/static/aws.png' style={{width:"25px", height:"25px"}}/>
                        </DividedBadgeContainer>
                    </Col>

                    <Col lg={6} md={12} sm={24}>
                        <DividedBadgeContainer>
                            <h2>Others</h2>
                            <Badges src='http://localhost:5000/static/toeic.jpg' style={{width:"25px", height:"25px"}}/>
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
`;

const DividedBadgeContainer = styled.div`
    width: 300px;
    height: 150px;
    text-align: center;
`;

const Badges = styled.img`
    margin: 10px 15px;
`;