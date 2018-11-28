import { Reducer } from "redux";
import {
  IProductsState,
  ProductsActions,
  ProductsActionTypes
} from "./ProductsTypes";

const initialProductState: IProductsState = {
  currentProduct: null,
  products: [],
  productsLoading: false
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (
  state = initialProductState,
  action
) => {
  switch (action.type) {
    case ProductsActionTypes.LOADING: {
      return {
        ...state,
        productsLoading: true
      };
    }
    case ProductsActionTypes.GETALL: {
      return {
        ...state,
        products: action.products,
        productsLoading: false
      };
    }
    case ProductsActionTypes.GETSINGLE: {
      return {
        ...state,
        currentProduct: action.product,
        productsLoading: false
      };
    }
  }
  return state;
};
