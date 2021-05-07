import React from 'react';
import styled from "styled-components";
import Card from "./sections/Card";
import { Row, Col } from "antd";

function Projects(props) {
    return (
        
        <ProjectComponent>
            <SubTitle>Projects</SubTitle>
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <Row gutter={[24, 24]}>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card />
                    </Col>
                    <Col xl={6} lg={8} md={12} sm={24}>
                        <Card />
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
    font-weight: 600;
    font-style: italic;
`;
