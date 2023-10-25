import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";


export default function Banner () {

    return (
        <Wrapper>
            <p>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br/>ПОДАРИТЕ ЕМУ СОБАКУ!</p>
            <QrCode>
                <img src={"../images/qr.svg"} alt={'QR'}/>
            </QrCode>
            <p>Сканируйте QR-код или нажмите ОК</p>
            <Link to='/phone'>
                <Button>ок</Button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
position: absolute;
right: 0;
bottom: 143px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: #86D3F4;
width: 250px;
height: 360px;
box-sizing: border-box;
padding: 20px 10px 10px 10px;
z-index: 99;
border-radius: 10px;
text-decoration: none;
`

const QrCode = styled.div`
position: relative;
width: 126px;
height: 126px;
`