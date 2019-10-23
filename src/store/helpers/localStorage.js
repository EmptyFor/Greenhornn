// token
export const setToken = (token) => {
  localStorage.setItem('dgds-token', token);
}

export const getToken = () => {
  return localStorage.getItem('dgds-token');
}

export const removeToken = () => {
  localStorage.removeItem('dgds-token');
}


// contract-id
export const setContractId = (id) => {
  localStorage.setItem('dgds-contract', id);
}

export const getContractId = () => {
  return localStorage.getItem('dgds-contract');
}

export const removeContractId = () => {
  localStorage.removeItem('dgds-contract');
}

export const getCurrentContractId = (contracts = []) => {
  const id = getContractId();

  if (!contracts.length) return null;

  if (id && contracts.includes(id)) {
    return id;
  }

  const newId = contracts[0];
  setContractId(newId);
  return newId;
}
