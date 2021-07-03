import React from 'react'
import styled from "styled-components";
import { Button } from "antd";

function IntroduceMsg() {
    const openNotionResume = () => {
        window.open("https://www.notion.so/fabeb9396c634418baebb5fec23d1557", '_blank');
    }
    return (
        <IntroduceMsgComponent>
            <h1>Introduce Msg 👨🏻‍💻</h1>
            Hello, My Name is HanDong,Lee. 😁 <br />
            I graduated from Honkik Univ majoring Business Administration. <br />
            After I graduated University in 2020. I started learn coding. 💻 <br /> 
            Currently, enrolled in a master's degree at Kookmin University department of BlockChain. 🎓 <br />
            Meanwhile, I like to develop Web Application myself. <br />
            So, nomally I study about the Web Development using MERN STACK.<br />
            And I teamed up called "Ninja coders" my team is learning about Web Development. Since 2021.03~ <br />  
            My hobby is watch Movies and also I love to play game. 😂<br />
            Thank You !🙇🏻‍♂️
            <Button 
                type="danger" 
                style={{ width: "50%", alignSelf: "center"}}
                onClick={openNotionResume}
                >
            더 자세한 소개 글(자기소개서)
            </Button>
        </IntroduceMsgComponent>
    )
}

export default IntroduceMsg;

const IntroduceMsgComponent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
    font-size : 25px;
    background-color: floralwhite;
    line-height: 40px;
    padding: 15px 50px;
    font-weight: 600;
    @media (max-width : 750px){
        font-size: 20px;
    }
    @media (max-width : 640px){
        font-size: 18px;
    }
    @media (max-width : 550px){
        font-size: 14px;
        line-height: 30px;
    }
    @media (max-width : 450px){
        font-size: 10px;
    }
    @media (max-width : 360px){
        font-size: 8px;
        line-height: 20px;
    }
`;
