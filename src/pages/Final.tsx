import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Final = () => {
return(
    <>
    <Wrapper>
        <H1>Заявка принята</H1>
        <P>Держите телефон под рукой.<br/> Скоро с Вами свяжется наш менеджер. </P>
    </Wrapper>
    <Qr>
        <img src={process.env.PUBLIC_URL + "/images/qrWithText.svg"} alt={'QR'}/>
    </Qr>

    <Link to='/addForTV'>
    <Close>
        <Cross>
            <img src={process.env.PUBLIC_URL + "/images/cross.svg"} alt={'close'}/>
        </Cross>
    </Close>
    </Link>
    </>
)
}
export default Final;

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 380px;
height: 720px;
background-color: #86D3F4;
box-sizing: border-box;
padding: 70px 48px 72px 48px;
display: flex;
flex-direction: column;
gap: 16px;
justify-content: center;
`

const H1 = styled.div`
font-family: 'Roboto',
line-height: 37px;
font-size: 32px;
font-weight: 700;
color: #000000;
text-align: center;`

const P = styled(H1)`
line-height: 16px;
font-size: 14px;
font-weight: 400;`

const Qr = styled.div`
position: absolute;
bottom: 40px;
right: 40px;
width: 314px;
height: 110px;`

const Close = styled.div`
position: absolute;
box-sizing: border-box;
width: 88px;
height: 52px;
top: 20px;
right: 20px;
border: 2px solid black;
background-color: #FFFFFF;
cursor: pointer;
`

const Cross = styled.div`
position: relative;
width: 38px;
height: 38px;
top: 5px;
left: 25px;
color: #FFFFFF;
`