import React from "react";

export const Main = (props) => {
  return (
    <>
      <main className="main">
        <div className="card">
          <img src={props.datos.imagen} className="card-img" />
          <div className="card-info">
            <h2>
              {props.datos.nombre1} {props.datos.nombre2} {props.datos.apellido}
            </h2>
            <p>Estudiante de la Universidad Tecnológica de Tucumán.</p>
            <p>
              Actualmente cursando el segundo año de la Tecnicatura en
              Programación.
            </p>
            <p>
              Con <strong>23 años</strong>, he adquirido experiencia en el
              manejo de lenguajes como JavaScript, Java, React y C#.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
