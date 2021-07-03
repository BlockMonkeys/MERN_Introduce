import React from 'react'
import styled from "styled-components";

function Certificate() {
    return (
        <CertificateComponent>
            <h1>Certificated 📋</h1>
            <CertificateBox>
                <h3>📖 TOEIC - 705 </h3>
            </CertificateBox>
        </CertificateComponent>
    )
}

export default Certificate;

const CertificateComponent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    font-size : 25px;
    background-color: lavender;
    line-height: 40px;
    padding: 50px 50px;
    font-weight: 600;
`;

const CertificateBox = styled.div`
    margin : 25px 0;
`;


const CertificatedImg = styled.img`
    width: 350px;
    height: 350px;
`;
