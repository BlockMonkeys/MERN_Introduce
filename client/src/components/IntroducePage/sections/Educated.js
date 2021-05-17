import React from 'react'
import styled from "styled-components";


function Educated() {
    return (
        <EducatedComponent>
            <h1>Educated 🏫</h1>
            <div>🎓 Oxtand International School, In Shenzhen, China.</div>
            <div>🎓 HongIk University, Majoring Business Administration.</div>
            <div>🎓 Kookmin University, Graduate School of Software Technology, Majoring Blockchain.</div>
        </EducatedComponent>
    )
}

export default Educated

const EducatedComponent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
    font-size : 25px;
    background-color: mintcream;
    line-height: 40px;
    padding: 50px 50px;
    font-weight: 600;
`;
