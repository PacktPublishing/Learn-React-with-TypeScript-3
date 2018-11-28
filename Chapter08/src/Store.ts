import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "./BasketTypes";
import { productsReducer } from "./ProductsReducer";
import { IProductsState } from "./ProductsTypes";

export interface IApplicationState {
  basket: IBasketState;
  products: IProductsState;
}

const rootReducer = combineReducers<IApplicationState>({
  basket: basketReducer,
  products: productsReducer
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
