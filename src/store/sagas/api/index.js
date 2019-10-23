import { select, put as putEffect } from 'redux-saga/effects';
import api from '../../../core/api';
import * as actions from '../../actions/authorize';


export function * get (path, query = null) {
  return yield apiCall(path, 'GET', query);
}

export function * post (path, query = null, body = null) {
  return yield apiCall(path, 'POST', body ? query : null, body || query);
}

export function * put (url, query = null, body = null) {
  return yield apiCall(url, 'PUT', body ? query : null, body || query);
}

export function * patch (url, query = null, body = null) {
  return yield apiCall(url, 'PATCH', body ? query : null, body || query);
}

export function * del (url, query = null) {
  return yield apiCall(url, 'DELETE', query);
}


function * apiCall (path, method, query, body) {
  const apiInstance = api();
  const { token } = yield select(state => state.auth);
  const { selectedContract } = yield select(state => state.user);
  const contractId = selectedContract && selectedContract.hasOwnProperty('contract')
    ? selectedContract.contract['_id']
    : null;

  if (token) {
    apiInstance.setAuthorization(`Bearer ${token}`);
  }

  if (contractId) {
    apiInstance.setContractId(contractId);
  }

  let result;
  try {
    result = yield apiInstance.call(path, method, query, body);
  } catch (error) {
    if (apiInstance.response.status === 401) {
      yield putEffect(actions.logout());
    }

    throw error;
  }

  return result;
}
