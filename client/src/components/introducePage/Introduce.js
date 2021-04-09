import React, {useEffect} from 'react';
import styled from "styled-components";

function Introduce(props) {
    return (
        <div>
            <IntroduceMsg>
                <h1>Introduce Msg 👨🏻‍💻</h1>
                Hello, My Name is HanDong,Lee. 😁 <br />
                I graduated from Honkik Univ majoring Business Administration. <br />
                After I graduated University in 2020. I started learn coding. 💻 <br /> 
                Currently, enrolled in a master's degree at Kookmin University department of BlockChain. 🎓 <br />
                Meanwhile, I like to develop Web Application myself. <br />
                so, nomally I study about the Web Development using MERN STACK.<br />
                And I teamed up called "ninja coders" my team is learn about Web. Since 2021.03~ <br />  
                My hobby is watch Movies and also I love to play game. 😂<br />
                And I have "ISTJ" MBTI type! Thank You !🙇🏻‍♂️
            </IntroduceMsg>

            <ExperienceMsg>
                <h1>What did I Do? 🤔</h1>

                <h3>Self Study</h3>
                <div>2020.03 ~ 2020.06 : 생활코딩 (HTML, CSS, Node, Express, MySQL)</div>
                <div>2020.07 ~ 2020.08 : 컴퓨터사이언스(한빛출판사)</div>
                <div>2020.09 ~ 2020.09 : 제로초 - Javascript 게임만들기</div>
                <div>2020.10 ~ 2020.12 : 노마드코더 - 클론코딩 Junior Track(HTML, CSS, Nodejs, Express, MongoDB, SocketIO)</div>
                <div>2021.01 ~ 2021.01 : 스파르타코딩클럽 - React</div>
                <div>2021.02 ~ 2021.02 : 지옥에서 온 Git﹠Github + JhonAhn - BoilerPlate ﹠ 쇼핑몰 클론코딩</div>
                <div>2021.03 ~ 2021.03 : Modern Javascript Tutorial[PART1] + 모두의 알고리즘 with.파이썬</div>
                <div>예정 4월 : Modern Javascript Tutorial[PART1] + MongoDB Study + JhonAhn - 유튜브 ﹠ 영화 클론코딩 + 알고리즘 문제풀이</div>
                <div>예정 5월 : Team Project + Modern Javascript Tutorial[PART2,3] + MongoDB Study + 알고리즘 문제풀이</div>
                <div>예정 6월 : Team Project + Modern Javascript Tutorial[Review] + HTTP Study + TDD개발론 + 알고리즘 문제풀이</div>
                <div>예정 7월 : Team Project + HTTP Study + Linux</div>
                <div>예정 8월 : Team Project + HTTP Study + Docker</div>


                <h3>At School</h3>
                <div>1학기 : 블록체인 플랫폼 기초, 토큰활용디지털플랫폼, 알고리즘특론 </div>
                <div>2학기 : 블록체인개론, 컴퓨터시스템1, 클라우드컴퓨팅(AWS)</div>
                <div> Ing.... </div>

            </ExperienceMsg>

        </div>
    )
}

export default Introduce;

const IntroduceMsg = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90vh;
    font-size : 25px;
    background-color: floralwhite;
    line-height: 40px;
    padding: 15px 50px;
    font-weight: 600;
`;

const ExperienceMsg = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    font-size : 25px;
    background-color: azure;
    line-height: 40px;
    padding: 15px 50px;
    font-weight: 600;
`;
