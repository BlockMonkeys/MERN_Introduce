import React from 'react'
import styled from "styled-components";

function ExperienceMsg() {
    return (

        <ExperienceMsgComponent>
            <h1>What did I Do? 🤔</h1>

            <ContentDividedBlock>
                <Date>2020년 3분기</Date> 
                <SelfStudyContent>✍🏼 웹 프로그래밍 입문하기</SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. 생활코딩)</SelfStudyLecture>
                <SchoolContent>🎓 블록체인플렛폼기초 : 블록체인플렛폼 기초를 통한 블록체인 애플리케이션 만들어보며 Dapp 구조를 익힘</SchoolContent>
                <SchoolContent>🎓 토큰활용디지털플랫폼 : 블록체인 생태계 구성원 역할과 환경을 익힘(암호화폐 펀드, 거래소, 실제 프로젝트 등)</SchoolContent>
                <SchoolContent>🎓 알고리즘특론 : 파이썬을 활용해 복잡도, 스택, 큐, 재귀, 탐색과 정렬 등에 대해 학습</SchoolContent>
            </ContentDividedBlock>

            <ContentDividedBlock>
                <Date>2020년 4분기</Date> 
                <SelfStudyContent>✍🏼 Javascript﹠컴퓨팅사고익히기 + Nodejs 실전 애플리케이션 제작 + 컴퓨터공학개론공부</SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. 제로초, Modern JS Tutorial, NomadCoders, 컴퓨터사이언스[한빛출판사])</SelfStudyLecture>
            </ContentDividedBlock>
            
            <ContentDividedBlock>
                <Date>2021년 1분기</Date> 
                <SelfStudyContent>✍🏼 NinjaCoders 팀 결성﹠육성 + Git﹠Github 학습 + React 학습 + MERN STACK 웹 애플리케이션 개발 </SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. 생활코딩 + 스파르타코딩클럽 + 인프런[JhonAhn])</SelfStudyLecture>
            </ContentDividedBlock>
            
            <ContentDividedBlock>
                <Date>2021년 2분기</Date> 
                <SelfStudyContent>✍🏼 NinjaCoders 프로젝트 돌입 + 인프라 공부 Linux, Docker, AWS + Toeic </SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. 생활코딩, JhonAhn, AWS공인솔루션스아키텍트올인원스터디가이드)</SelfStudyLecture>
                <SchoolContent>🎓 블록체인개론 : 블록체인의 개념과 용어, 기술적 기초, 필요성 그리고 작동원리 등 전반적인 블록체인 개론 지식에 대해 학습함</SchoolContent>
                <SchoolContent>🎓 컴퓨터시스템1 : 컴퓨터구조, 운영체제, 네트워크, 데이터베이스 등 전반적인 컴퓨터사이언스의 기본적인 내용들을 학습함</SchoolContent>
                <SchoolContent>🎓 클라우드컴퓨팅 : EC2, VPC, Storage, RDB, 클라우드 아키텍쳐 등 전반적인 아마존웹서비스(AWS)의 내용을 학습함</SchoolContent>
            </ContentDividedBlock>

            <ContentDividedBlock>
                <Date>2021년 3,4분기</Date>
                <SelfStudyContent>✍🏼 BlockChain Dapp 구축 공부 예정... </SelfStudyContent>
            </ContentDividedBlock>
        </ExperienceMsgComponent>

    )
}

export default ExperienceMsg;


const ExperienceMsgComponent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    font-size : 25px;
    background-color: azure;
    line-height: 40px;
    padding: 50px 50px;
    font-weight: 600;
`;


const ContentDividedBlock = styled.div`
    margin: 15px 0;
`;

const Date = styled.div`
    font-weight: 800;
`;

const SelfStudyContent = styled.div`
    font-size: 19px;
`;

const SelfStudyLecture = styled.div`
    color: gray;
    font-size: 12px;
    font-style: italic;
`;

const SchoolContent = styled.div`
    font-size: 19px;
`;