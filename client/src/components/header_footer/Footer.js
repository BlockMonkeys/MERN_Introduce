import React from 'react';
import styled from "styled-components";

function Footer(props) {
    return (
        <React.Fragment>
            <FooterText>Thank you for visiting my Introduce Page this page is made of React ﹠ Express.</FooterText>
        </React.Fragment>
    )
}

export default Footer;

const FooterText = styled.div`
    font-size: 12px;
    font-style: italic;
`;