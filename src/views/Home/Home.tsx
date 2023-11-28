import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ContainerFather } from "../../components/Styles/Styles";

const Home = () => {
  const handleFirstMenuPress = () => {
    // Manejar la acción del primer menú
    console.log("Presionado el primer menú");
  };
  return (
    <ContainerFather>
      <Text>Contenido de la primera pantalla</Text>
      <TouchableOpacity onPress={handleFirstMenuPress}>
        <Text>Ir al segundo menú</Text>
      </TouchableOpacity>
    </ContainerFather>
  );
};

export default Home;
