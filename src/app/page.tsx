"use client";

import { useEffect, useState } from "react";

export default function Home(searchParams: any) {
  const [id, setId] = useState(null);
  const [sendStatus, setSend] = useState(false);

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
        {sendStatus ? (
          <Thanks></Thanks>
        ) : (
          <MainContent id={id} setSend={setSend}></MainContent>
        )}
      </section>
    </>
  );
}

function MainContent({ id, setSend }: any) {
  function send(formData: any) {
    const fetchOptions: any = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        first: formData.get("one"),
        second: formData.get("two"),
        third: formData.get("three"),
        fourth: formData.get("four"),
        fifth: formData.get("five"),
        sixth: formData.get("six"),
        seventh: formData.get("seven"),
        eighth: formData.get("eight"),
      }),
    };
    fetch(
      "https://market-research-back.vercel.app/sendSurvey",
      fetchOptions
    ).then();
    setSend(true);
  }
  return (
    <>
      <div className="content">
        <p>
          Responde estas preguntas para poder encontrar la mejor solución
          digital para ti.
        </p>
        <p>
          Toda la información que proporciones en esta encuesta es confidencial
          y van de acuerdo a nuestra política de privacidad.
        </p>
        <hr />
        <form action={send}>
          <label>
            Nombre de la Empresa
            <input name="one" type="text" placeholder="Nombre de la empresa" />
          </label>
          <label>
            ¿Hay áreas específicas donde sientas que un software personalizado
            podría mejorar la productividad?
            <textarea name="two"></textarea>
          </label>
          <label>
            ¿Qué software o programa informático utilizas actualmente para la
            gestión de inventarios (WMS), de transporte(TMS) o de recursos(ERP)?
            <textarea name="three"></textarea>
          </label>
          <label>
            ¿Qué aspectos le gustan de la solución actual y que mejorarías?
            <textarea name="four"></textarea>
          </label>
          <label>
            ¿Cuáles son las características clave que esperarías en un software
            a medida para tu empresa?
            <textarea name="five"></textarea>
          </label>
          <label>
            ¿Hay integraciones específicas con otras herramientas que consideras
            indispensables?
            <textarea name="six"></textarea>
          </label>
          <label>
            ¿Está dispuesto a considerar la adquisición de un software
            personalizado que incorpore inteligencia artificial para optimizar
            los procesos empresariales?
            <textarea name="seven"></textarea>
          </label>
          <label>
            ¿Está dispuesto a que te contactemos a través de correo electrónico?
            <input name="eight" type="text" placeholder="Correo electrónico" />
          </label>
          <hr />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

function Thanks() {
  return (
    <>
      <div className="thanks">
        <h1>Gracias por responder</h1>
        <h3>Estaremos en contacto lo más pronto posible</h3>
      </div>
    </>
  );
}
