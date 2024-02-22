"use client";

import { useEffect, useRef, useState } from "react";

export default function Home(searchParams: any) {
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(searchParams.searchParams.id);
  }, []);

  return (
    <>
      <section>
        <div className="header">
          <img src="/LogoTransparenteAzul.svg" alt="Logo" />
          <div className="text">
            <span className="title">Caso de estudio</span>
            <span className="desc">
              Empresas de producción y distribución de aceite de Oliva
            </span>
          </div>
        </div>
        <div className="content">
          <p>
            Responde estas preguntas para poder encontrar la mejor solución
            digital para ti.
          </p>
          <p>
            Toda la información que proporciones en esta encuesta es
            confidencial y van de acuerdo a nuestra política de privacidad.
          </p>
          <hr />
          <label>
            Nombre de la Empresa
            <input type="text" placeholder="Nombre de la empresa"/>
          </label>
          <label>
            ¿Hay áreas específicas donde sientas que un software personalizado
            podría mejorar la productividad?
            <textarea></textarea>
          </label>
          <label>
            ¿Qué software o programa informático utilizas actualmente para la
            gestión de inventarios (WMS), de transporte(TMS) o de recursos(ERP)?
            <textarea></textarea>
          </label>
          <label>
            ¿Qué aspectos le gustan de la solución actual y que mejorarías?
            <textarea></textarea>
          </label>
          <label>
            ¿Cuáles son las características clave que esperarías en un software
            a medida para tu empresa?
            <textarea></textarea>
          </label>
          <label>
            ¿Hay integraciones específicas con otras herramientas que consideras
            indispensables?
            <textarea></textarea>
          </label>
          <label>
            ¿Está dispuesto a considerar la adquisición de un software
            personalizado que incorpore inteligencia artificial para optimizar los procesos empresariales?
            <textarea></textarea>
          </label>
          <label>
            ¿Está dispuesto a que te contactemos a través de correo
            electrónico?
            <input type="text" placeholder="Correo electrónico"/>
          </label>
          <hr />
          <button>Enviar</button>
        </div>
      </section>
    </>
  );
}
