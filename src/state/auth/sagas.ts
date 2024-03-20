import {call, all, takeEvery, put} from 'redux-saga/effects';
import {ROUTE_ENDPOINT} from '../../utils/endPoint';
import { getAccessToken, getAccessTokenSuccess, getTrm, getTrmSuccess } from "./reducer.ts";

const getTokensAPI = () => {
  const data = new URLSearchParams();
  data.append('grant_type', 'password');
  data.append('username', 'E35A0219-2B87-42C2-A774-BC512C639AA4');
  data.append('password', 'QcW3M8hwu4qEUax5wSSyPkLzpDHVYF9N');
  return fetch(`${ROUTE_ENDPOINT}token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
  })
    .then(response => response.json())
    .then(json => {
      if (json?.access_token) {
        return json.access_token;
      }
    })
    .catch(error => {
      throw error;
    });
};

function* getTokensFlow() {
  try {
    const token = yield call(getTokensAPI);
    yield put(getAccessTokenSuccess(token));
  } catch (error) {
    console.log(error, 'error');
  }
}

const getTrmAPI = () => {
  return fetch(`${ROUTE_ENDPOINT}v1/rates/trm/CO`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
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

function* getTrmFlow() {
  try {
    const token = yield call(getTrmAPI);
    yield put(getTrmSuccess(token));
  } catch (error) {
    console.log(error, 'error');
  }
}

function* authWatcher() {
  yield all([takeEvery(getAccessToken.type, getTokensFlow), takeEvery(getTrm.type, getTrmFlow)]);
}

export default authWatcher;
