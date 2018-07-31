
export const ADD_STORE = 'ADD_STORE';
export const EDIT_STORE = 'ADD_STORE';

export const addStore = store => ({
    type: 'ADD_STORE',
    store
});

export const editStore = (id, name, time, address) => ({
    type: 'EDIT_STORE',
    id,
    name,
    time,
    address
});
