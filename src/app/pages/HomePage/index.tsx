import * as React from 'react';
import Popup from 'reactjs-popup';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import {
  AppWrapper,
  MainContainer,
  MainWrapper,
  HeadWrapper,
  HeadText,
  HeadImg,
  InputWrapper,
  InputField,
  Label,
  Button,
  Fill,
  Outline,
  Input,
  StyledPopUp,
  InsidePopUp,
  ImgInPupUp,
  LabelInPupUp,
  PopUpWrapper,
} from './styles';

export function HomePage() {
  return (
    <AppWrapper>
      <MainContainer>
        <MainWrapper>
          <HeadWrapper>
            <HeadText>AZERON DONUT</HeadText>
            <HeadImg />
          </HeadWrapper>
          <InputWrapper>
            <InputField>
              <Label>Name</Label>
              <Input placeholder="Name"></Input>
            </InputField>
            <InputField>
              <Label>Surname</Label>
              <Input placeholder="Surname"></Input>
            </InputField>
            <InputField>
              <Label>Email</Label>
              <Input placeholder="Email"></Input>
            </InputField>
          </InputWrapper>
          <Outline />
          <StyledPopUp
            trigger={<Fill> send a donut</Fill>}
            position="bottom center"
          >
            <InsidePopUp>
              <PopUpWrapper>
                <ImgInPupUp />
                <LabelInPupUp>it's on the way!</LabelInPupUp>
              </PopUpWrapper>
            </InsidePopUp>
          </StyledPopUp>
        </MainWrapper>
      </MainContainer>
    </AppWrapper>
  );
}
