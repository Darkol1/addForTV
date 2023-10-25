import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import PhoneButton from "./PhoneButton";
import CheckBox from "./CheckBox";



export default function PhoneBlock () {

    const [inputValue, setInputValue] = useState('+7');
    const [IsChecked, setIsChecked] = useState(false);
    const handleDigitInput = (digit: string) => {
        setInputValue(inputValue + digit);
      };

    const delDigit = (phone: string) => {
        setInputValue(phone.slice(0, -1))
    }  

    const isNumberValid = (phone:string) => {
        return (!!(inputValue.match(/^\+\d{11}$/))) ? true: false
    };
  
    return (
        <Wrapper>
            <H1>Введите ваш номер мобильного телефона</H1>
       
            <Number type="tel" value={inputValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
            <Text>и с Вами свяжется наш менеждер для дальнейшей консультации</Text>
            <ButtonWrapper>
                <PhoneButton onClick={() => handleDigitInput('1')}>1</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('2')}>2</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('3')}>3</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('4')}>4</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('5')}>5</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('6')}>6</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('7')}>7</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('8')}>8</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('9')}>9</PhoneButton>
                <PhoneButton onClick={() => delDigit(inputValue)}>стереть</PhoneButton>
                <PhoneButton onClick={() => handleDigitInput('0')}>0</PhoneButton>
            </ButtonWrapper>
            
            <CheckContainer>

                <CheckBox
		            // name={'IsChecked'}
					checked={IsChecked}
					onChange={() => setIsChecked((p) => !p)}
                    />
					<CheckText>
					Согласие на обработку персональных данных
				</CheckText>
            </CheckContainer>

            <Button disabled={!isNumberValid(inputValue) || IsChecked}><Link to={'/final'}>Подтвердить номер</Link></Button>

        </Wrapper>

    )
}

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
width: 380px;
height: 720px;
background-color: #86D3F4;
box-sizing: border-box;
padding: 70px 48px 72px 48px;

`

const H1 = styled.div`
font-family: 'Roboto',
line-height: 30px;
font-size: 26px;
font-weight: 400;
color: #000000;
text-align: center;
`

const Number = styled.input`
font-family: 'Roboto',
line-height: 37px;
font-size: 32px;
font-weight: 700;
color: #000000;
text-align: center;
width: 100%;
height: 48px;
background-color: transparent;
padding: 16px 12px;
border:none;

`

const Text = styled.div`
font-family: 'Roboto',
line-height: 16px;
font-size: 14px;
font-weight: 400;
color: #000000;
text-align: center;
`

const ButtonWrapper = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
margin-top: 32px;`

const CheckText = styled.div`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
text-align: left;
`

const CheckContainer = styled.div`
display: flex;
gap: 10px;
margin-top: 16px;
margin-bottom: 16px;
justify-content: center;
align-items: center;`



