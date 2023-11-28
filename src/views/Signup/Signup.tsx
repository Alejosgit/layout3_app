import React from "react";
import {
  ContainerFather,
  ImgLogo,
  ContainerLogoTitleUp,
  ImgBackground,
  ContainerInputButton,
  TextUp,
  TextInputLogin,
  ButtonSignup,
  TextUnder,
} from "../../components/Styles/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Details from "../Details";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      PatientID: "",
      Password: "",
      ReEnterPassword: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputLogin
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="Name"
          />
          {errors.Name && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputLogin
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="Email"
          />

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputLogin
                placeholder="Patient ID"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="PatientID"
          />

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputLogin
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="Password"
          />

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputLogin
                placeholder="Re-Enter Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="ReEnterPassword"
          />

          <ButtonSignup onPress={Details}>SIGN UP</ButtonSignup>
          {/* <TextInputLogin label="Name" />
          <TextInputLogin label="Email" />
          <TextInputLogin label="Patient ID" />
          <TextInputLogin label="Password" />
          <TextInputLogin label="Re-enter Password" />
          <ButtonSignup>SIGN UP</ButtonSignup>
          <TextUnder>Forgot Password?</TextUnder> */}
        </ContainerInputButton>
      </ContainerFather>
    </SafeAreaView>
  );
};

export default Signup;
