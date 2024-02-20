'use client';

import { useEffect, useRef, useState } from "react";
// import './page.css';


export default function Home(searchParams: any) {
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(searchParams.searchParams.id);
  }, [])
  
  return (
    <>
      <section>
        <div className="header">
          Hola bello
          <img src="/LogoTransparenteAzul.svg" alt="Logo" />
        </div>
      </section>
    </>
  );
}
