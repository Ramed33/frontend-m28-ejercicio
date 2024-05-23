import ShoppingCart from "../ShoppingCart";
import ShoppingProducts from "../ShoppingProducts";
import React, { useState } from "react";
import { AppHeader, ViewCart } from "./styles";

function App() {

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return(
    <article>
        <AppHeader>
          <h1>E commerce</h1>
          <ViewCart onClick={() => setMostrarComponente(!mostrarComponente)}>
            {mostrarComponente ? `Ocultar carrito` : `Mostrar carrito`}
          </ViewCart>
        </AppHeader>
        <section>
          {mostrarComponente && <ShoppingCart />}
        </section>
        <ShoppingProducts />
    </article>
  )
};

export default App;