import React from 'react';
import styled from "styled-components";

function Footer(props) {
    return (
        <React.Fragment>
            <FooterText>Thank you for visiting my Introduce Page the page is made of React ﹠ Node</FooterText>
        </React.Fragment>
    )
}

export default Footer;

const FooterText = styled.div`
    font-size: 12px;
    font-style: italic;
`;