import styled, { css } from "@emotion/native";
import { TextInput, Button } from "react-native-paper";
import { Image, ImageBackground } from "react-native";

export const ContainerFather = styled.View`
  gap: 5px;
  position: absolute;
  top: 50px;
  left: 70px;
`;

export const ContainerLogoTitleUp = styled.View``;

export const ContainerInputButton = styled.View`
  gap: 20px;
`;

export const ImgLogo = styled(Image)`
  height: 140px;
  width: 140px;
  margin: auto;
`;

export const ImgBackground = styled(ImageBackground)`
  height: 795px; /*height and width*/
  width: 420px;
`;

export const TextUp = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const TextUnder = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const TextInputLogin = styled(TextInput)`
  width: 270px;
  justify-content: center;
`;

export const ButtonLogin = styled(Button)`
  border-radius: 40px;
  background-color: #ea1179;
  text-align: center;
  height: 50px;
  text-color: #fff;
  color: #fff;
`;
export const ButtonSignup = styled(Button)`
  border-radius: 40px;
  background-color: #ea1179;
  text-align: center;
  height: 50px;
`;
