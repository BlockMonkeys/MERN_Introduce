import React from 'react';
import styled from "styled-components";

function Skills(props) {
    return (
        <div>
            <Title><u>My Skills</u></Title>
                <BadgeContainer>
                    <DividedBadgeContainer>
                        <h3>Language﹠Framework</h3>
                        <Badges src='http://localhost:5000/static/html5.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/css3.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/javascript.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/nodejs.png' style={{width:"25px", height:"25px"}}/>
                        <br />
                        <Badges src='http://localhost:5000/static/express.png' style={{width:"55px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/pug.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/react.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/redux.png' style={{width:"30px", height:"25px"}}/>
                        <br />
                    </DividedBadgeContainer>

                    <DividedBadgeContainer>
                        <h3>Database</h3>
                        <Badges src='http://localhost:5000/static/mongodb.png' style={{width:"55px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/mysql.png' style={{width:"25px", height:"25px"}}/>
                    </DividedBadgeContainer>

                    <DividedBadgeContainer>
                        <h3>Infrastructure</h3>
                        <Badges src='http://localhost:5000/static/git.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/github.png' style={{width:"25px", height:"25px"}}/>
                        <Badges src='http://localhost:5000/static/aws.png' style={{width:"25px", height:"25px"}}/>
                    </DividedBadgeContainer>

                    <DividedBadgeContainer>
                        <h3>Others</h3>
                        <Badges src='http://localhost:5000/static/toeic.jpg' style={{width:"25px", height:"25px"}}/>
                    </DividedBadgeContainer>
                </BadgeContainer>
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

const BadgeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
`;

const DividedBadgeContainer = styled.div`
    width: 300px;
    height: 150px;
    text-align: center;
`;

const Badges = styled.img`
    margin: 10px 15px;
`;