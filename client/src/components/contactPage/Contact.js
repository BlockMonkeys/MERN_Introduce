import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from "axios";
import { Row, Col } from "antd";



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

function Contact() {
    const [Customer, setCustomer] = useState("");
    const [Description, setDescription] = useState("");
    const classes = useStyles();
    const mailingData = {
        from : Customer,
        description : Description,
    }

    const submitMailHandler = () => {
        Axios.post("/api/mail", mailingData)
            .then(response => {
                if(response.data.success){
                    alert(response.data.msg);
                } else {
                    alert(`일시적인 오류로 메일이 전송되지 않았습니다. 아래 카카오 오픈챗을 이용해주세요 😅`)
                }
                setCustomer("");
                setDescription("");
            });
    };

    const openChatHandler = () => {
        window.open("https://open.kakao.com/o/snhmcI5c", "_blank");
    }

    const handleCustomer = (e) => {
        e.preventDefault();
        setCustomer(e.target.value);
    }
    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    return (
        <ContactComponent>
            
            <Row gutter={[24, 24]}>

            <Col lg={12} sm={24}>
                <div>
                <EmailContainer 
                    onSubmit={submitMailHandler}
                    action="http://localhost:5000/mail"
                    method="POST"
                    className={classes.root} 
                    noValidate autoComplete="off">
                    <h1 style={{ textAlign: "center"}}>📧 Email To BlockMonkey 📧</h1>
                    <TextField 
                        value={Customer}
                        onChange={handleCustomer}
                        label="회신받을 이메일 주소" 
                        variant="outlined" />
                    <TextField
                        id="outlined-multiline-static"
                        label="내용"
                        multiline
                        rows={8}
                        fullWidth
                        variant="outlined"
                        value={Description}
                        onChange={handleDescription}
                    />
                    <Button
                        onClick={submitMailHandler}
                        variant="contained"
                        Color="primary"
                        className={classes.button}
                    >
                        Send
                    </Button>    
                    
                </EmailContainer>
                </div>
                </Col>
                <Col lg={12} sm={24}>
                    <KakaoContainer>
                        <h1>📱 KaKao Open Chat 📱</h1>
                        <QrImg src="http://localhost:5000/static/kakao.png" alt="QR CODE" />
                        <Button
                        onClick={openChatHandler}
                        variant="contained"
                        Color="primary"
                        className={classes.button}
                        >
                            Participate in the OpenChat
                        </Button>
                    </KakaoContainer>
                </Col>
            </Row>
        </ContactComponent>
    )
}

export default Contact;

const ContactComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
`;

const EmailContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const KakaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const QrImg = styled.img`
    width: 275px;
    height: 275px;
`;