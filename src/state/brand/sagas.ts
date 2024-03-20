import {call, all, takeEvery, put} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from '../../utils/endPoint';
import {
  getBrands,
  getBrandsSuccess, getDetailProduct,
  getDetailProductSuccess,
  getProducts,
  getProductsSuccess
} from "./reducer.ts";

const getBrandsAPI = token => {
  return fetch(
    `${ROUTE_ENDPOINT}v1/titan/brands/categories/search?category_id=1132&limit=50&offset=1`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then(response => response.json())
    .then(json => {
      if (json.data.brands.length > 0) {
        return json.data.brands;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* getBrandsFlow(action) {
  try {
    const brands = yield call(getBrandsAPI, action.payload);
    yield put(getBrandsSuccess(brands));
  } catch (error) {
    console.log(error, 'error');
  }
}

const getProductsAPI = values => {
  return fetch(
    `${ROUTE_ENDPOINT}v1/titan/brand/${values.brand}/?limit=25&offset=${values.paginate}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${values.token}`,
      },
    },
  )
    .then(response => response.json())
    .then(json => {
      if (json.data.items.length > 0) {
        return json.data.items;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* getProductsFlow(action) {
  try {
    const products = yield call(getProductsAPI, action.payload);
    yield put(getProductsSuccess(products));
  } catch (error) {
    console.log(error, 'error');
  }
}

const getDetailProductAPI = values => {

  return fetch(`${ROUTE_ENDPOINT}v1/titan/brand/item/${values.code}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${values.token}`,
    },
  })
    .then(response => response.json())
    .then(json => {
      if (json.data?.code) {
        return json.data;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* getDetailProductFlow(action) {
  try {
    const products = yield call(getDetailProductAPI, action.payload);
    yield put(getDetailProductSuccess(products));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* brandWatcher() {
  yield all([
    takeEvery(getBrands.type, getBrandsFlow),
    takeEvery(getProducts.type, getProductsFlow),
    takeEvery(getDetailProduct.type, getDetailProductFlow),
  ]);
}

export default brandWatcher;
