import React from "react";
import PhoneBlock from "../components/PhoneBlock";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PhoneInput = () => {
    return(
        <>
        <PhoneBlock/>
        <Qr>
            <img src={"/images/qrWithText.svg"} alt={'QR'}/>
        </Qr>
      

        <Link to='/'>
        <Close>
            <Cross>
                <img src={"/images/cross.svg"} alt={'close'}/>
            </Cross>
        </Close>
        </Link>
        </>
    )
}

export default PhoneInput;

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
`