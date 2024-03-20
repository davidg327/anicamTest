import {call, all, takeEvery, put} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from '../../utils/endPoint';
import {
  createUser,
  createUserSuccess,
  loginUser,
  loginUserSuccess,
} from './reducer.ts';

const createUserAPI = (values: any) => {
  return fetch(`${ROUTE_ENDPOINT}v1/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${values.token}`,
    },
    body: JSON.stringify(values),
  })
    .then(response => response.json())
    .then(json => {
      if (json) {
        return json;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* createUserFlow(action) {
  try {
    yield call(createUserAPI, action.payload, action.payload.token);
    yield put(createUserSuccess());
    let values = {
      user_name: action.payload.email,
      password: action.payload.password,
      token: action.payload.token,
    };
    yield put(loginUser(values));
  } catch (error) {
    console.log(error, 'error');
  }
}

const loginUserAPI = (values: any) => {
  return fetch(`${ROUTE_ENDPOINT}v1/users/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${values.token}`,
    },
    body: JSON.stringify(values),
  })
    .then(response => response.json())
    .then(json => {
      if (json) {
        return json;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* loginUserFlow(action) {
  try {
    const user = yield call(loginUserAPI, action.payload);
    yield put(loginUserSuccess(user));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* userWatcher() {
  yield all([
    takeEvery(createUser.type, createUserFlow),
    takeEvery(loginUser.type, loginUserFlow),
  ]);
}

export default userWatcher;
