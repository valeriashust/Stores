
export const ADD_STORE = 'ADD_STORE';
export const EDIT_STORE = 'EDIT_STORE';

export const addStore = store => ({
    type: 'ADD_STORE',
    store
});

export const editStore = (id, store) => ({
    type: 'EDIT_STORE',
    id,
    store
});
