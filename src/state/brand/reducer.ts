import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  requestingBrands: false,
  brands: [],
  requestingProducts: false,
  products: [],
  paginate: 0,
  requestingDetail: false,
  product: {},
};

export const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    getBrands: (state) => {
      state.requestingBrands = true;
    },
    getBrandsSuccess: (state, action) => {
      state.requestingBrands = false;
      state.brands = action.payload;
    },
    getProducts: (state, action) => {
      state.requestingProducts = true;
      state.paginate = action.payload.paginate;
    },
    getProductsSuccess: (state, action) => {
      state.requestingProducts = false;
      state.products = state.paginate === 1 ? action.payload : [...state.products, ...action.payload];
    },
    getDetailProduct: (state) => {
      state.requestingDetail = true;
    },
    getDetailProductSuccess: (state, action) => {
      state.requestingDetail = false;
      state.product = action.payload;
    },
  },
});

export const {
  getBrands,
  getBrandsSuccess,
  getProducts,
  getProductsSuccess,
  getDetailProduct,
  getDetailProductSuccess,
} = brandSlice.actions;

export default brandSlice.reducer;
