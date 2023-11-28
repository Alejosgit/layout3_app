import React from "react";
import {
  ContainerFather,
  ImgLogo,
  ContainerLogoTitleUp,
  ImgBackground,
  ContainerInputButton,
  TextUp,
  TextInputLogin,
  ButtonLogin,
  TextUnder,
} from "../../components/Styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  return (
    <SafeAreaView>
      <ImgBackground
        source={require("../../components/image/image_fondo.jpg")}
      ></ImgBackground>
      <ContainerFather>
        <ContainerLogoTitleUp>
          <ImgLogo
            source={require("../../components/image/Corazon_con_cruz.png")}
          />
          <TextUp>Patient plus</TextUp>
        </ContainerLogoTitleUp>
        <ContainerInputButton>
          <TextInputLogin label="Login" />
          <TextInputLogin label="Password" />
          <ButtonLogin>LOGIN</ButtonLogin>
          <TextUnder>Forgot Password?</TextUnder>
        </ContainerInputButton>
      </ContainerFather>
    </SafeAreaView>
  );
};

export default Login;
