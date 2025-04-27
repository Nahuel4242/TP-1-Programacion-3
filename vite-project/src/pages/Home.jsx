import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Home = () => {
  const datos = {
    imagen: "./public/foto-perfil.png",
    nombre1: "Nahuel",
    nombre2: "Octavio",
    apellido: "Juarez",
    edad: 23,
  };

  return (
    <div>
      <Header datos={datos} />
      <Main datos={datos} />
      <Footer />
    </div>
  );
};
