import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Menu from "./sections/Header_Menu";

function Header(props) {
    const history = useHistory();
    useEffect(() => {
        console.log(history);
    }, [])
    return (
        <HeaderComponent>
            <LogoBox onClick={()=> history.push("/")}>
                <img src={`http://localhost:5000/static/blockmonkey.jpeg`} 
                alt={`Logo Image`} 
                style={{width: "50px", height: "50px", border: "1px solid lightgray", borderRadius:"25px"}}/>
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

const HeaderTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
    @media (max-width : 700px){
        font-size: 20px;
        padding-top: 8px;
    }
    @media (max-width: 500px){
        font-size: 12px;
        padding-top: 17px;
    }
`;


