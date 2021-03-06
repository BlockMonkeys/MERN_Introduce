import React from 'react'
import styled from "styled-components";

function ExperienceMsg() {
    return (

        <ExperienceMsgComponent>
            <h1>What did I Do? ๐ค</h1>

            <ContentDividedBlock>
                <Date>2020๋ 3๋ถ๊ธฐ</Date> 
                <SelfStudyContent>โ๐ผ ์น ํ๋ก๊ทธ๋๋ฐ ์๋ฌธํ๊ธฐ</SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. ์ํ์ฝ๋ฉ)</SelfStudyLecture>
                <SchoolContent>๐ ๋ธ๋ก์ฒด์ธํ๋ ํผ๊ธฐ์ด : ๋ธ๋ก์ฒด์ธํ๋ ํผ ๊ธฐ์ด๋ฅผ ํตํ ๋ธ๋ก์ฒด์ธ ์ ํ๋ฆฌ์ผ์ด์ ๋ง๋ค์ด๋ณด๋ฉฐ Dapp ๊ตฌ์กฐ๋ฅผ ์ตํ</SchoolContent>
                <SchoolContent>๐ ํ ํฐํ์ฉ๋์งํธํ๋ซํผ : ๋ธ๋ก์ฒด์ธ ์ํ๊ณ ๊ตฌ์ฑ์ ์ญํ ๊ณผ ํ๊ฒฝ์ ์ตํ(์ํธํํ ํ๋, ๊ฑฐ๋์, ์ค์  ํ๋ก์ ํธ ๋ฑ)</SchoolContent>
                <SchoolContent>๐ ์๊ณ ๋ฆฌ์ฆํน๋ก  : ํ์ด์ฌ์ ํ์ฉํด ๋ณต์ก๋, ์คํ, ํ, ์ฌ๊ท, ํ์๊ณผ ์ ๋ ฌ ๋ฑ์ ๋ํด ํ์ต</SchoolContent>
            </ContentDividedBlock>

            <ContentDividedBlock>
                <Date>2020๋ 4๋ถ๊ธฐ</Date> 
                <SelfStudyContent>โ๐ผ Javascript๏น ์ปดํจํ์ฌ๊ณ ์ตํ๊ธฐ + Nodejs ์ค์  ์ ํ๋ฆฌ์ผ์ด์ ์ ์ + ์ปดํจํฐ๊ณตํ๊ฐ๋ก ๊ณต๋ถ</SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. ์ ๋ก์ด, Modern JS Tutorial, NomadCoders, ์ปดํจํฐ์ฌ์ด์ธ์ค[ํ๋น์ถํ์ฌ])</SelfStudyLecture>
            </ContentDividedBlock>
            
            <ContentDividedBlock>
                <Date>2021๋ 1๋ถ๊ธฐ</Date> 
                <SelfStudyContent>โ๐ผ NinjaCoders ํ ๊ฒฐ์ฑ๏น ์ก์ฑ + Git๏น Github ํ์ต + React ํ์ต + MERN STACK ์น ์ ํ๋ฆฌ์ผ์ด์ ๊ฐ๋ฐ </SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. ์ํ์ฝ๋ฉ + ์คํ๋ฅดํ์ฝ๋ฉํด๋ฝ + ์ธํ๋ฐ[JhonAhn])</SelfStudyLecture>
            </ContentDividedBlock>
            
            <ContentDividedBlock>
                <Date>2021๋ 2๋ถ๊ธฐ</Date> 
                <SelfStudyContent>โ๐ผ NinjaCoders ํ๋ก์ ํธ ๋์ + ์ธํ๋ผ ๊ณต๋ถ Linux, Docker, AWS + Toeic </SelfStudyContent>
                <SelfStudyLecture>(Used Lecture. ์ํ์ฝ๋ฉ, JhonAhn, AWS๊ณต์ธ์๋ฃจ์์ค์ํคํํธ์ฌ์ธ์์คํฐ๋๊ฐ์ด๋)</SelfStudyLecture>
                <SchoolContent>๐ ๋ธ๋ก์ฒด์ธ๊ฐ๋ก  : ๋ธ๋ก์ฒด์ธ์ ๊ฐ๋๊ณผ ์ฉ์ด, ๊ธฐ์ ์  ๊ธฐ์ด, ํ์์ฑ ๊ทธ๋ฆฌ๊ณ  ์๋์๋ฆฌ ๋ฑ ์ ๋ฐ์ ์ธ ๋ธ๋ก์ฒด์ธ ๊ฐ๋ก  ์ง์์ ๋ํด ํ์ตํจ</SchoolContent>
                <SchoolContent>๐ ์ปดํจํฐ์์คํ1 : ์ปดํจํฐ๊ตฌ์กฐ, ์ด์์ฒด์ , ๋คํธ์ํฌ, ๋ฐ์ดํฐ๋ฒ ์ด์ค ๋ฑ ์ ๋ฐ์ ์ธ ์ปดํจํฐ์ฌ์ด์ธ์ค์ ๊ธฐ๋ณธ์ ์ธ ๋ด์ฉ๋ค์ ํ์ตํจ</SchoolContent>
                <SchoolContent>๐ ํด๋ผ์ฐ๋์ปดํจํ : EC2, VPC, Storage, RDB, ํด๋ผ์ฐ๋ ์ํคํ์ณ ๋ฑ ์ ๋ฐ์ ์ธ ์๋ง์กด์น์๋น์ค(AWS)์ ๋ด์ฉ์ ํ์ตํจ</SchoolContent>
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