import Button from "../Button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

// import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  const title = type === "catalogue" ? "Products" : "Carrinho";

  return (
    <ul>
      <h2> {title} </h2>
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <>
            <li key={index}>
              {item.name} <Button type={type} item={item} />
            </li>
          </>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <li key={index}>
            {item.name} <Button type={type} item={item} />
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
