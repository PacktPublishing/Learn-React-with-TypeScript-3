import * as React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "./ProductsData";
import withLoader from "./withLoader";

interface IProps {
  products?: IProduct[];
  search: string;
}

const ProductsList: React.SFC<IProps> = props => {
  const search = props.search;
  return (
    <ul className="product-list">
      {props.products &&
        props.products.map(product => {
          if (
            !search ||
            (search &&
              product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)
          ) {
            return (
              <li key={product.id} className="product-list-item">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            );
          } else {
            return null;
          }
        })}
    </ul>
  );
};

export default withLoader(ProductsList);
