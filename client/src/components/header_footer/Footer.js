import React from 'react';
import styled from "styled-components";

function Footer(props) {
    return (
        <React.Fragment>
            <FooterText>Thank You For visit My Website. blockmonkey@naver.com</FooterText>
        </React.Fragment>
    )
}

export default Footer;

const FooterText = styled.div`
    font-size: 12px;
    font-style: italic;
`;