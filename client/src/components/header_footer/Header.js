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
                style={{width: "35px", height: "35px"}}/>
            </LogoBox>
            <div>
                <HeaderTitle>Welcome To BlockMonkey's Website 👋🏼</HeaderTitle>
            </div>
            
            <div>
                <Menu />
            </div>

        </HeaderComponent>
    )
}


export default Header;

const HeaderComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0 15px;
`;

const HeaderTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
`;

const LogoBox = styled.div`
    :hover{
        cursor: pointer;
    }
`;

