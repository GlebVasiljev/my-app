import Popup from 'reactjs-popup';
import styled from 'styled-components';
import img from './donut.png';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0d15;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 460px;
  height: 464px;
  left: 40px;
  top: 40px;
`;

export const MainContainer = styled.div`
  position: relative;
  width: 540px;
  height: 544px;
  left: 0px;
  top: 0px;
  background-color: #5431b7;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  position: static;
  width: 460px;
  height: 80px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 35px 0px;
`;

export const HeadImg = styled.image`
  position: static;
  width: 170px;
  height: 154.39px;
  left: 290px;
  top: -74.39px;

  background: url(donut.png);
  background-image: url(${img});

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 37px;
`;

export const HeadText = styled.div`
  position: static;
  width: 253px;
  height: 80px;
  left: 0px;
  top: 0px;

  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 40px;

  text-transform: uppercase;

  color: #d6ccf5;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 100%;
  height: 238px;
  left: 0px;
  top: 115px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;
`;

export const InputField = styled.div`
  position: static;
  width: 98.5%;
  height: 66px;
  order: 1;
  flex-grow: 0;
  background-color: #261362;
  border-radius: 2px;
  margin-bottom: 20px;

  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #d6ccf5;
`;

export const Label = styled.label`
  position: absolute;
  width: 60px;
  height: 20px;
  left: 20px;
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #00b8e0;
`;

export const Input = styled.input`
  position: absolute;
  width: 420px;
  height: 20px;
  left: 20px;
  margin-top: 30px;
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: auto;
  border: none;
  background-color: #261362;
  color: #d6ccf5;

  :valid {
    label::before {
      color: none;
    }
    color: #d6ccf5;
  }
`;

export const Button = styled.div`
  position: static;
  width: 460px;
  height: 76px;
  left: 0px;
  top: 388px;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 35px 0px;
`;

export const Fill = styled.button`
  position: absolute;
  width: 450px;
  left: 10px;
  top: 85.78%;
  bottom: 0%;

  background: #d6ccf5;
  border-radius: 2px;

  font-family: termina, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
  color: #5431b7;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background: #ece9f3;
  }

  &:active {
    background: #00b8e0;
    color: #261362;
    position: absolute;
    left: 1px;
    top: 84.1%;
    transition-duration: 0.1s;
  }
`;

export const Outline = styled.div`
  position: absolute;
  width: 450px;
  left: 0px;
  top: 83.62%;
  bottom: 2.16%;

  border: 1.7px solid #d6ccf5;
  box-sizing: border-box;
  border-radius: 2px;
`;

export const StyledPopUp = styled(Popup)``;

export const InsidePopUp = styled.div`
  width: 539px;
  height: 544px;
  margin-left: -10px;
  margin-top: -511px;
  background-color: #5431b7;
`;

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 278px;
  height: 269.39px;
  left: 131px;
  top: -378px;
`;

export const ImgInPupUp = styled.img`
  position: static;
  width: 170px;
  height: 154.39px;
  left: 0px;
  top: 0px;
  background-image: url(${img});
`;

export const LabelInPupUp = styled.label`
  position: static;
  width: 278px;
  height: 80px;
  left: 0px;
  top: 189.39px;
  font-family: termina, sans-serif;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  font-size: 45px;
  line-height: 40px;

  color: #d6ccf5;
`;
