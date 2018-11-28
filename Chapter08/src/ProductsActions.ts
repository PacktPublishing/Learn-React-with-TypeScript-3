import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import {
  getProduct as getProductFromAPI,
  getProducts as getProductsFromAPI
} from "./ProductsData";
import {
  IProductsGetAllAction,
  IProductsGetSingleAction,
  IProductsLoadingAction,
  IProductsState,
  ProductsActionTypes
} from "./ProductsTypes";

const loading: ActionCreator<IProductsLoadingAction> = () => ({
  type: ProductsActionTypes.LOADING
});

export const getProducts: ActionCreator<
  ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const products = await getProductsFromAPI();
    return dispatch({
      products,
      type: ProductsActionTypes.GETALL
    });
  };
};

export const getProduct: ActionCreator<
  ThunkAction<Promise<any>, IProductsState, null, IProductsGetSingleAction>
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const product = await getProductFromAPI(id);
    dispatch({
      product,
      type: ProductsActionTypes.GETSINGLE
    });
  };
};
