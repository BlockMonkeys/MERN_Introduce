import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Menu from "./sections/Header_Menu";

function Header(props) {
    const history = useHistory();

    return (
        <HeaderComponent>
            <LogoBox onClick={()=> history.push("/")}>
                <Logo src={`https://blockmonkeys-images.s3.ap-northeast-2.amazonaws.com/blockmonkeylogo.jpeg`} 
                alt={`Logo Image`} />
            </LogoBox>

            <HeaderTitle>Welcome To BlockMonkey's Website 👋🏼</HeaderTitle>

            <Menu />
        </HeaderComponent>
    )
}


export default Header;

const HeaderComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
`;

const LogoBox = styled.div`
    :hover{
        cursor: pointer;
    }
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 25px;
    @media (max-width: 320px){
        width: 35px;
        height: 35px;
        margin-top: 5px;
    }
`;

const HeaderTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
    font-family: "Lobster", cursive;
    @media (max-width : 700px){
        font-size: 20px;
        padding-top: 8px;
    }
    @media (max-width: 500px){
        font-size: 12px;
        padding-top: 17px;
    }
    @media (max-width: 320px){
        display: none;
    }
`;


