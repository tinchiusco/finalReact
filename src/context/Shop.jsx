import React from "react";
import { createContext, useState } from "react";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (productToAdd) => {
    console.log(productToAdd);

    const flagRepeated = isProductRepeated(productToAdd.id);

    if (flagRepeated) {
      const productRepeatMod = products.find(
        (productInCart) => productInCart === productToAdd.id
      );
      productRepeatMod.quantity += productToAdd.quantity;

      const productsCartNoRepeat = products.filter(
        (productsInCart) => productsInCart.id !== productToAdd.id
      );
      setProducts([...productsCartNoRepeat, productRepeatMod]);
    } else {
      setProducts([...products, productToAdd]);
    }
  };

  const isProductRepeated = (id) => {
    return products.some((product) => product.id === id);
  };

  //eliminar producto

  const removeProduct = (id) => {
    const productsCart = products.filter(
      (productsInCart) => productsInCart.id !== id
    );
    setProducts(productsCart);
  };

  //vaciar carrito

  const emptyCart = () => {
    setProducts([]);
  };

  //calcular el total de compra

  const calcTotal = () => {
    const total = products.reduce(
      (acc, productoActual) =>
        (acc += productoActual.quantity * productoActual.price),
      0
    );
    return total;
  };

  //calculo el total de items

  const totalItemsCart = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity));

    return total;
  };

  return (
    <ShopProvider
      value={{
        products,
        addProduct,
        removeProduct,
        emptyCart,
        calcTotal,
        totalItemsCart,
      }}
    >
      {children}
    </ShopProvider>
  );
};
